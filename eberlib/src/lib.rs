// TODO: [jqueiroz] split modules into separate files

pub mod dict {
    use std::collections::BTreeMap;
    use std::{fs::File,io::BufReader};

    #[derive(Debug, serde::Serialize, serde::Deserialize)]
    pub struct Entry {
        #[serde(default)]
        pub key: String,

        // TODO: [jqueiroz] enum for all possible families
        #[serde(rename = "_family")]
        pub family: String,

        #[serde(rename = "_signature")]
        pub signature: Option<String>,

        #[serde(rename = "eng_short")]
        pub english_short: String,

        #[serde(rename = "eng_long")]
        pub english_long: String,

        #[serde(rename = "jbo_similar")]
        pub lojban_similar: Option<String>,
    }

    pub type Dictionary = BTreeMap<String, Entry>;

    pub fn from_file(file: File) -> Result<Dictionary, serde_yaml::Error> {
        let reader = BufReader::new(file);
        let mut dict = serde_yaml::from_reader(reader)?;
        utils::extend_with_keys(&mut dict);
        return Ok(dict);
    }

    mod utils {
        use super::Dictionary;

        pub fn extend_with_keys(dict: &mut Dictionary) {
            for (k, v) in dict.iter_mut() {
                v.key = k.clone();
            }
        }
    }
}

pub mod presentation {
    use super::dict::Entry;
    use super::utils::letter_decomposition::{DecompositionError,LetterPattern,LetterType};

    pub fn format_entry_type(entry: &Entry) -> String {
        match &entry.signature {
            None => format!("{}", entry.family),
            Some(signature) => format!("{} ({})", entry.family, signature)
        }
    }

    pub fn format_decomposition_error(decomposition_error: &DecompositionError) -> String {
        match decomposition_error {
            DecompositionError::EmptyWord => String::from("Empty word"),
            DecompositionError::AllConsonants => String::from("Word contains only consonants"),
            DecompositionError::UnexpectedSeparatorAtWordStart(c) => format!("Unexpected separator at word start ('{}')", c),
            DecompositionError::UnexpectedHAfterConsonant(pos) => format!("Unexpected 'h' after consonant (at position {})", pos),
            DecompositionError::UnexpectedNonCodaConsonantAfterVowel(pos, c) => format!("Unexpected non-coda consonant after vowel ('{}', at position {})", c, pos),
            DecompositionError::UnexpectedVowelAfterDiphthong(pos, c) => format!("Unexpected vowel after diphthong ('{}', at position {})", c, pos),
            DecompositionError::UnexpectedConsonantAfterSeparator(pos, c) => format!("Unexpected consonant after separator ('{}', at position {})", c, pos),
            DecompositionError::UnexpectedHAfterSeparator(pos) => format!("Unexpected 'h' after separator (at position {})", pos),
            DecompositionError::InvalidWordEnding(c) => format!("Invalid word ending character ('{}')", c),
            DecompositionError::UnknownSymbol(pos, c) => format!("Unknown symbol ('{}', at position {})", c, pos),
        }
    }

    pub fn format_letter_pattern(letter_pattern: &LetterPattern) -> String {
        letter_pattern.iter().map(|letter_type| match letter_type {
            LetterType::VowelTail => 'V',
            LetterType::Consonant => 'C',
        }).collect()
    }
}

pub mod utils {
    use super::dict::Entry;

    pub mod letter_decomposition {
        pub enum LetterType {
            VowelTail,
            Consonant,
        }

        /// A pattern of consonants and vowel tails, e.g. CVC or CCVC
        pub type LetterPattern = Vec<LetterType>;

        // There is no special handling of diphthongs yet
        pub static VOWELS : [char; 8] = [ 'a', 'e', 'i', 'o', 'u', 'y', 'q', 'w' ];

        pub static CODA : [char; 3] = [ 'l', 'n', 'r' ];

        pub static SEPARATORS : [char; 4] = [ 'l', 'n', 'r', 'h' ];

        pub static CONSONANTS : [char; 17] = [ 'b', 'c', 'd', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'x', 'z' ];

        pub fn is_valid_letter(letter: &char) -> bool {
            return is_vowel(&letter) || is_consonant(&letter) || is_h(&letter);
        }

        pub fn is_vowel(letter: &char) -> bool {
            return VOWELS.contains(letter);
        }

        pub fn is_separator(letter: &char) -> bool {
            return SEPARATORS.contains(letter);
        }

        pub fn is_coda(letter: &char) -> bool {
            return CODA.contains(letter);
        }

        pub fn is_h(letter: &char) -> bool {
            return letter == &'h';
        }

        pub fn is_consonant(letter: &char) -> bool {
            return CONSONANTS.contains(letter);
        }

