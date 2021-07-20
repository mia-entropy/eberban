// eberban PEG grammar - v0.37.2
// ===========================

// GRAMMAR
// main text rule
{
  var _g_foreign_quote_delim;

  function _join(arg) {
    if (typeof(arg) == "string")
      return arg;
    else if (arg) {
      var ret = "";
      for (var v in arg) { if (arg[v]) ret += _join(arg[v]); }
      return ret;
    }
  }

  function _node_empty(label, arg) {
    var ret = [];
    if (label) ret.push(label);
    if (arg && typeof arg == "object" && typeof arg[0] == "string" && arg[0]) {
      ret.push( arg );
      return ret;
    }
    if (!arg)
    {
      return ret;
    }
    return _node_int(label, arg);
  }

  function _node_int(label, arg) {
    if (typeof arg == "string")
      return arg;
    if (!arg) arg = [];
    var ret = [];
    if (label) ret.push(label);
    for (var v in arg) {
      if (arg[v] && arg[v].length != 0)
        ret.push( _node_int( null, arg[v] ) );
    }
    return ret;
  }

  function _node2(label, arg1, arg2) {
    return [label].concat(_node_empty(arg1)).concat(_node_empty(arg2));
  }

  function _node(label, arg) {
    var _n = _node_empty(label, arg);
    return (_n.length == 1 && label) ? [] : _n;
  }
  var _node_nonempty = _node;

  // === Functions for faking left recursion === //

  function _flatten_node(a) {
    // Flatten nameless nodes
    // e.g. [Name1, [[Name2, X], [Name3, Y]]] --> [Name1, [Name2, X], [Name3, Y]]
    if (is_array(a)) {
      var i = 0;
      while (i < a.length) {
        if (!is_array(a[i])) i++;
        else if (a[i].length === 0) // Removing []s
          a = a.slice(0, i).concat(a.slice(i + 1));
        else if (is_array(a[i][0]))
          a = a.slice(0, i).concat(a[i], a.slice(i + 1));
        else i++;
      }
    }
    return a;
  }

  function _group_leftwise(arr) {
    if (!is_array(arr)) return [];
    else if (arr.length <= 2) return arr;
    else return [_group_leftwise(arr.slice(0, -1)), arr[arr.length - 1]];
  }

  // "_lg" for "Leftwise Grouping".
  function _node_lg(label, arg) {
    return _node(label, _group_leftwise(_flatten_node(arg)));
  }

  function _node_lg2(label, arg) {
    if (is_array(arg) && arg.length == 2)
      arg = arg[0].concat(arg[1]);
    return _node(label, _group_leftwise(arg));
  }

  // === Foreign words functions === //

  function _assign_foreign_quote_delim(w) {
    if (is_array(w)) w = join_expr(w);
    else if (!is_string(w)) throw "ERROR: foreign_quote word is of type " + typeof w;
    w = w.toLowerCase().replace(/,/gm,"").replace(/h/g, "'");
    _g_foreign_quote_delim = w;
    return;
  }

  function _is_foreign_quote_delim(w) {
    if (is_array(w)) w = join_expr(w);
    else if (!is_string(w)) throw "ERROR: foreign_quote word is of type " + typeof w;
    /* Keeping spaces in the parse tree seems to result in the absorbtion of
       spaces into the closing delimiter candidate, so we'll remove any space
       character from our input. */
    w = w.replace(/[.\t\n\r?!\u0020]/g, "");
    w = w.toLowerCase().replace(/,/gm,"").replace(/h/g, "'");
    return w === _g_foreign_quote_delim;
  }

  function join_expr(n) {
    if (!is_array(n) || n.length < 1) return "";
    var s = "";
    var i = is_array(n[0]) ? 0 : 1;
    while (i < n.length) {
      s += is_string(n[i]) ? n[i] : join_expr(n[i]);
      i++;
    }
    return s;
  }

  function is_string(v) {
    // return $.type(v) === "string";
    return Object.prototype.toString.call(v) === '[object String]';
  }

  function is_array(v) {
    // return $.type(v) === "array";
    return Object.prototype.toString.call(v) === '[object Array]';
  }
}

text = expr:(free_parenthetical* paragraphs? spaces? EOF?) {return _node("text", expr);}

// text structure
paragraphs = expr:(paragraph (&PU_clause paragraph)*) {return _node("paragraphs", expr);}
paragraph = expr:(PU_clause? paragraph_unit (&(PA_clause / PO_clause) paragraph_unit)*) {return _node("paragraph", expr);}
paragraph_unit = expr:(definition / sentence) {return _node("paragraph_unit", expr);}

