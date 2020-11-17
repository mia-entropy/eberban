var words = {};

words["a.a"]                         = { family: "L"        , short: "lexeme"                       , long: "x1 is a lexeme meaning x2 with components x3 (set)", lojban: "lujvo"};
words["a.u'i"]                       = { family: "L"        , short: "amused"                       , long: "x1 is amusing to x2 in property/aspect x3", lojban: "zdile"};
words["a.ui"]                        = { family: "L"        , short: "happy"                        , long: "x1 makes x2 happy", lojban: "gleki"};
words["a'y"]                         = { family: "BY"       , short: "A"                            , long: "letter A", lojban: "a'y/abu"};
words["a"]                           = { family: "A"        , short: ""                             , long: "prefix a 1 word long lexeme", lojban: "lujvo making" };
words["ada"]                         = { family: "L"        , short: "paragraph"                    , long: "x1 is a paragraph about subject x2 composed of sentence(s) x3 (set)", lojban: "jufmei"};
words["ade"]                         = { family: "L"        , short: "predicate"                    , long: "x1 is a predicate with relation x2 among arguments x3 (set)", lojban: "bridi"};
words["ado"]                         = { family: "L"        , short: "predicate-tail"               , long: "x1 is a predicate-tail of predicate x2 with relation x3 among arguments x4 (set)", lojban: "brirebla"};
words["asa"]                         = { family: "L"        , short: "name"                         , long: "x1 ([sa] relation / quoted words) is a name of x2 given by x3", lojban: "cmene"};
words["ba"]                          = { family: "BA"       , short: "predication"                  , long: "x1 is predication [predicate] expressed in sentence x2", lojban: "du'u" };
words["bai"]                         = { family: "BAI"      , short: ""                             , long: "abstraction elidible terminator", lojban: "kei"};
words["ban"]                         = { family: "R"        , short: "language"                     , long: "x1 is a language/dialect used by x2 to express x3 (predicate)", lojban: "bangu" }
words["be"]                          = { family: "BA"       , short: "relation"                     , long: "relation expressed in [predicate] (allow relation filling)", lojban: "BE filling but in NU"};
words["bi"]                          = { family: "BA"       , short: "event"                        , long: "x1 is the event of [predicate]", lojban: "nu"};
words["bla"]                         = { family: "R"        , short: "future"                       , long: "x1 (abstraction) is in the future/after x2", lojban: "balvi" }
words["bo"]                          = { family: "BA"       , short: "property"                     , long: "x1 is the property exhibited by [predicate]", lojban: "nu"};
words["bria"]                        = { family: "R"        , short: "arm"                          , long: "x1 (abstraction) is a/the arm of x2", lojban: "cabna" }
words["by"]                          = { family: "BY"       , short: "B"                            , long: "letter B", lojban: "by"};
words["ca"]                          = { family: "CA"       , short: "or"                           , long: "relation connective or", lojban: "ja"};
words["ce"]                          = { family: "CA"       , short: "and"                          , long: "relation connective and", lojban: "je"};
words["ci"]                          = { family: "CA"       , short: "connective ?"                 , long: "relation connective question", lojban: "je'i"};
words["cki'a"]                       = { family: "R"        , short: "write"                        , long: "x1 inscribes/writes x2 on display/surface/storage medium x3 with writing implement x4", lojban: "ciska"};
words["cku'a"]                       = { family: "R"        , short: "book"                         , long: "x1 is a book containing work x2 by author x3 for audience x4 preserved in medium x5", lojban: "cukta"};
words["cna"]                         = { family: "R"        , short: "present"                      , long: "x1 is in the present of/simultaneous with x2", lojban: "birka" }
words["co"]                          = { family: "CA"       , short: "iif"                          , long: "relation connective if-and-only-if", lojban: "jo"};
words["cti'a"]                       = { family: "R"        , short: "eat"                          , long: "x1 eats x2", lojban: "citka" }
words["cu"]                          = { family: "CA"       , short: "whether-or-not"               , long: "relation connective whether-or-not", lojban: "ju"};
words["cy"]                          = { family: "BY"       , short: "C"                            , long: "letter C", lojban: "cy"};
words["da'ul"]                       = { family: "R"        , short: "animal"                       , long: "x1 is an animal/creature of species x2", lojban: "danlu"};
words["da"]                          = { family: "DA"       , short: "(paragraph)"                  , long: "paragraph break, introduce new topic", lojban: "ni'o"};
words["de"]                          = { family: "DE"       , short: ""                             , long: "predicate-tail elidible starter", lojban: "i"};
words["dei"]                         = { family: "DEI"      , short: ""                             , long: "predicate-tail elidible terminator", lojban: "iau"};
words["dje"]                         = { family: "R"        , short: "day"                          , long: "x1 is x2 full days in duration (default = 1) by standard x3", lojban: "djedi" }
words["dju"]                         = { family: "R"        , short: "know"                         , long: "x1 knows fact(s) x2 (abstraction) about subject x3 by epistemology x4", lojban: "djuno" }
words["do"]                          = { family: "DO"       , short: ""                             , long: "predicate-tail elidible starter, prefix the main relation of a predicate", lojban: "cu"};
words["doi"]                         = { family: "DO"       , short: ""                             , long: "predicate-tail elidible terminator", lojban: "vau"};
words["dra'u"]                       = { family: "R"        , short: "milk"                         , long: "x1 is milk from source x2", lojban: "ladru" }
words["du'an"]                       = { family: "R"        , short: "give"                         , long: "x1 (donor) gives/donates gift/present x2 to recipient x3 (without payment/exchange)", lojban: "dunda"};
words["du"]                          = { family: "DU"       , short: "modal"                        , long: "import x1 place of following relation (non compound)", lojban: "fi'o"};
words["dy"]                          = { family: "BY"       , short: "D"                            , long: "letter D", lojban: "dy"};
words["dza'u"]                       = { family: "R"        , short: "walk"                         , long: "x1 walks/strides/paces on surface x2 using limbs x3", lojban: "cadzu"};
words["e'o"]                         = { family: "XA"       , short: "(request)"                    , long: "attitudinal: request | - | negative request", lojban: "e'o"};
words["e'y"]                         = { family: "BY"       , short: "E"                            , long: "letter E", lojban: "e'y/ebu"};
words["e"]                           = { family: "E"        , short: ""                             , long: "prefix a 2 words long lexeme", lojban: "lujvo making" };
words["ekanmer"]                     = { family: "L"        , short: "man"                          , long: "x1 is a man/men", lojban: "nanmu"};
words["ekanprei"]                    = { family: "L"        , short: "father"                       , long: "x1 is a father of x2", lojban: "patfu"};
words["esfemer"]                     = { family: "L"        , short: "woman"                        , long: "x1 is a woman/women", lojban: "ninmu"};
words["esfeprei"]                    = { family: "L"        , short: "mother"                       , long: "x1 is a mother of x2", lojban: "mamta"};
words["etatai"]                      = { family: "L"        , short: "number"                       , long: "x1 is a number of x2 in dimension/aspect x3 (default = unit)", lojban: "namcu"};
words["fa"]                          = { family: "FA"       , short: "x1"                           , long: "tag predicate place #1", lojban: "fa"};
words["fe"]                          = { family: "FA"       , short: "x2"                           , long: "tag predicate place #2", lojban: "fe" };
words["fi"]                          = { family: "FA"       , short: "x3"                           , long: "tag predicate place #3", lojban: "fi" };
words["fin"]                         = { family: "R"        , short: "create"                       , long: "x1 invents/creates/composes/authors x2 for function/purpose x3 from existing elements/ideas x4", lojban: "finti"};
words["fo"]                          = { family: "FA"       , short: "x4"                           , long: "tag predicate place #4", lojban: "fo" };
words["fu"]                          = { family: "FA"       , short: "x5"                           , long: "tag predicate place #5", lojban: "fu" };
words["fy"]                          = { family: "BY"       , short: "F"                            , long: "letter F", lojban: "fy"};
words["ga"]                          = { family: "GA"       , short: ""                             , long: "forethought connective starter", lojban: "ga"};
words["gre'u"]                       = { family: "R"        , short: "dog"                          , long: "x1 is a dog (canine) of specie/breed x2", lojban: "gerku"};
words["gy"]                          = { family: "BY"       , short: "G"                            , long: "letter G", lojban: "gy"};
words["i'y"]                         = { family: "BY"       , short: "I"                            , long: "letter I", lojban: "i'y/ibu"};
words["i"]                           = { family: "I"        , short: ""                             , long: "prefix a 3 words long lexeme", lojban: "lujvo making" };
words["iy'y"]                        = { family: "BY"       , short: "Q"                            , long: "letter Q/i semi-vowel", lojban: "ky.bu"};
words["ja"]                          = { family: "JA"       , short: "or"                           , long: "distributive connective or", lojban: ".a / gi'a / ja [cu]"};
words["jai"]                         = { family: "JAI"      , short: "mixed with"                   , long: "non-logical connective: mixed conjunction, mixed with, forming a mass", lojban: "joi"};
words["je"]                          = { family: "JA"       , short: "and"                          , long: "distributive connective and", lojban: ".e / gi'e / je [cu]"};
words["jgai"]                        = { family: "R"        , short: "hold"                         , long: "x1 graps/holds x2 with x3 (part of x1) at locus x4 (part of x2)", lojban: "jgari"};
words["ji"]                          = { family: "JA"       , short: "connective ?"                 , long: "distributive connective question", lojban: "ji / gi'i / ji [cu]"};
words["jo"]                          = { family: "JA"       , short: "iif"                          , long: "distributive connective if-and-only-if", lojban: ".o / gi'o / jo [cu]"};
words["ju"]                          = { family: "JA"       , short: "whether-or-not"               , long: "distributive connective whether-or-not", lojban: ".u / gi'u / ju [cu]"};
words["jy"]                          = { family: "BY"       , short: "J"                            , long: "letter J", lojban: "jy"};
words["ka"]                          = { family: "KA"       , short: "negation"                     , long: "predicate negation / logically negates some particles", lojban: "na"};
words["kai"]                         = { family: "KAI"      , short: "negation"                     , long: "attached to particles to negate them", lojban: "nai"};
words["kan"]                         = { family: "R"        , short: "male"                         , long: "x1 is male", lojban: "nakni"};
words["ky"]                          = { family: "BY"       , short: "K"                            , long: "letter K", lojban: "ky"};
words["ma'i"]                        = { family: "MA"       , short: "this"                         , long: "this here near speaker", lojban: "ti"};
words["ma'o"]                        = { family: "MA"       , short: "that"                         , long: "that here near listener", lojban: "ta" };
words["ma'u"]                        = { family: "MA"       , short: "that younder"                 , long: "that younder, far from speaker and listener", lojban: "tu" };
words["ma"]                          = { family: "MA"       , short: "?"                            , long: "relation question, fill the blank", lojban: "ma / mo"};
words["mai"]                         = { family: "MA"       , short: "something #1"                 , long: "there exists something #1", lojban: "da"};
words["mei"]                         = { family: "MA"       , short: "something #2"                 , long: "there exists something #2", lojban: "de" };
words["mer"]                         = { family: "R"        , short: "human"                        , long: "x1 is human", lojban: "remna"};
words["mi'i"]                        = { family: "MA"       , short: "me & others"                  , long: "me/we the speaker(s)/authors(s) & others but no you the listener(s)", lojban: "mi'a" };
words["mi'o"]                        = { family: "MA"       , short: "me & you"                     , long: "me/we the speaker(s)/authors(s) & you the listener(s)", lojban: "mi'o" };
words["mi'oi"]                       = { family: "MA"       , short: "me & you & others"            , long: "me/we the speaker(s)/authors(s) & you the listener(s) & others", lojban: "ma'a" };
words["mi"]                          = { family: "MA"       , short: "me"                           , long: "me/we the speaker(s)/authors(s)", lojban: "mi" };
words["mia"]                         = { family: "MA"       , short: "they #1"                      , long: "he/she/it/they #1", lojban: "ko'a" };
words["mie"]                         = { family: "MA"       , short: "they #2"                      , long: "he/she/it/they #2", lojban: "ko'e" };
words["mii"]                         = { family: "MA"       , short: "they #3"                      , long: "he/she/it/they #3", lojban: "ko'i" };
words["mio"]                         = { family: "MA"       , short: "they #4"                      , long: "he/she/it/they #4", lojban: "ko'o" };
words["miu"]                         = { family: "MA"       , short: "they #5"                      , long: "he/she/it/they #5", lojban: "ko'u" };
words["mla'u"]                       = { family: "R"        , short: "cat"                          , long: "x1 is a cat (feline) of specie/breed x2", lojban: "mlatu"};
words["mo'a"]                        = { family: "MA"       , short: "you!"                         , long: "you (imperative), make it true for you, the listener", lojban: "ko"};
words["mo'i"]                        = { family: "MA"       , short: "you & others"                 , long: "you listener(s) & others", lojban: "do'o"};
words["mo"]                          = { family: "MA"       , short: "you"                          , long: "you listener(s)", lojban: "do"};
words["moi"]                         = { family: "MA"       , short: "something #3"                 , long: "there exists something #3", lojban: "di" };
words["mua"]                         = { family: "MA"       , short: "they #6"                      , long: "he/she/it/they #6", lojban: "fo'a" };
words["mue"]                         = { family: "MA"       , short: "they #7"                      , long: "he/she/it/they #7", lojban: "fo'e" };
words["mui"]                         = { family: "MA"       , short: "they #8"                      , long: "he/she/it/they #8", lojban: "fo'i" };
words["muo"]                         = { family: "MA"       , short: "they #9"                      , long: "he/she/it/they #9", lojban: "fo'o" };
words["muu"]                         = { family: "MA"       , short: "they #10"                     , long: "he/she/it/they #10", lojban: "fo'u" };
words["my"]                          = { family: "BY"       , short: "M"                            , long: "letter M", lojban: "my"};
words["o'y"]                         = { family: "BY"       , short: "O"                            , long: "letter O", lojban: "o'y/obu"};
words["o"]                           = { family: "O"        , short: ""                             , long: "prefix a 4 words long lexeme", lojban: "lujvo making" };
words["pa'a"]                        = { family: "PA"       , short: "(emphasis) &#10140;"          , long: "emphasis indicator, the next word is especially emphasized", lojban: "ba'e" };
words["pa'e"]                        = { family: "PA"       , short: "(non-standard) &#10140;"      , long: "nonce-word indicator, indicates next word (lexeme) may be nonstandard", lojban: "za'e"};
words["pa'i"]                        = { family: "PA"       , short: "(hashtag) &#10140;"           , long: "next word is a metadata tag / hashtag", lojban: "ci'a"};
words["pa"]                          = { family: "PA"       , short: "{"                            , long: "begin free suffix scope (outside of grammar analysis)", lojban: "fu'e"};
words["pai"]                         = { family: "PAI"      , short: "}"                            , long: "end free suffix scope (outside of grammar analysis). following free suffix will apply to the scope instead of the preceding word", lojban: "fu'o" };
words["pe'a"]                        = { family: "PE"       , short: "discursive"                   , long: "attach discursive note relation, used in quotes to add non-quoted information", lojban: "sei" };
words["pe'on"]                       = { family: "R"        , short: "friend"                       , long: "x1 is a friend of x2", lojban: "pendo"};
words["pe"]                          = { family: "PE"       , short: "parenthetical"                , long: "attach parenthetical note relation (use with ze..zei for multi-sentences quotes)", lojban: "to" };
words["pei"]                         = { family: "PEI"      , short: ""                             , long: "linked relation elidible terminator", lojban: "toi / se'u / ku'o / ge'u" };
words["pi'a"]                        = { family: "PE"       , short: "associated with"              , long: "which is associated with ...", lojban: "pe"};
words["pi"]                          = { family: "PE"       , short: "restrictive"                  , long: "restrictive relative clause/adverbial", lojban: "poi / poi'a" };
words["pin"]                         = { family: "R"        , short: "drink"                        , long: "x1 drinks liquid x2 out of container x3", lojban: "pinxe"};
words["pli"]                         = { family: "R"        , short: "tool"                         , long: "x1 is a tool used by x2 for purpose x3", lojban: "swapped pilno"};
words["plie"]                        = { family: "R"        , short: "apple"                        , long: "x1 is an apple of species/strain x2", lojban: "plise"};
words["po"]                          = { family: "PE"       , short: "non-restrictive"              , long: "non-restrictive relative clause/adverbial", lojban: "noi / noi'a"  };
words["poi"]                         = { family: "PE"       , short: "="                            , long: "relation affectation. one side should be affectable [MA]? if both sides are, right is now equal left", lojban: "goi"};
words["pre"]                         = { family: "R"        , short: "person"                       , long: "x1 is a person", lojban: "prenu"};
words["prei"]                        = { family: "R"        , short: "parent"                       , long: "x1 is a parent of/raises x2", lojban: "rirni/preri"};
words["pru"]                         = { family: "R"        , short: "past"                         , long: "x1 (event) is in the past of/before x2 (event) (default = now)", lojban: "purci"};
words["pu"]                          = { family: "PE"       , short: "subscript"                    , long: "attach subscript", lojban: "xi" };
words["py"]                          = { family: "BY"       , short: "P"                            , long: "letter P", lojban: "py"};
words["sa'a"]                        = { family: "SA"       , short: "other than"                   , long: "contrary scalar negator : other than .. (scale or set is implied)", lojban: "na'e" };
words["sa'e"]                        = { family: "SA"       , short: "not"                          , long: "polar opposite scalar negator : not a ..", lojban: "to'e"};
words["sa'i"]                        = { family: "SA"       , short: "not really"                   , long: "midpoint scalar negator : not really", lojban: "no'e"};
words["sa"]                          = { family: "SA"       , short: "name"                         , long: "transform the relation into a name : x1 is named <name> which is given by x2", lojban: "la"};
words["se"]                          = { family: "SA"       , short: "x1 &#8652; x2"                , long: "switch 1st and 2nd places", lojban: "se"};
words["sei"]                         = { family: "SA"       , short: "x1 &#8652; x?"                , long: "places switch question", lojban: "se'u'o" };
words["sfe"]                         = { family: "R"        , short: "female"                       , long: "x1 is female", lojban: "fetsi"};
words["si"]                          = { family: "SA"       , short: "x1 &#8652; x3"                , long: "switch 1st and 3rd places", lojban: "te" };
words["skai"]                        = { family: "R"        , short: "computer"                     , long: "x1 is a computer for purpose x2", lojban: "skami"};
words["sku"]                         = { family: "R"        , short: "express"                      , long: "x1 (agent) express x2 (text) for audience x3 via medium x4", lojban: "cusku"};
words["so"]                          = { family: "SA"       , short: "x1 &#8652; x4"                , long: "switch 1st and 4th places", lojban: "ve" };
words["soi"]                         = { family: "SA"       , short: "referent of"                  , long: "the referent of (indirect pointer)", lojban: "la'e" };
words["su"]                          = { family: "SA"       , short: "x1 &#8652; x5"                , long: "switch 1st and 5th places", lojban: "xe"  };
words["sy"]                          = { family: "BY"       , short: "S"                            , long: "letter S", lojban: "sy"};
words["ta'a"]                        = { family: "TA"       , short: "few"                          , long: "number: few", lojban: "so'u" };
words["ta'e"]                        = { family: "TA"       , short: "several"                      , long: "number: several", lojban: "so'o" };
words["ta'i"]                        = { family: "TA"       , short: "many"                         , long: "number: many", lojban: "so'i" };
words["ta'o"]                        = { family: "TA"       , short: "most"                         , long: "number: most", lojban: "so'e" };
words["ta'u"]                        = { family: "TA"       , short: "each/all"                     , long: "number: each/all", lojban: "ro" };
words["ta"]                          = { family: "TA"       , short: "0"                            , long: "number/digit: 0", lojban: "no"};
words["te'a"]                        = { family: "TA"       , short: "number base"                  , long: "(base | number) separator", lojban: "vu'ai?" };
words["te'e"]                        = { family: "TA"       , short: "thousands"                    , long: "thousands separator / number comma", lojban: "ki'o" };
words["te"]                          = { family: "TA"       , short: "."                            , long: "decimal separator", lojban: "pi" };
words["tia"]                         = { family: "TA"       , short: "1"                            , long: "number/digit: 1", lojban: "pa" };
words["tie"]                         = { family: "TA"       , short: "2"                            , long: "number/digit: 2", lojban: "re" };
words["tii"]                         = { family: "TA"       , short: "3"                            , long: "number/digit: 3", lojban: "ci" };
words["tio"]                         = { family: "TA"       , short: "4"                            , long: "number/digit: 4", lojban: "vo" };
words["tiu"]                         = { family: "TA"       , short: "5"                            , long: "number/digit: 5", lojban: "mu" };
words["tu'a"]                        = { family: "TA"       , short: "B (11)"                       , long: "number/digit: B (11)", lojban: "dau" };
words["tu'e"]                        = { family: "TA"       , short: "C (12)"                       , long: "number/digit: C (12)", lojban: "fei" };
words["tu'i"]                        = { family: "TA"       , short: "D (13)"                       , long: "number/digit: D (13)", lojban: "gai" };
words["tu'o"]                        = { family: "TA"       , short: "E (14)"                       , long: "number/digit: E (14)", lojban: "rei/xei" };
words["tu'u"]                        = { family: "TA"       , short: "F (15)"                       , long: "number/digit: F (15)", lojban: "vai" };
words["tua"]                         = { family: "TA"       , short: "6"                            , long: "number/digit: 6", lojban: "xa" };
words["tue"]                         = { family: "TA"       , short: "7"                            , long: "number/digit: 7", lojban: "ze" };
words["tui"]                         = { family: "TA"       , short: "8"                            , long: "number/digit: 8", lojban: "bi" };
words["tuo"]                         = { family: "TA"       , short: "9"                            , long: "number/digit: 9", lojban: "so" };
words["tuu"]                         = { family: "TA"       , short: "A (10)"                       , long: "number/digit: A (10)", lojban: "dau" };
words["ty"]                          = { family: "BY"       , short: "T"                            , long: "letter T", lojban: "ty"};
words["u'i"]                         = { family: "XA"       , short: "(amused)"                     , long: "attitudinal: amusement | - | weariness", lojban: "u'i"};
words["u'y"]                         = { family: "BY"       , short: "U"                            , long: "letter U", lojban: "u'y/ubu"};
words["u"]                           = { family: "U"        , short: ""                             , long: "prefix and suffix an arbitrary words long lexeme", lojban: "lujvo making" };
words["ui"]                          = { family: "XA"       , short: "(happy)"                      , long: "attitudinal: happiness | - | unhappiness", lojban: "ui"};
words["uy'y"]                        = { family: "BY"       , short: "W"                            , long: "letter W/u semi-vowel", lojban: "vy.bu"};
words["fai"]                         = { family: "FA"       , short: "x+"                           , long: "next predicate place tag", lojban: "sumti chaining"};
words["fei"]                         = { family: "FA"       , short: "x?"                           , long: "predicate place tag question", lojban: "fi'a" };
words["fue"]                         = { family: "FA"       , short: "restrictive"                  , long: "restrictive adverbial. the first place of the provided relation is claimed to occur in conjunction with the outer predicate", lojban: "poi'a"};
words["vla"]                         = { family: "R"        , short: "talk"                         , long: "x1 communicate with x2 about subject x3 via medium x4 in language x5", lojban: "modified tavla"};
words["fui"]                         = { family: "FA"       , short: "non-restrictive"              , long: "non-restrictive adverbial. the first place of the provided relation is claimed to be such that the outer predicate satisfies it, and the outer predicate is claimed", lojban: "noi'a"};
words["fuo"]                         = { family: "FA"       , short: "subordinating"                , long: "subordinating adverbial. the outer predicate is claimed to satisfy the first place of the provided relation, but is not itself claimed to occur", lojban: "soi'a"};
words["vy"]                          = { family: "BY"       , short: "V"                            , long: "letter V", lojban: "vy"};
words["xu'u"]                        = { family: "XA"       , short: "(feeling ?)"                  , long: "attitudinal question", lojban: "pei" }
words["xu'u"]                        = { family: "XA"       , short: "(indirect ?)"                 , long: "indirect question marker", lojban: "kau"};
words["xu"]                          = { family: "XA"       , short: "true ?"                       , long: "true/false question marker", lojban: "xu" }
words["xua"]                         = { family: "XA"       , short: "(strong)"                     , long: "strong intensity modifier", lojban: "cai"};
words["xue"]                         = { family: "XA"       , short: "(moderate)"                   , long: "moderate intensity modifier", lojban: "sai" };
words["xui"]                         = { family: "XA"       , short: "(neutral)"                    , long: "neutral intensity modifier", lojban: "cu'i" };
words["xuo"]                         = { family: "XA"       , short: "(weak)"                       , long: "weak intensity modifier", lojban: "ru'e" };
words["xuu"]                         = { family: "XA"       , short: "(intensity ?)"                , long: "intensity modifier question", lojban: "pei" };
words["xy"]                          = { family: "BY"       , short: "X"                            , long: "letter X", lojban: "xy"};
words["y'a"]                         = { family: "BY"       , short: "dot"                          , long: "pause character / .", lojban: "denpabu"};
words["y'e"]                         = { family: "BY"       , short: "H"                            , long: "letter H/'", lojban: "xy.bu"};
words["y'i"]                         = { family: "BY"       , short: "L"                            , long: "letter L", lojban: "ly"};
words["y'o"]                         = { family: "BY"       , short: "N"                            , long: "letter N", lojban: "ny"};
words["y'u"]                         = { family: "BY"       , short: "R"                            , long: "letter R", lojban: "ry"};
words["y'y"]                         = { family: "BY"       , short: "Y"                            , long: "letter Y", lojban: "y'y/ybu"};
words["za"]                          = { family: "ZA"       , short: ""                             , long: "prefix a foreign word which must end in a pause", lojban: "cmevla/fu'ivla"};
words["zda'i"]                       = { family: "R"        , short: "home"                         , long: "x1 is a nest/house/home of x2", lojban: "zdani"};
words["zdu"]                         = { family: "R"        , short: "do"                           , long: "x1 is a volitional entity employings/taking action/doing x2 for purpose x3", lojban: "zukte"};
words["ze"]                          = { family: "ZE"       , short: "&#12317;"                     , long: "start grammatical quote", lojban: "lu"};
words["zei"]                         = { family: "ZEI"      , short: "&#12318;"                     , long: "end grammatical quote", lojban: "li'u"};
words["zi"]                          = { family: "ZI"       , short: "&#34;"                        , long: "quote the following word", lojban: "zo"};
words["zo"]                          = { family: "ZO"       , short: "&#12317;"                     , long: "start ungrammatical quote", lojban: "lo'u"};
words["zoi"]                         = { family: "ZOI"      , short: "&#12318;"                     , long: "end ungrammatical quote", lojban: "le'u"};
words["zu"]                          = { family: "ZU"       , short: ""                             , long: "prefix a foreign word quote surrounded by the same 1 native word", lojban: "zoi"};
words["zva"]                         = { family: "R"        , short: "attending"                    , long: "x1 is at/attenting/present at x2 (event/location)", lojban: "zvati"};
words["zy"]                          = { family: "BY"       , short: "Z"                            , long: "letter Z", lojban: "zy"};

module.exports.shortDescriptions = shortDescriptions;