        // TODO: fix validation of diphthongs (UnexpectedVowelAfterDiphthong)
        pub enum DecompositionError {
            EmptyWord,
            AllConsonants,
            UnexpectedSeparatorAtWordStart(char),
            UnexpectedHAfterConsonant(usize),
            UnexpectedNonCodaConsonantAfterVowel(usize, char),
            UnexpectedVowelAfterDiphthong(usize, char),
            UnexpectedConsonantAfterSeparator(usize, char),
            UnexpectedHAfterSeparator(usize),
            InvalidWordEnding(char),
            UnknownSymbol(usize, char),
        }

        enum DecompositionState {
            Empty,     // has not seen anything yet (which means an immediately following coda is not allowed)
            Consonant, // has seen only consonants so far (has the same transition rules as Empty, except that an immediately following coda is allowed)
            Vowel1,    // has just seen a single vowel
            Vowel2,    // has just seen two consecutive vowels (i.e. a diphthong)
            Separator, // has just seen a separator
        }

        /// Decomposes a word into a pattern of consonants and vowel tails
        pub fn decompose_word(word: &str) -> Result<LetterPattern, DecompositionError> {
            // TODO: recognize more invalid cases, such as:
            //   1. invalid diphthongs
            //   2. invalid consonant pairs
            //   3. more than two consecutive consonants?? (probably not necessary to validate here)
            //  For (2) and (3), it should suffice to break "Consonant" into "Consonant1(char)" and "Consonant2"
            let mut result = Vec::new();
            let mut state = DecompositionState::Empty;
            let mut last_letter : Option<char> = None;
            for (position, letter) in word.chars().enumerate() {
                last_letter = Some(letter);
                match &state {
                    DecompositionState::Empty => {
                        // If we have not seen anything, then we must see either a vowel or a non-coda consonant
                        if is_vowel(&letter) {
                            state = DecompositionState::Vowel1;
                            result.push(LetterType::VowelTail);
                        } else if is_separator(&letter) {
                            return Err(DecompositionError::UnexpectedSeparatorAtWordStart(letter))
                        } else if is_consonant(&letter) {
                            state = DecompositionState::Consonant;
                            result.push(LetterType::Consonant);
                        } else {
                            return Err(DecompositionError::UnknownSymbol(position, letter));
                        }
                    }
                    DecompositionState::Consonant => {
                        if is_vowel(&letter) {
                            state = DecompositionState::Vowel1;
                            result.push(LetterType::VowelTail);
                        } else if is_consonant(&letter) {
                            state = DecompositionState::Consonant;
                            result.push(LetterType::Consonant);
                        } else if is_h(&letter) {
                            return Err(DecompositionError::UnexpectedHAfterConsonant(position));
                        } else {
                            return Err(DecompositionError::UnknownSymbol(position, letter));
                        }
                    }
                    DecompositionState::Vowel1 => {
                        // The first vowel must be followed by either a second vowel or a separator
                        if is_vowel(&letter) {
                            state = DecompositionState::Vowel2;
                        } else if is_separator(&letter) {
                            state = DecompositionState::Separator;
                        } else if is_consonant(&letter) {
                            return Err(DecompositionError::UnexpectedNonCodaConsonantAfterVowel(position, letter));
                        } else {
                            return Err(DecompositionError::UnknownSymbol(position, letter));
                        }
                    }
                    DecompositionState::Vowel2 => {
                        // The second vowel must be followed by a separator
                        if is_vowel(&letter) {
                            // Well, we need special handling for diphthongs now that e.g. "mliya"
                            // is allowed. Until then, let's NOT raise any decomposition errors.
                            // TODO: [jqueiroz] resume validating diphthongs
                            //return Err(DecompositionError::UnexpectedVowelAfterDiphthong(position, letter));
                        } else if is_separator(&letter) {
                            state = DecompositionState::Separator;
                        } else if is_consonant(&letter) {
                            return Err(DecompositionError::UnexpectedNonCodaConsonantAfterVowel(position, letter));
                        } else {
                            return Err(DecompositionError::UnknownSymbol(position, letter));
                        }
                    }
                    DecompositionState::Separator => {
                        // A separator must be followed by a vowel
                        if is_vowel(&letter) {
                            state = DecompositionState::Vowel1;
                        } else if is_consonant(&letter) {
                            return Err(DecompositionError::UnexpectedConsonantAfterSeparator(position, letter));
                        } else if is_h(&letter) {
                            return Err(DecompositionError::UnexpectedHAfterSeparator(position));
                        } else {
                            return Err(DecompositionError::UnknownSymbol(position, letter));
                        }
                    }
                }
            }

            // Validate the ending state
            match state {
                DecompositionState::Empty => {
                    return Err(DecompositionError::EmptyWord);
                }
                DecompositionState::Consonant => {
                    // A word cannot consist entirely of consonants
                    return Err(DecompositionError::AllConsonants);
                }
                DecompositionState::Vowel1 | DecompositionState::Vowel2 => {
                    // These are valid terminal states where nothing needs to be done
                    return Ok(result);
                }
                DecompositionState::Separator => {
                    // This is a valid terminal state, but the last character needs to be a coda (not h), and some postprocessing is needed to add it as a separate consonant (as it is not part of the vowel tail)
                    if let Some(letter) = last_letter {
                        if is_coda(&letter) {
                            result.push(LetterType::Consonant);
                            return Ok(result);
                        } else {
                            assert!(is_valid_letter(&letter));
                            return Err(DecompositionError::InvalidWordEnding(letter));
                        }
                    } else {
                        // This should never happen, but let's handle this case nevertheless
                        return Err(DecompositionError::EmptyWord);
                    }
                }
            }
        }
    }

