var words = {};

// Terminology :
// - [0] Proposition : A proposition is anything that has a truth value (which can be true or false).
//       It is equivalent to a nullary predicate (0 arguments).
// - [T] Predicate : a proposition template with one or more open blanks (called arguments) which may be
//       filled in to yield a complete proposition with a truth value.
// - [1] Property : predicate with 1 argument.
// - [2] Relation : predicate with 2 arguments.
// - [e] Entity: everything that satisfies a given property.
// - [E] Event : a proposition that is claimed to occur.
//
// Predicate definitions :
// Words have a precise definition which define their predicate. "x1", "x2", etc represents
// the arguments of the predicate. The expected type of the argument can be provided,
// otherwise the place is expected to receive a entity.
//
// Null values can be used as an argument. 
// Each predicate definition can define how to handle a null value.
// If it is not defined, an elliptical value is used. (value must be infered from context)
//
//
// Implicit cohersions : 
// When an predicate with the inapropriate number of arguments is provided, it can go through
// a serie of implicit cohersion. If it cannot coherse into the right type, it's meaning is
// undefined (grammatically correct but semantically incorrect).
//
// - Predicate with more than 1 argument into a property : all arguments except x1 are filled
//   with the null value.
// - Predicate with more than 0 argument into a proposition : all arguments are filled with the
//   null value.
//
// Predicate chaining :
// Predicates can be chained by being next to each other. To avoid always using
// abstractors to fill the arguments (thus leading to deep nesting), there are some flattening
// rules listed below. 
//
// If more than 2 predicates are chained, the flattening is right-grouping.
// A B C = (A (B C))
//
// Flattening rules :
// - The left predicate must have at least one argument which expect an abstraction
//   (predicate or event). The first encountered by searching from the last (xn) to the first (x1) is used for
//   the flattening. If no argument expects an abstraction, the result of {[left] ce [right]} is used.
// - The right predicate is first cohersed (if needed) into the type expected by the selected place.
//   Then, the argument list of this (cohersed) predicate replaces the selected place.

