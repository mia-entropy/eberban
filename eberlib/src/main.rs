use std::fs::File;
use std::path::PathBuf;
use structopt::StructOpt;

#[derive(StructOpt, Debug)]
#[structopt(about = "the official eberban command-line utilities")]
enum Opt {
    Glosser {
        /// Dictionary filename
        #[structopt(short, long, parse(from_os_str))]
        dictionary_filename: PathBuf,
    },
    Validator {
        /// Dictionary filename
        #[structopt(short, long, parse(from_os_str))]
        dictionary_filename: PathBuf,
    },
}

fn load_dictionary(dictionary_filename: PathBuf) -> eberlib::dict::Dictionary {
    let file = File::open(&dictionary_filename).unwrap_or_else(|error| {
        panic!("Unable to open dictionary file {:?} -- {:?}", dictionary_filename, error);
    });
    let dictionary = eberlib::dict::from_file(file).unwrap_or_else(|error| {
        panic!("Unable to parse dictionary contents -- {:?}", error);
    });
    return dictionary;
}

fn main() {
    let opt = Opt::from_args();

    match opt {
        Opt::Glosser { dictionary_filename } => {
            let dictionary = load_dictionary(dictionary_filename);
            eberlib::cli::run_interactive_dictionary(dictionary);
        }
        Opt::Validator { dictionary_filename } => {
            let dictionary = load_dictionary(dictionary_filename);
            eberlib::cli::run_validator(dictionary);
        }
    };
}