arguments_list = expr:((KA_clause / GA_clause)* PI_clause) {return _node("arguments_list", expr);}

definition = expr:(PO_clause definition_key scope POI_clause_elidible) {return _node("definition", expr);}
definition_key = expr:(GA_clause / predicate_compound / predicate_root) {return _node("definition_key", expr);}
sentence = expr:(PA_clause_elidible scope PAI_clause_elidible) {return _node("sentence", expr);}

// scope
scope = expr:(arguments_list? scope_1) {return _node("scope", expr);}

scope_1 = expr:(scope_list / scope_2) {return _node("scope_1", expr);}
scope_list = expr:(scope_list_element (BU_clause scope_list_element)+) {return _node("scope_list", expr);}
scope_list_element = expr:(scope_2) {return _node("scope_list_element", expr);}

scope_2 = expr:(chaining) {return _node("scope_2", expr);}

// chaining and explicit switches
chaining = expr:(chaining_neg / chaining_unit chaining?) {return _node("chaining", expr);}
chaining_neg = expr:(BI_clause chaining_unit+) {return _node("chaining_neg", expr);}
chaining_unit = expr:(predicate va_scope?) {return _node("chaining_unit", expr);}
va_scope = expr:(va_scope_first va_scope_next* VAI_clause_elidible) {return _node("va_scope", expr);}
va_scope_first = expr:(BI_clause? VA_clause scope) {return _node("va_scope_first", expr);}
va_scope_next = expr:(BI_clause? FA_clause scope) {return _node("va_scope_next", expr);}

// predicate unit
predicate = expr:((SA_clause / ZA_clause)* predicate_1) {return _node("predicate", expr);}
predicate_1 = expr:(predicate_simple / predicate_quote / predicate_variable / predicate_scope / predicate_borrowing / predicate_root / predicate_number / predicate_compound) {return _node("predicate_1", expr);}

predicate_root = expr:(free_prefix* spaces? root free_post*) {return _node("predicate_root", expr);}
predicate_number = expr:(free_prefix* spaces? number free_post*) {return _node("predicate_number", expr);}
predicate_compound = expr:(free_prefix* spaces? compound free_post*) {return _node("predicate_compound", expr);}
predicate_borrowing = expr:(free_prefix* borrowing_group free_post*) {return _node("predicate_borrowing", expr);}
predicate_scope = expr:(PE_clause scope PEI_clause_elidible) {return _node("predicate_scope", expr);}

// quotes
predicate_quote = expr:(grammatical_quote / one_word_quote / foreign_quote) {return _node("predicate_quote", expr);}
grammatical_quote = expr:(LA_clause text LAI_clause) {return _node("grammatical_quote", expr);}
one_word_quote = expr:(LE_clause spaces? native_word) {return _node("one_word_quote", expr);}
foreign_quote = expr:(LO_clause spaces? foreign_quote_open spaces foreign_quote_content foreign_quote_close free_post*) {return _node("foreign_quote", expr);}
foreign_quote_content = expr:((foreign_quote_word spaces)*) {return _node("foreign_quote_content", expr);}

// numbers
number = expr:(TA_clause+ BE_clause_elidible) {return _node("number", expr);}

// borrowings
borrowing_group = expr:((spaces? borrowing)+ BE_clause_elidible) {return _node("borrowing_group", expr);}

// simple
predicate_simple = expr:(BA_clause / MA_clause) {return _node("predicate_simple", expr);}

// variables
predicate_variable = expr:(BO_clause? (KA_clause / GA_clause)) {return _node("predicate_variable", expr);}

// free affixes
free_prefix = expr:(DA_clause) {return _node("free_prefix", expr);}

free_post = expr:(free_parenthetical / free_subscript) {return _node("free_post", expr);}
free_subscript = expr:(DI_clause number) {return _node("free_subscript", expr);}
free_parenthetical = expr:(DO_clause text DOI_clause) {return _node("free_parenthetical", expr);}

override = expr:(DU_clause (GA_clause / BA_clause / override_word)) {return _node("override", expr);}
override_word = expr:(spaces? (root / compound)) {return _node("override_word", expr);}


// PARTICLES CLAUSES
BA_clause = expr:(free_prefix* spaces? BA free_post*) {return _node("BA_clause", expr);} // inline argument
BE_clause = expr:(free_prefix* spaces? BE free_post*) {return _node("BE_clause", expr);} // miscellaneous terminator
BI_clause = expr:(free_prefix* spaces? BI free_post*) {return _node("BI_clause", expr);} // wide-scope negation
BO_clause = expr:(free_prefix* spaces? BO free_post*) {return _node("BO_clause", expr);} // variable assignement
BU_clause = expr:(free_prefix* spaces? BU free_post*) {return _node("BU_clause", expr);} // list separator