words["a.a"]                         = { family: "L"        , short: "lexeme"                       , signature: "e0e"        , long: "x1 is a lexeme meaning x2 (proposition) with components x3", lojban: "lujvo"};
words["a'y"]                         = { family: "BY"       , short: "A"                                                      , long: "letter A", lojban: "a'y/abu"};
words["a"]                           = { family: "A"        , short: ""                             ,                           long: "prefix a 1 word long lexeme", lojban: "lujvo making" };
words["ada"]                         = { family: "L"        , short: "paragraph"                    , signature: "eee"        , long: "x1 is a paragraph about subject x2 composed of sentence(s) x3", lojban: "jufmei"};
words["ade"]                         = { family: "L"        , short: "proposition"                  , signature: "0Te"        , long: "x1 is a proposition with predicate x2 (abstraction) among arguments x3 (set)", lojban: "bridi"};
words["ado"]                         = { family: "L"        , short: "proposition-tail"             , signature: "e0Te"       , long: "x1 is a proposition-tail of proposition x2 with predicate x3 (abstraction) among arguments x4 (set)", lojban: "brirebla"};
words["asa"]                         = { family: "L"        , short: "name"                         , signature: "eee"        , long: "x1 ([sa] predicate / quoted words) is a name of x2 given by x3", lojban: "cmene"};
words["ba"]                          = { family: "BA"       , short: "abstraction"                                            , long: "x1 is [proposition] expressed in sentence x2 (text). if places are made open with one or more <ma>, the abstraction have to place structure discribed by them", lojban: "du'u/ka" };
words["bai"]                         = { family: "BAI"      , short: ""                             ,                           long: "abstraction elidible terminator", lojban: "kei"};
words["ban"]                         = { family: "R"        , short: "language"                     , signature: "ee0"        , long: "x1 is a language/dialect used by x2 to express x3 (proposition)", lojban: "bangu" }
words["ber"]                         = { family: "R"        , short: "eberbanic"                    , signature: "e1"         , long: "x1 reflects eberbanic language/culture/nationality/community is aspect/property x2"};
words["bi"]                          = { family: "BA"       , short: "event"                                                  , long: "x1 is the event of [proposition]", lojban: "nu"};
words["bla"]                         = { family: "R"        , short: "future"                       , signature: "EE"         , long: "x1 (event) is in the future/after x2 (event)", lojban: "balvi" }
words["bria"]                        = { family: "R"        , short: "arm"                          , signature: "ee"         , long: "x1 is a/the arm of x2", lojban: "cabna" }
words["by"]                          = { family: "BY"       , short: "B"                                                      , long: "letter B", lojban: "by"};
words["ca"]                          = { family: "CA"       , short: "or"                                                     , long: "x1 (property/event/proposition) is satisfied/claimed/claimed to happend if [left] OR [right] are", lojban: "ja"};
words["cai"]                         = { family: "CAI"      , short: "(addressing)"                                           , long: "call someone's attention", lojban: "doi"};
words["ce"]                          = { family: "CA"       , short: "and"                                                    , long: "x1 (property/event/proposition) is satisfied/claimed/claimed to happend if [left] AND [right] are", lojban: "je"};
words["ci'e"]                        = { family: "CAI"      , short: "(thank)"                                                , long: "thanks - no thanks to you", lojban: "ki'e"};
words["ci"]                          = { family: "CA"       , short: "connective ?"                                           , long: "predicate connective question", lojban: "je'i"};
words["cki'a"]                       = { family: "R"        , short: "write"                        , signature: "eee"        , long: "x1 writes x2 on x3", lojban: "ciska"};
words["cku'a"]                       = { family: "R"        , short: "book"                         , signature: "eeeee"      , long: "x1 is a book", lojban: "cukta"};
words["cna"]                         = { family: "R"        , short: "present"                      , signature: "EE"         , long: "x1 (event) is in the present of/simultaneous with x2 (event)", lojban: "birka" }
words["co'o"]                        = { family: "CAI"      , short: "(bye)"                                                  , long: "parties/goodbye", lojban: "co'o"};
words["co"]                          = { family: "CA"       , short: "iif"                                                    , long: "x1 (property/event/proposition) is satisfied/claimed/claimed to happend if both [left] and [right] are, or both are not", lojban: "jo"};
words["coi"]                         = { family: "CAI"      , short: "(hello)"                                                , long: "greetings/hello", lojban: "coi"};
words["cti'a"]                       = { family: "R"        , short: "eat"                          , signature: "ee"         , long: "x1 eats x2", lojban: "citka" }
words["cu"]                          = { family: "CA"       , short: "whether-or-not"                                         , long: "x1 (property/event/proposition) is satisfied/claimed/claimed to happend if both [left] is (regardless of the right)", lojban: "ju"};
words["cy"]                          = { family: "BY"       , short: "C"                                                      , long: "letter C", lojban: "cy"};
words["da'ul"]                       = { family: "R"        , short: "animal"                       , signature: "ee"         , long: "x1 is an animal/creature of species x2", lojban: "danlu"};
words["da"]                          = { family: "DA"       , short: "(paragraph)"                                            , long: "paragraph break, introduce new topic", lojban: "ni'o"};
words["de"]                          = { family: "DE"       , short: ""                                                       , long: "proposition-tail elidible starter", lojban: "i"};
words["dei"]                         = { family: "DEI"      , short: ""                                                       , long: "proposition-tail elidible terminator", lojban: "iau"};
words["di"]                          = { family: "DI"       , short: ""                                                       , long: "define which dialect/version the text is in", lojban: "jo'au"};
words["dje"]                         = { family: "R"        , short: "day"                          , signature: "e"          , long: "x1 is a day", lojban: "djedi" }
words["dju"]                         = { family: "R"        , short: "know"                         , signature: "e0"         , long: "x1 knows fact(s) x2 (proposition)", lojban: "djuno" }
words["do"]                          = { family: "DO"       , short: ""                                                       , long: "proposition-tail elidible starter, prefix the main predicate of a proposition", lojban: "cu"};
words["doi"]                         = { family: "DO"       , short: ""                                                       , long: "proposition-tail elidible terminator", lojban: "vau"};
words["dra'u"]                       = { family: "R"        , short: "milk"                         , signature: "e"          , long: "x1 is milk", lojban: "ladru" }
words["du'an"]                       = { family: "R"        , short: "give"                         , signature: "eee"        , long: "x1 (donor) gives/donates gift/present x2 to recipient x3 (without payment/exchange)", lojban: "dunda"};
words["du"]                          = { family: "DU"       , short: "modal"                                                  , long: "import x1 place of following predicate (non compound)", lojban: "fi'o"};
words["dy"]                          = { family: "BY"       , short: "D"                                                      , long: "letter D", lojban: "dy"};
words["dza'u"]                       = { family: "R"        , short: "walk"                         , signature: "e"          , long: "x1 walks", lojban: "cadzu"};
words["e'y"]                         = { family: "BY"       , short: "E"                                                      , long: "letter E", lojban: "e'y/ebu"};
words["e"]                           = { family: "E"        , short: ""                                                       , long: "prefix a 2 words long lexeme", lojban: "lujvo making" };
words["eberban"]                     = { family: "L"        , short: "eberban"                      , signature: "e"          , long: "x1 is the eberban language"};
words["ekanmer"]                     = { family: "L"        , short: "man"                          , signature: "e"          , long: "x1 is a man/men", lojban: "nanmu"};
words["ekanprei"]                    = { family: "L"        , short: "father"                       , signature: "ee"         , long: "x1 is a father of x2", lojban: "patfu"};
words["esfemer"]                     = { family: "L"        , short: "woman"                        , signature: "e"          , long: "x1 is a woman/women", lojban: "ninmu"};
words["esfeprei"]                    = { family: "L"        , short: "mother"                       , signature: "ee"         , long: "x1 is a mother of x2", lojban: "mamta"};
words["etatai"]                      = { family: "L"        , short: "number"                       , signature: "e1"         , long: "x1 is a number in dimension/property x2 (default = unit)", lojban: "namcu"};
words["fa'un"]                       = { family: "R"        , short: "occurs"                       , signature: "E"          , long: "x1 (event) is an event that happens/occurs/takes place", lojban: "fasnu"};
words["fa"]                          = { family: "FA"       , short: "x1"                                                     , long: "tag proposition place #1", lojban: "fa"};
words["fai"]                         = { family: "FA"       , short: "x+"                                                     , long: "next proposition place tag", lojban: "sumti chaining"};
words["fe"]                          = { family: "FA"       , short: "x2"                                                     , long: "tag proposition place #2", lojban: "fe" };
words["fei"]                         = { family: "FA"       , short: "x?"                                                     , long: "proposition place tag question", lojban: "fi'a" };
words["fi"]                          = { family: "FA"       , short: "x3"                                                     , long: "tag proposition place #3", lojban: "fi" };
words["fie"]                         = { family: "FA"       , short: "restrictive adverbial"                                  , long: "restrictive adverbial. the first place of the provided predicate is claimed to occur in conjunction with the outer proposition ({mia fue mie} = {fa bi mia do fa'un je do mie})", lojban: "poi'a"};
words["fii"]                         = { family: "FA"       , short: "non-restrictive adverbial"                              , long: "non-restrictive adverbial. the first place of the provided predicate is claimed to be such that the outer proposition satisfies it, and the outer proposition is claimed ({mia fui mie} = {fa bi mia bai va mua do fa'un de fa mua do mie})", lojban: "noi'a"};
words["fin"]                         = { family: "R"        , short: "create"                       , signature: "ee"         , long: "x1 invents/creates/composes/authors x2", lojban: "finti"};
words["fio"]                         = { family: "FA"       , short: "subordinating adverbial"                                , long: "subordinating adverbial. the outer proposition is claimed to satisfy the first place of the provided predicate, but is not itself claimed to occur ({mia fuo mie} = {fa bi mia do mie})", lojban: "soi'a"};
words["fo"]                          = { family: "FA"       , short: "x4"                                                     , long: "tag proposition place #4", lojban: "fo" };
words["foi"]                         = { family: "FA"       , short: "prenex"                                                 , long: "don't fill a place. can be used to provide a topic or declare quantification and/or value of a variable", lojban: "fai'i" };
words["fu"]                          = { family: "FA"       , short: "x5"                                                     , long: "tag proposition place #5", lojban: "fu" };
words["fua"]                         = { family: "FA"       , short: "x6"                                                     , long: "tag proposition place #6" };
words["fue"]                         = { family: "FA"       , short: "x7"                                                     , long: "tag proposition place #7" };
words["fui"]                         = { family: "FA"       , short: "x8"                                                     , long: "tag proposition place #8" };
words["fuo"]                         = { family: "FA"       , short: "x9"                                                     , long: "tag proposition place #9" };
words["fuu"]                         = { family: "FA"       , short: "x10"                                                    , long: "tag proposition place #10" };
words["fy"]                          = { family: "BY"       , short: "F"                                                      , long: "letter F", lojban: "fy"};
words["ga"]                          = { family: "GA"       , short: ""                                                       , long: "forethought connective starter", lojban: "ga"};
words["gai"]                         = { family: "GAI"      , short: ""                                                       , long: "forethought connective elidible terminator", lojban: "zantufa gi'i"};
words["gi"]                          = { family: "GI"       , short: ""                                                       , long: "forethought connective separator", lojban: "zantufa gi"};
words["gle'i"]                       = { family: "R"        , short: "happy"                        , signature: "eE"         , long: "x1 is happy about x2 (event)", lojban: "gleki"};
words["go"]                          = { family: "GO"       , short: ""                                                       , long: "priority scope starter", lojban: "ke"};
words["goi"]                         = { family: "GOI"      , short: ""                                                       , long: "priority scope elidible terminator", lojban: "ke'e"};
words["gre'u"]                       = { family: "R"        , short: "dog"                          , signature: "e"          , long: "x1 is a dog (canine)", lojban: "gerku"};
words["gy"]                          = { family: "BY"       , short: "G"                                                      , long: "letter G", lojban: "gy"};
words["i'y"]                         = { family: "BY"       , short: "I"                                                      , long: "letter I", lojban: "i'y/ibu"};
words["i"]                           = { family: "I"        , short: ""                                                       , long: "prefix a 3 words long lexeme", lojban: "lujvo making" };
words["iy'y"]                        = { family: "BY"       , short: "Q"                                                      , long: "letter Q/i semi-vowel", lojban: "ky.bu"};
words["ja"]                          = { family: "JA"       , short: "or"                                                     , long: "distributive connective or", lojban: ".a / gi'a / ja [cu]"};
words["jai"]                         = { family: "JAI"      , short: "mixed with"                                             , long: "non-logical connective: mixed conjunction, mixed with, forming a mass", lojban: "joi"};
words["je"]                          = { family: "JA"       , short: "and"                                                    , long: "distributive connective and", lojban: ".e / gi'e / je [cu]"};
words["jgai"]                        = { family: "R"        , short: "hold"                         , signature: "ee"         , long: "x1 graps/holds x2", lojban: "jgari"};
words["ji"]                          = { family: "JA"       , short: "connective ?"                                           , long: "distributive connective question", lojban: "ji / gi'i / ji [cu]"};
words["jo"]                          = { family: "JA"       , short: "iif"                                                    , long: "distributive connective if-and-only-if", lojban: ".o / gi'o / jo [cu]"};
words["ju"]                          = { family: "JA"       , short: "whether-or-not"                                         , long: "distributive connective whether-or-not", lojban: ".u / gi'u / ju [cu]"};
words["jy"]                          = { family: "BY"       , short: "J"                                                      , long: "letter J", lojban: "jy"};
words["ka'en"]                       = { family: "R"        , short: "able"                         , signature: "e1"         , long: "x1 is able to do/be/capable of satisfying property x2", lojban: "kakne"};
words["ka"]                          = { family: "KA"       , short: "negation"                                               , long: "proposition negation / logically negates some particles", lojban: "na"};
words["kai"]                         = { family: "KAI"      , short: "negation"                                               , long: "attached to particles to negate them", lojban: "nai"};
words["kan"]                         = { family: "R"        , short: "male"                         , signature: "e"          , long: "x1 is male", lojban: "nakni"};
words["ky"]                          = { family: "BY"       , short: "K"                                                      , long: "letter K", lojban: "ky"};
words["ma'i"]                        = { family: "MA"       , short: "this"                         , signature: "e"          , long: "x1 is this here near speaker", lojban: "ti"};
words["ma'o"]                        = { family: "MA"       , short: "that"                         , signature: "e"          , long: "x1 is that here near listener", lojban: "ta" };
words["ma'u"]                        = { family: "MA"       , short: "that younder"                 , signature: "e"          , long: "x1 is that younder, far from speaker and listener", lojban: "tu" };
words["ma"]                          = { family: "MA"       , short: "(open)"                                                 , long: "binds a variable within an abstraction that represents an open space (such as <bo> properties)" };
words["me"]                          = { family: "MA"       , short: "?"                                                      , long: "predicate question, fill the blank", lojban: "ma / mo"};
words["mer"]                         = { family: "R"        , short: "human"                        , signature: "e"          , long: "x1 is human", lojban: "remna"};
words["mi'i"]                        = { family: "MA"       , short: "me & others"                  , signature: "e"          , long: "x1 is me/we/the the speaker(s)/authors(s) & others but no you the listener(s)", lojban: "mi'a" };
words["mi'o"]                        = { family: "MA"       , short: "me & you"                     , signature: "e"          , long: "x1 is me/we/the the speaker(s)/authors(s) & you the listener(s)", lojban: "mi'o" };
words["mi'oi"]                       = { family: "MA"       , short: "me & you & others"            , signature: "e"          , long: "x1 is me/we/the speaker(s)/authors(s) & you the listener(s) & others", lojban: "ma'a" };
words["mi"]                          = { family: "MA"       , short: "me"                           , signature: "e"          , long: "x1 is me/we/the speaker(s)/authors(s)", lojban: "mi" };
words["mia'a"]                       = { family: "MA"       , short: "var I-6"                                                , long: "affectable/contextual variable I-6", lojban: "fo'a" };
words["mia'e"]                       = { family: "MA"       , short: "var I-7"                                                , long: "affectable/contextual variable I-7", lojban: "fo'e" };
words["mia'i"]                       = { family: "MA"       , short: "var I-8"                                                , long: "affectable/contextual variable I-8", lojban: "fo'i" };
words["mia'o"]                       = { family: "MA"       , short: "var I-9"                                                , long: "affectable/contextual variable I-9", lojban: "fo'o" };
words["mia'u"]                       = { family: "MA"       , short: "var I-10"                                               , long: "affectable/contextual variable I-10", lojban: "fo'u" };
words["mia"]                         = { family: "MA"       , short: "var I-1"                                                , long: "affectable/contextual variable I-1", lojban: "ko'a" };
words["mie"]                         = { family: "MA"       , short: "var I-2"                                                , long: "affectable/contextual variable I-2", lojban: "ko'e" };
words["mii"]                         = { family: "MA"       , short: "var I-3"                                                , long: "affectable/contextual variable I-3", lojban: "ko'i" };
words["mio"]                         = { family: "MA"       , short: "var I-4"                                                , long: "affectable/contextual variable I-4", lojban: "ko'o" };
words["miu"]                         = { family: "MA"       , short: "var I-5"                                                , long: "affectable/contextual variable I-5", lojban: "ko'u" };
words["mla'u"]                       = { family: "R"        , short: "cat"                          , signature: "e"          , long: "x1 is a cat (feline)", lojban: "mlatu"};
words["mo'a"]                        = { family: "MA"       , short: "you!"                         , signature: "e"          , long: "x1 is you (imperative), make it true for you, the listener", lojban: "ko"};
words["mo'i"]                        = { family: "MA"       , short: "you & others"                 , signature: "e"          , long: "x1 is you listener(s) & others", lojban: "do'o"};
words["mo"]                          = { family: "MA"       , short: "you"                          , signature: "e"          , long: "x1 is you listener(s)", lojban: "do"};
words["mu'a"]                        = { family: "MA"       , short: "(previous value)"                                       , long: "when the content of a place is overritten, it represents the previous content of the place" };
words["mu'e"]                        = { family: "MA"       , short: "(object of relative clause)"                            , long: "binds to the relativized object of a relative clause", lojban: "ke'a" };
words["mu'i"]                        = { family: "MA"       , short: "(topic)"                                                , long: "referers to the current topic (most recent unquantified predicate in a prenex)", lojban: "zoi'i" };
words["mu"]                          = { family: "MA"       , short: "(elliptical)"                                           , long: "elliptical/unspecified predicate" };
words["mua"]                         = { family: "MA"       , short: "var U-1"                                                , long: "affectable/contextual variable U-1", lojban: "broda" };
words["mue"]                         = { family: "MA"       , short: "var U-2"                                                , long: "affectable/contextual variable U-2", lojban: "brode" };
words["mui"]                         = { family: "MA"       , short: "var U-3"                                                , long: "affectable/contextual variable U-3", lojban: "brodi" };
words["muo"]                         = { family: "MA"       , short: "var U-4"                                                , long: "affectable/contextual variable U-4", lojban: "brodo" };
words["muu"]                         = { family: "MA"       , short: "var U-5"                                                , long: "affectable/contextual variable U-5", lojban: "brodu" };
words["my"]                          = { family: "BY"       , short: "M"                                                      , long: "letter M", lojban: "my"};
words["o'y"]                         = { family: "BY"       , short: "O"                                                      , long: "letter O", lojban: "o'y/obu"};
words["o"]                           = { family: "O"        , short: ""                                                       , long: "prefix a 4 words long lexeme", lojban: "lujvo making" };
words["pa'a"]                        = { family: "PA"       , short: "(emphasis)"                                             , long: "emphasis indicator, the next word is especially emphasized", lojban: "ba'e" };
words["pa'an"]                       = { family: "R"        , short: "hope"                         , signature: "e0"         , long: "x1 hopes/wishes for/desires x2 (event/predicate) occurs/is true", lojban: "pacna"};
words["pa'e"]                        = { family: "PA"       , short: "(non-standard)"                                         , long: "nonce-word indicator, indicates next word (lexeme) may be nonstandard", lojban: "za'e"};
words["pa'i"]                        = { family: "PA"       , short: "(hashtag)"                                              , long: "next word is a metadata tag / hashtag", lojban: "ci'a"};
words["pa'o"]                        = { family: "PA"       , short: "(rebind)"                                               , long: "rebind following variable, discarding its previous value (can be omitted inside of <va>)"};
words["pa"]                          = { family: "PA"       , short: "{"                                                      , long: "begin free suffix scope (matching end is not checked)", lojban: "fu'e"};
words["pai"]                         = { family: "PAI"      , short: "}"                                                      , long: "end free suffix scope (matching start is not checked). following free suffix will apply to the scope instead of the preceding word", lojban: "fu'o" };
words["pe'on"]                       = { family: "R"        , short: "friend"                       , signature: "ee"         , long: "x1 is a friend of x2", lojban: "pendo"};
words["pi"]                          = { family: "PE"       , short: ""                                                       , long: "discursive starter", lojban: "sei"};
words["pin"]                         = { family: "R"        , short: "drink"                        , signature: "ee"         , long: "x1 drinks liquid x2", lojban: "pinxe"};
words["pli"]                         = { family: "R"        , short: "tool"                         , signature: "e1"         , long: "x1 is a tool for satisfying property x2", lojban: "pilno", toaq: "chuo"};
words["plie"]                        = { family: "R"        , short: "apple"                        , signature: "e"          , long: "x1 is an apple", lojban: "plise", toaq: "shamū"};
words["po"]                          = { family: "PO"       , short: "("                                                      , long: "parenthetical note starter", lojban: "to"};
words["poi"]                         = { family: "POI"      , short: ")"                                                      , long: "parenthetical note terminator", lojban: "toi"};
words["pre"]                         = { family: "R"        , short: "person"                       , signature: "e"          , long: "x1 is a person", lojban: "prenu", toaq: "poq"};
words["prei"]                        = { family: "R"        , short: "parent"                       , signature: "ee"         , long: "x1 is a parent of/raises x2", lojban: "rirni/preri", toaq: "pao"};
words["pru"]                         = { family: "R"        , short: "past"                         , signature: "EE"         , long: "x1 (event) is in the past of/before x2 (event) (default = now)", lojban: "purci"};
words["pu"]                          = { family: "PU"       , short: ""                                                       , long: "subscript marker", lojban: "xi"};
words["py"]                          = { family: "BY"       , short: "P"                                                      , long: "letter P", lojban: "py"};
words["sa'a"]                        = { family: "SA"       , short: "(named variable)"                                       , long: "use the predicate as a predicate variable name (instead of using <mia>)", lojban: "ilmen's dau'u"};
words["sa'a"]                        = { family: "SA"       , short: "other than"                                             , long: "contrary scalar negator : other than .. (scale or set is implied)", lojban: "na'e" };
words["sa'e"]                        = { family: "SA"       , short: "not"                                                    , long: "polar opposite scalar negator : not a ..", lojban: "to'e"};
words["sa'i"]                        = { family: "SA"       , short: "not really"                                             , long: "midpoint scalar negator : not really", lojban: "no'e"};
words["sa"]                          = { family: "SA"       , short: "name"                         , signature: "e"          , long: "x1 is named [predicate]", lojban: "la"};
words["sai"]                         = { family: "SA"       , short: "related to"                   , signature: "e"          , long: "x1 is related to [predicate] (vague transformation, expands to {ba mu fa [predicate] bai})", lojban: "tu'a"};
words["se"]                          = { family: "SA"       , short: "x1 &#8652; x2"                                          , long: "switch 1st and 2nd places", lojban: "se"};
words["sei"]                         = { family: "SA"       , short: "x1 &#8652; x?"                                          , long: "SA question", lojban: "se'u'o" };
words["sfe"]                         = { family: "R"        , short: "female"                       , signature: "e"          , long: "x1 is female", lojban: "fetsi"};
words["si"]                          = { family: "SA"       , short: "x1 &#8652; x3"                                          , long: "switch 1st and 3rd places", lojban: "te" };
words["skai"]                        = { family: "R"        , short: "computer"                     , signature: "e"          , long: "x1 is a computer", lojban: "skami"};
words["sku"]                         = { family: "R"        , short: "express"                      , signature: "eee"        , long: "x1 says x2 (quote) to x3", lojban: "cusku"};
words["so"]                          = { family: "SA"       , short: "x1 &#8652; x4"                                          , long: "switch 1st and 4th places", lojban: "ve" };
words["soi"]                         = { family: "SA"       , short: "referent of"                                            , long: "the referent of (indirect pointer)", lojban: "la'e" };
words["su"]                          = { family: "SA"       , short: "x1 &#8652; x5"                                          , long: "switch 1st and 5th places", lojban: "xe"  };
words["sy"]                          = { family: "BY"       , short: "S"                                                      , long: "letter S", lojban: "sy"};
words["ta'a"]                        = { family: "TA"       , short: "few"                                                    , long: "number: few", lojban: "so'u" };
words["ta'e"]                        = { family: "TA"       , short: "several"                                                , long: "number: several", lojban: "so'o" };
words["ta'i"]                        = { family: "TA"       , short: "many"                                                   , long: "number: many", lojban: "so'i" };
words["ta'o"]                        = { family: "TA"       , short: "most"                                                   , long: "number: most", lojban: "so'e" };
words["ta'u"]                        = { family: "TA"       , short: "each/all"                                               , long: "number: each/all", lojban: "ro" };
words["ta"]                          = { family: "TA"       , short: "0"                                                      , long: "number/digit: 0", lojban: "no"};
words["tai'a"]                       = { family: "TA"       , short: "too few"                                                , long: "too few (subjective)", lojban: "mo'a"};
words["tai'e"]                       = { family: "TA"       , short: "enough"                                                 , long: "enough (subjective)", lojban: "rau"};
words["tai'i"]                       = { family: "TA"       , short: "too many"                                               , long: "too many (subjective)", lojban: "du'e"};
words["tai"]                         = { family: "TAI"      , short: ""                                                       , long: "number/letter string elidible terminator", lojban: ""};
words["te'a"]                        = { family: "TA"       , short: "number base"                                            , long: "(base | number) separator", lojban: "vu'ai?" };
words["te'e"]                        = { family: "TA"       , short: "thousands"                                              , long: "thousands separator / number comma", lojban: "ki'o" };
words["te'i"]                        = { family: "TA"       , short: "approximatly"                                           , long: "approximately, (precise | approximate) separator", lojban: "ji'i" };
words["te'o"]                        = { family: "TA"       , short: "at least"                                               , long: "at least ... (default = some) / no less then", lojban: "su'o" };
words["te'u"]                        = { family: "TA"       , short: "at most"                                                , long: "at most ... (default = all) / no more than", lojban: "su'e" };
words["te"]                          = { family: "TA"       , short: "."                                                      , long: "decimal separator", lojban: "pi" };
words["tia"]                         = { family: "TA"       , short: "1"                                                      , long: "number/digit: 1", lojban: "pa" };
words["tie"]                         = { family: "TA"       , short: "2"                                                      , long: "number/digit: 2", lojban: "re" };
words["tii"]                         = { family: "TA"       , short: "3"                                                      , long: "number/digit: 3", lojban: "ci" };
words["tio"]                         = { family: "TA"       , short: "4"                                                      , long: "number/digit: 4", lojban: "vo" };
words["tiu"]                         = { family: "TA"       , short: "5"                                                      , long: "number/digit: 5", lojban: "mu" };
words["to"]                          = { family: "TA"       , short: "number ?"                                               , long: "digit/number question", lojban: "xo" };
words["tu'a"]                        = { family: "TA"       , short: "B (11)"                                                 , long: "number/digit: B (11)", lojban: "dau" };
words["tu'e"]                        = { family: "TA"       , short: "C (12)"                                                 , long: "number/digit: C (12)", lojban: "fei" };
words["tu'i"]                        = { family: "TA"       , short: "D (13)"                                                 , long: "number/digit: D (13)", lojban: "gai" };
words["tu'o"]                        = { family: "TA"       , short: "E (14)"                                                 , long: "number/digit: E (14)", lojban: "rei/xei" };
words["tu'u"]                        = { family: "TA"       , short: "F (15)"                                                 , long: "number/digit: F (15)", lojban: "vai" };
words["tua"]                         = { family: "TA"       , short: "6"                                                      , long: "number/digit: 6", lojban: "xa" };
words["tue"]                         = { family: "TA"       , short: "7"                                                      , long: "number/digit: 7", lojban: "ze" };
words["tui"]                         = { family: "TA"       , short: "8"                                                      , long: "number/digit: 8", lojban: "bi" };
words["tuo"]                         = { family: "TA"       , short: "9"                                                      , long: "number/digit: 9", lojban: "so" };
words["tuu"]                         = { family: "TA"       , short: "A (10)"                                                 , long: "number/digit: A (10)", lojban: "dau" };
words["ty"]                          = { family: "BY"       , short: "T"                                                      , long: "letter T", lojban: "ty"};
words["u'y"]                         = { family: "BY"       , short: "U"                                                      , long: "letter U", lojban: "u'y/ubu"};
words["u"]                           = { family: "U"        , short: ""                                                       , long: "prefix and suffix an arbitrary words long lexeme", lojban: "lujvo making" };
words["uy'y"]                        = { family: "BY"       , short: "W"                                                      , long: "letter W/u semi-vowel", lojban: "vy.bu"};
words["va"]                          = { family: "VA"       , short: "="                                                      , long: "predicate affectation. one side should be affectable [MA]. if both sides are, right is now equal left", lojban: "goi"};
words["vai"]                         = { family: "VAI"      , short: ""                                                       , long: "predicate link elidible terminator", lojban: "ge'u/kei"};
words["ve"]                          = { family: "VA"       , short: "associated with"                                        , long: "which is associated with ...", lojban: "pe"};
words["vie"]                         = { family: "VA"       , short: "restrictive"                                            , long: "restrictive relative clause", lojban: "poi" };
words["vii"]                         = { family: "VA"       , short: "non-restrictive"                                        , long: "non-restrictive relative clause", lojban: "noi" };
words["vy"]                          = { family: "BY"       , short: "V"                                                      , long: "letter V", lojban: "vy"};
words["xa'a'a"]                      = { family: "XA"       , short: "(haha)"                                                 , long: "same as <xa'a>", lojban: "xa'a" }
words["xa'a"]                        = { family: "XA"       , short: "(haha)"                                                 , long: "laughter. additional 'a may be added", lojban: "xa'a" }
words["xu'a"]                        = { family: "XA"       , short: "(indirect ?)"                                           , long: "indirect question marker", lojban: "kau"};
words["xu"]                          = { family: "XA"       , short: "true ?"                                                 , long: "true/false question marker", lojban: "xu" }
words["xy"]                          = { family: "BY"       , short: "X"                                                      , long: "letter X", lojban: "xy"};
words["y'a"]                         = { family: "BY"       , short: "dot"                                                    , long: "pause character / .", lojban: "denpabu"};
words["y'e"]                         = { family: "BY"       , short: "H"                                                      , long: "letter H/'", lojban: "xy.bu"};
words["y'i"]                         = { family: "BY"       , short: "L"                                                      , long: "letter L", lojban: "ly"};
words["y'o"]                         = { family: "BY"       , short: "N"                                                      , long: "letter N", lojban: "ny"};
words["y'u"]                         = { family: "BY"       , short: "R"                                                      , long: "letter R", lojban: "ry"};
words["y'y"]                         = { family: "BY"       , short: "Y"                                                      , long: "letter Y", lojban: "y'y/ybu"};
words["za"]                          = { family: "ZA"       , short: "(simple)"                     , signature: "e"          , long: "prefix a foreign word, meaning 'x1 is a [word]'", lojban: "cmevla/fu'ivla"};
words["zai"]                         = { family: "ZA"       , short: "(complex)"                                              , long: "prefix a foreign word, place structure is infered from context", lojban: "fu'ivla"};
words["zda'i"]                       = { family: "R"        , short: "home"                         , signature: "ee"         , long: "x1 is a nest/house/home of x2", lojban: "zdani"};
words["zdi'e"]                       = { family: "R"        , short: "amusing"                      , signature: "e"          , long: "x1 is amusing/fun", lojban: "zdile"};
words["zdu"]                         = { family: "R"        , short: "do"                           , signature: "eE"         , long: "x1 does x2 (event)", lojban: "zukte"};
words["ze"]                          = { family: "ZE"       , short: "&#12317;"                     , signature: "e"          , long: "start grammatical quote. x1 is quote [quote]", lojban: "lu"};
words["zei"]                         = { family: "ZEI"      , short: "&#12318;"                                               , long: "end grammatical quote", lojban: "li'u"};
words["zi"]                          = { family: "ZI"       , short: "&#34;"                        , signature: "e"          , long: "quote the following word. x1 is word [word]", lojban: "zo"};
words["zo"]                          = { family: "ZO"       , short: "&#12317;"                     , signature: "e"          , long: "start ungrammatical quote. x1 is quote [quote]", lojban: "lo'u"};
words["zoi"]                         = { family: "ZOI"      , short: "&#12318;"                                               , long: "end ungrammatical quote", lojban: "le'u"};
words["zu"]                          = { family: "ZU"       , short: ""                             , signature: "e"          , long: "prefix a foreign word quote surrounded by the same 1 native word. x1 is quote [quote]", lojban: "zoi"};
words["zva"]                         = { family: "R"        , short: "attending"                    , signature: "ee"         , long: "x1 is at x2 (location)", lojban: "zvati"};
words["zy"]                          = { family: "BY"       , short: "Z"                                                      , long: "letter Z", lojban: "zy"};

module.exports.shortDescriptions = shortDescriptions;