    #[derive(PartialEq)]
    pub enum RootType {
        VC,
        CVC,
        CCV,
        CCVC,
    }

    pub enum InvalidRootTypeError {
        NotARoot,
        IllegalLetterPattern(letter_decomposition::DecompositionError),
        InvalidLetterPatternForRoots(letter_decomposition::LetterPattern),
    }

    pub fn is_root(entry: &Entry) -> bool {
        return entry.family == "R";
    }

    pub fn get_root_type(entry: &Entry) -> Result<RootType, InvalidRootTypeError> {
        if !is_root(entry) {
            Err(InvalidRootTypeError::NotARoot)
        } else {
            use letter_decomposition::LetterType;

            let letter_pattern = letter_decomposition::decompose_word(&entry.key).or_else(|err| Err(InvalidRootTypeError::IllegalLetterPattern(err)))?;
            return match letter_pattern[..] {
                [LetterType::VowelTail, LetterType::Consonant] => Ok(RootType::VC),
                [LetterType::Consonant, LetterType::VowelTail, LetterType::Consonant] => Ok(RootType::CVC),
                [LetterType::Consonant, LetterType::Consonant, LetterType::VowelTail] => Ok(RootType::CCV),
                [LetterType::Consonant, LetterType::Consonant, LetterType::VowelTail, LetterType::Consonant] => Ok(RootType::CCVC),
                _ => Err(InvalidRootTypeError::InvalidLetterPatternForRoots(letter_pattern)),
            };
        }
    }
}

pub mod validation {
    use super::dict::Entry;
    use super::utils;
    use super::presentation;

    pub struct ValidationResult {
        pub key: String,
        pub message: String,
        pub suggestions: Vec<String>,
    }

    pub fn validate_entry(entry: &Entry) -> Vec<ValidationResult> {
        let mut ret = Vec::new();
        let mut push_result = |message| ret.push(ValidationResult {
            key: entry.key.clone(),
            message: message,
            suggestions: Vec::new(),
        });

        // General validations
        // . -> '

        // Root-specific validations
        if utils::is_root(entry) {
            use utils::{RootType,InvalidRootTypeError};
            match utils::get_root_type(entry) {
                Err(InvalidRootTypeError::NotARoot) => panic!("get_root_type for a root yielded NotARoot"),
                Err(InvalidRootTypeError::IllegalLetterPattern(decomposition_error)) => {
                    push_result(format!("Illegal letter pattern: {}", presentation::format_decomposition_error(&decomposition_error)));
                },
                Err(InvalidRootTypeError::InvalidLetterPatternForRoots(letter_pattern)) => {
                    push_result(format!("Invalid letter pattern for root: {}", presentation::format_letter_pattern(&letter_pattern)));
                },
                Ok(root_type) => {
                    // For CCV and CCVC roots, the signature must match the final coda (if any)
                    if root_type == RootType::CCV || root_type == RootType::CCVC {
                        // TODO: validate the signature
                    }
                }
            }
        }

        // Return the result
        return ret;
    }
}

pub mod cli {
    use std::io::{self, BufRead};
    use super::{presentation,dict::Dictionary};

    pub fn run_interactive_dictionary(dict: Dictionary) {
        let stdin = io::stdin();

        // TODO: [jqueiroz] search based on "english_short" and "lojban_similar" as well ("?cilre" or "?learn")
        for line in stdin.lock().lines() {
            match dict.get(&line.unwrap()) {
                None => println!("=> not found"),
                Some(entry) => {
                    println!("=> Type: {}", presentation::format_entry_type(&entry));
                    println!("=> English: {} -- {}", &entry.english_short, &entry.english_long);
                    match &entry.lojban_similar {
                        Some(similar) => println!("=> Lojban: similar to {}", similar),
                        _ => {}
                    }
                }
            }
        }
    }
}