DA_clause = expr:(spaces? DA) {return _node("DA_clause", expr);} // free prefix
DI_clause = expr:(free_prefix* spaces? DI free_post*) {return _node("DI_clause", expr);} // free subscript
DO_clause = expr:(free_prefix* spaces? DO) {return _node("DO_clause", expr);} // free parenthetical starter
DOI_clause = expr:(free_prefix* spaces? DOI) {return _node("DOI_clause", expr);} // free parenthetical terminator
DU_clause = expr:(free_prefix* spaces? DU free_post*) {return _node("DU_clause", expr);} // free particle override

SA_clause = expr:(free_prefix* spaces? SA free_post* override?) {return _node("SA_clause", expr);} // place binding tag
ZA_clause = expr:(free_prefix* spaces? ZA free_post* override?) {return _node("ZA_clause", expr);} // predicate transformation
VA_clause = expr:(free_prefix* spaces? VA free_post* override?) {return _node("VA_clause", expr);} // explicit switch + VA-scope
FA_clause = expr:(free_prefix* spaces? FA free_post* override?) {return _node("FA_clause", expr);} // next explicit switch
VAI_clause = expr:(free_prefix* spaces? VAI free_post*) {return _node("VAI_clause", expr);} // VA-scope terminator

GA_clause = expr:(free_prefix* spaces? GA free_post*) {return _node("GA_clause", expr);} // predicate variables
KA_clause = expr:(free_prefix* spaces? KA free_post*) {return _node("KA_clause", expr);} // individual variables
MA_clause = expr:(free_prefix* spaces? MA free_post*) {return _node("MA_clause", expr);} // discourse predicates

PA_clause = expr:(free_prefix* spaces? PA free_post*) {return _node("PA_clause", expr);} // sentence starter
PAI_clause = expr:(free_prefix* spaces? PAI free_post*) {return _node("PAI_clause", expr);} // sentence terminator
PE_clause = expr:(free_prefix* spaces? PE free_post*) {return _node("PE_clause", expr);} // predicate scope starter
PEI_clause = expr:(free_prefix* spaces? PEI free_post*) {return _node("PEI_clause", expr);} // predicate scope elidible terminator
PI_clause = expr:(free_prefix* spaces? PI free_post*) {return _node("PI_clause", expr);} // arguments list terminator
PO_clause = expr:(free_prefix* spaces? PO free_post*) {return _node("PO_clause", expr);} // definition starter
POI_clause = expr:(free_prefix* spaces? POI free_post*) {return _node("POI_clause", expr);} // definition terminator
PU_clause = expr:(free_prefix* spaces? PU free_post*) {return _node("PU_clause", expr);} // paragraph marker

TA_clause = expr:(free_prefix* spaces? TA free_post*) {return _node("TA_clause", expr);} // numbers/digits

LA_clause = expr:(free_prefix* spaces? LA) {return _node("LA_clause", expr);} // grammatical quote starter
LAI_clause = expr:(spaces? LAI free_post*) {return _node("LAI_clause", expr);} // grammatical quote terminator
LE_clause = expr:(free_prefix* spaces? LE free_post*) {return _node("LE_clause", expr);} // one word quote
LO_clause = expr:(free_prefix* spaces? LO) {return _node("LO_clause", expr);} // foreign quote

BE_clause_elidible = expr:(BE_clause?) {return (expr == "" || !expr) ? ["BE"] : _node_empty("BE_clause_elidible", expr);}
PA_clause_elidible = expr:(PA_clause?) {return (expr == "" || !expr) ? ["PA"] : _node_empty("PA_clause_elidible", expr);}
PAI_clause_elidible = expr:(PAI_clause?) {return (expr == "" || !expr) ? ["PAI"] : _node_empty("PAI_clause_elidible", expr);}
PEI_clause_elidible = expr:(PEI_clause?) {return (expr == "" || !expr) ? ["PEI"] : _node_empty("PEI_clause_elidible", expr);}
POI_clause_elidible = expr:(POI_clause?) {return (expr == "" || !expr) ? ["POI"] : _node_empty("POI_clause_elidible", expr);}
VAI_clause_elidible = expr:(VAI_clause?) {return (expr == "" || !expr) ? ["VAI"] : _node_empty("VAI_clause_elidible", expr);}

