pub mod dict {
    use std::collections::BTreeMap;
    use std::{fs::File,io::BufReader};

    #[derive(Debug, serde::Serialize, serde::Deserialize)]
    pub struct Entry {
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
        return serde_yaml::from_reader(reader);
    }
}

pub mod presentation {
    use super::dict::Entry;

    pub fn format_entry_type(entry: &Entry) -> String {
        match &entry.signature {
            None => format!("{}", entry.family),
            Some(signature) => format!("{} ({})", entry.family, signature)
        }
    }
}

pub mod experimental {
    /// Types of abstractions (ba, be, ...)
    #[derive(Clone, Copy)]
    pub enum AbstractionType {
        Generic, // ba
        Event, // be
        // ...
    }

    /// The list of values filling a particular predicate place
    /// By default, all places are filled with the empty vector.
    /// By filling a place with more than a single value, you get distribution over all values of
    /// each place in the predicate
    type PlaceValues = Vec<Predicate>;

    /// Partially filled predicates
    pub struct Predicate {
        /// The "selbri" of the predicate, e.g. "cfa se jon"
        chain: String,

        /// The numbered places of the predicate, e.g. [x1: mi, x2: mo, x3: mi]
        numbered_places: Vec<Predicate>,

        /// The imported places of the predicate
        imported_places: Vec<(ImportedPlace, Predicate)>
    }

    /// Abstraction of a predicate
    pub struct Abstraction {
        /// The type of abstraction
        type_: AbstractionType,

        /// The predicate
        predicate: Predicate,
    }

    /// Applies "sie" to a predicate (i.e. deletes all places other than x1 and x2)
    pub fn apply_sie(input_predicate: &Predicate) -> Predicate {
        // deletes pred.numbered_places[x3...]
        Predicate { chain: String::new(), numbered_places: Vec::new(), imported_places: Vec::new() } // TODO: implement
    }

    /// Applies "fa" to a predicate (i.e. fills the first place)
    pub fn apply_fa(input_predicate: &Predicate, place_value: &Predicate) -> Predicate {
        // inserts place_value into pred.numbered_places[x1]
        Predicate { chain: String::new(), numbered_places: Vec::new(), imported_places: Vec::new() } // TODO: implement
    }

    /// Applies "fai" to a predicate (i.e. fills the next empty place)
    pub fn apply_fai(input_predicate: &Predicate, place_value: &Predicate) -> Predicate {
        // inserts place_value into pred.numbered_places[xn], where xn is the index of the smallest
        // empty place
        Predicate { chain: String::new(), numbered_places: Vec::new(), imported_places: Vec::new() } // TODO: implement
    }

    type PredicateOperator = dyn Fn(&Predicate) -> Predicate;

    type AbstractionOperator = dyn Fn(&Abstraction) -> Abstraction;

    /// Lifts an operator over predicates into an operator over abstractions
    pub fn lift_to_abstraction(operator: Box<PredicateOperator>) -> Box<AbstractionOperator> {
        Box::new(move |input_abstraction: &Abstraction| {
            let input_predicate = &input_abstraction.predicate;
            let output_predicate = operator(&input_predicate);
            return Abstraction { type_: input_abstraction.type_, predicate: output_predicate };
        })
    }

    fn test() {
        // Some examples of how to lift abstractions
        let sie_but_for_abstractions : Box<AbstractionOperator> = lift_to_abstraction(Box::new(apply_sie));

        // Some examples of predicates
        let sample_predicate = Predicate {
            chain: String::from("cfa se jon"),
            numbered_places: vec!
                [
                    Predicate { chain: String::from("mi"), numbered_places: Vec::new(), imported_places: Vec::new() },
                    Predicate { chain: String::from("mo"), numbered_places: Vec::new(), imported_places: Vec::new() },
                    Predicate { chain: String::from("mi"), numbered_places: Vec::new(), imported_places: Vec::new() },
                ],
            imported_places: Vec::new(),
        };
    }

    pub struct ImportedPlace {
        // to be defined
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