// PARTICLE FAMILIES
BA = expr:(&particle (b a) &post_word) {return _node("BA", expr);}
BE = expr:(&particle (b &e haeiou) &post_word) {return _node("BE", expr);}
BI = expr:(&particle (b i) &post_word) {return _node("BI", expr);}
BO = expr:(&particle (b o) &post_word) {return _node("BO", expr);}
BU = expr:(&particle (b u) &post_word) {return _node("BU", expr);}
CA = expr:(&particle (c haeiou) &post_word) {return _node("CA", expr);}
DA = expr:(&particle (d &a haeiou) &post_word) {return _node("DA", expr);}
DI = expr:(&particle (d i) &post_word) {return _node("DI", expr);}
DO = expr:(&particle (d o) &post_word) {return _node("DO", expr);}
DOI = expr:(&particle (d o i) &post_word) {return _node("DOI", expr);}
DU = expr:(&particle (d u) &post_word) {return _node("DU", expr);}
FA = expr:(&particle (f haeiou) &post_word) {return _node("FA", expr);}
GA = expr:(&particle (g haeiou) &post_word) {return _node("GA", expr);}
KA = expr:(&particle (k haeiou) &post_word) {return _node("KA", expr);}
MA = expr:(&particle (m haeiou) &post_word) {return _node("MA", expr);}
PA = expr:(&particle !(PAI &post_word) (p &a haeiou) &post_word) {return _node("PA", expr);}
PAI = expr:(&particle (p a i) &post_word) {return _node("PAI", expr);}
PE = expr:(&particle (p e) &post_word) {return _node("PE", expr);}
PEI = expr:(&particle (p e i) &post_word) {return _node("PEI", expr);}
PI = expr:(&particle (p &i haeiou) &post_word) {return _node("PI", expr);}
PO = expr:(&particle !(POI &post_word) (p &o haeiou) &post_word) {return _node("PO", expr);}
POI = expr:(&particle (p o i) &post_word) {return _node("POI", expr);}
PU = expr:(&particle (p &u haeiou) &post_word) {return _node("PU", expr);}
SA = expr:(&particle (s haeiou) &post_word) {return _node("SA", expr);}
TA = expr:(&particle (t haeiou) / digit &post_word) {return _node("TA", expr);}
VA = expr:(&particle !(VAI &post_word) (v haeiou) &post_word) {return _node("VA", expr);}
VAI = expr:(&particle (v a i) &post_word) {return _node("VAI", expr);}
LA = expr:(&particle !(LAI &post_word) (l &a haeiou) &post_word) {return _node("LA", expr);}
LAI = expr:(&particle (l a i) &post_word) {return _node("LAI", expr);}
LE = expr:(&particle (l &e haeiou) &post_word) {return _node("LE", expr);}
LO = expr:(&particle (l &o haeiou) &post_word) {return _node("LO", expr);}
ZA = expr:(&particle (z haeiou) &post_word) {return _node("ZA", expr);}

// MORPHOLOGY
// - Forein text quoting
foreign_quote_open = expr:(native_word) { _assign_foreign_quote_delim(expr); return _node("foreign_quote_open", expr); }
foreign_quote_word = expr:((!space_char .)+ ) !{ return _is_foreign_quote_delim(expr); } { return ["foreign_quote_word", join_expr(expr)]; }
foreign_quote_close = expr:(native_word) &{ return _is_foreign_quote_delim(expr); } { return _node("foreign_quote_close", expr); }

// - Compounds
compound = expr:((compound_2 / compound_3 / compound_4 / compound_n) &post_word) {return _node("compound", expr);}
compound_2 = expr:(e compound_word compound_word) {return _node("compound_2", expr);}
compound_3 = expr:(i compound_word compound_word compound_word) {return _node("compound_3", expr);}
compound_4 = expr:(o compound_word compound_word compound_word compound_word) {return _node("compound_4", expr);}
compound_n = expr:(a compound_word (!compound_n_end compound_word)* compound_n_end) {return _node("compound_n", expr);}
compound_n_end = expr:(spaces? a &post_word) {return _node("compound_n_end", expr);}
compound_word = expr:(spaces? (borrowing / native_word)) {return _node("compound_word", expr);}

// - Foreign words
borrowing = expr:(u (spaces &u / !u) borrowing_content borrowing_end) {return _node("borrowing", expr);}
borrowing_content = expr:(foreign_word) {return _node("borrowing_content", expr);}
borrowing_end = expr:((pause_char / space_char / EOF)) {return _node("borrowing_end", expr);}
foreign_word = expr:((initial_consonant_pair / consonant / h)? haeiou (consonant_cluster haeiou)* sonorant?) {return _node("foreign_word", expr);}

// - Native words
native_word = expr:(root / particle) {return _node("native_word", expr);}
particle = expr:(!sonorant particle_1 &post_word) {return _node("particle", expr);}
root = expr:(!sonorant (root_1 / root_2 / root_3) &post_word) {return _node("root", expr);}

particle_1 = expr:(consonant haeiou) {return _node("particle_1", expr);}

root_1 = expr:(consonant haeiou (sonorant haeiou)+ sonorant?) {return _node("root_1", expr);}
root_2 = expr:(consonant haeiou sonorant) {return _node("root_2", expr);}
root_3 = expr:(initial_consonant_pair haeiou (sonorant haeiou)* sonorant?) {return _node("root_3", expr);}

// - Legal clusters
haeiou = expr:(aeiou+ (h aeiou+)*) {return _node("haeiou", expr);}
aeiou = expr:(a / e / i / o / u) {return _node("aeiou", expr);}

consonant_cluster = expr:((!(sonorant sonorant sonorant) consonant consonant? consonant? !consonant)) {return _node("consonant_cluster", expr);}
initial_consonant_pair = expr:(&initial consonant consonant !consonant) {return _node("initial_consonant_pair", expr);}
initial = expr:((plosib / sibilant? other? liquid?) !consonant) {return _node("initial", expr);}

plosib = expr:(plosive sibilant) {return _node("plosib", expr);}
consonant = expr:((voiced / unvoiced / liquid / m / n)) {return _node("consonant", expr);}
liquid = expr:((l / r)) {return _node("liquid", expr);}
other = expr:((p / t !l / k / f / b / d !l / g / v / m / n !liquid)) {return _node("other", expr);}
plosive = expr:((t / d / k / g / p / b)) {return _node("plosive", expr);}
sibilant = expr:((c / s / j / z)) {return _node("sibilant", expr);}
sonorant = expr:((n / r)) {return _node("sonorant", expr);}
voiced = expr:((b / d / g / j / v / z)) {return _node("voiced", expr);}
unvoiced = expr:((c / f / k / p / s / t)) {return _node("unvoiced", expr);}

// Legal letters
a = expr:([aA] !a) {return ["a", "a"];} // <LEAF>
e = expr:([eE] !e) {return ["e", "e"];} // <LEAF>
i = expr:([iI] !i) {return ["i", "i"];} // <LEAF>
o = expr:([oO] !o) {return ["o", "o"];} // <LEAF>
u = expr:([uU] !u) {return ["u", "u"];} // <LEAF>

h = expr:([hH] !h) {return ["h", "h"];} // <LEAF>
n = expr:([nN] !n) {return ["n", "n"];} // <LEAF>
r = expr:([rR] !r) {return ["r", "r"];} // <LEAF>

b = expr:([bB] !b !unvoiced) {return ["b", "b"];} // <LEAF>
d = expr:([dD] !d !unvoiced) {return ["d", "d"];} // <LEAF>
g = expr:([gG] !g !unvoiced) {return ["g", "g"];} // <LEAF>
v = expr:([vV] !v !unvoiced) {return ["v", "v"];} // <LEAF>
j = expr:([jJ] !j !z !unvoiced) {return ["j", "j"];} // <LEAF>
z = expr:([zZ] !z !j !unvoiced) {return ["z", "z"];} // <LEAF>
s = expr:([sS] !s !c !voiced) {return ["s", "s"];} // <LEAF>
c = expr:([cC] !c !s !voiced) {return ["c", "c"];} // <LEAF>
k = expr:([kK] !k !voiced) {return ["k", "k"];} // <LEAF>
f = expr:([fF] !f !voiced) {return ["f", "f"];} // <LEAF>
p = expr:([pP] !p !voiced) {return ["p", "p"];} // <LEAF>
t = expr:([tT] !t !voiced) {return ["t", "t"];} // <LEAF>
m = expr:([mM] !m) {return ["m", "m"];} // <LEAF>
l = expr:([lL] !l) {return ["l", "l"];} // <LEAF>

// - Spaces / Pause
post_word = expr:((pause_char &aeiou) / !sonorant &consonant / spaces) {return _node("post_word", expr);}
spaces = expr:(space_char+ (pause_char &aeiou)? / pause_char &aeiou / EOF) {return _node("spaces", expr);}


// - Special characters
pause_char = expr:((['.]) !pause_char) {return _node("pause_char", expr);}
space_char = expr:([\t\n\r?!\u0020]) {return _join(expr);}
digit = expr:([.0123456789]) {return ["digit", expr];} // <LEAF2>
EOF = expr:(!.) {return _node("EOF", expr);}
