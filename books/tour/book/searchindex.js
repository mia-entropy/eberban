Object.assign(window.search, {"doc_urls":["introduction.html#introduction","predicates_and_propositions.html#predicates-and-propositions"],"index":{"documentStore":{"docInfo":{"0":{"body":43,"breadcrumbs":1,"title":1},"1":{"body":235,"breadcrumbs":3,"title":2}},"docs":{"0":{"body":"eberban is a lojban-inspired language aimed as being simple, regular and expressive. Simple : eberban is only made of predicates which are manipulated with particles, with few grammar rules. Regular : particles are organised into families with a unique prefix, allowing to quickly recognise them. Expressive : predicates can be combined in multiple ways to add more details. This book will provide a detailed tour of the language, covering its concepts and grammar.","breadcrumbs":"Introduction","id":"0","title":"Introduction"},"1":{"body":"The whole language is based on a concept called a predicate . To understand what predicates are, let's first look at one type of predicate : a proposition . A proposition is anything that has a truth value (which can be true or false). A cat drinks milk. In English, this sentence is a proposition : it claims a cat is drinking milk . A predicate is a proposition template with one or more open blanks (called arguments ) which may be filled in to make a complete proposition with a truth value. Thus, a proposition is a predicate with all of its open blanks filled (which is also called a nullary or 0-ary predicate). In the above sentence, the verb \"drinks\" can be seen as a predicate ___ drinks ___, where each ___ represent an open blank. The first blank represents the one who drinks while the second represents what is drunk . \"A cat\" and \"milk\" are entities that fills those blanks to make the complete proposition. Definitions with some ___ defines what is called a place structure . pin fa mian fe mrin This is a translation of the above English sentence in eberban. pin is a word having the place structure ___ drinks ___. fa and fe are grammatical particles indicating which place of pin is filled (respectively the first and second place). They are followed by a predicate describing what is filling the place. When a predicate fills a place expecting an entity, the concept expressed by first place of the filling predicate is used. It represents anything that could fill this place and make a proposition true. mian means ___ is a cat while mrin means ___ is milk. It thus means that \" (something which is a cat) drinks (something which is milk) \", or said more simply : \"A cat drinks milk\". Places can be left empty if desired. In this case, they get a default value. This default value can be defined by the definition, otherwise it is undefined and is infered from context : it is either obvious or not worth to provide. pin fa mian Here, the second place is not filled. It means \" A cat drinks \". What the cat drinks might be unimportant, or the speaker and listener might already know what it is drinking (maybe the cat is near them). pin fa fen fe mrin fen is the word for ___ is a friend of ___. The value of its second place is not provided. From context, it might be obvious it's a friend of the speaker, but this is not guaranted. Ways of filling other places of entity predicates will be explained later in this book.","breadcrumbs":"Introduction » Predicates and propositions","id":"1","title":"Predicates and propositions"}},"length":2,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"0":{"df":1,"docs":{"1":{"tf":1.0}}},"_":{"_":{"_":{"df":1,"docs":{"1":{"tf":3.1622776601683795}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"d":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":2.23606797749979}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":2.0}}}},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}},"t":{"df":1,"docs":{"1":{"tf":3.0}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"n":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":3.3166247903554}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"b":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}}}}}},"f":{"a":{"df":1,"docs":{"1":{"tf":2.0}},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.7320508075688772}},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"w":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":3.1622776601683795}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":2.0}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"u":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"t":{"'":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"k":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"t":{"'":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"j":{"b":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"m":{"a":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"y":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":2.0}}}},"df":0,"docs":{}},"i":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":2.449489742783178}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"n":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"o":{"b":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}},"r":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":2.23606797749979}}}},"l":{"a":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":3.4641016151377544}}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":3.4641016151377544}}},"df":0,"docs":{}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":3.0}}}}}}},"v":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":2.0}}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":2.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"u":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":2.23606797749979}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"w":{"a":{"df":0,"docs":{},"y":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"breadcrumbs":{"root":{"0":{"df":1,"docs":{"1":{"tf":1.0}}},"_":{"_":{"_":{"df":1,"docs":{"1":{"tf":3.1622776601683795}}},"df":0,"docs":{}},"df":0,"docs":{}},"a":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"d":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"0":{"tf":1.0}}}},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"e":{"a":{"d":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"n":{"df":0,"docs":{},"y":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"b":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":2.23606797749979}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"o":{"df":0,"docs":{},"k":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}}}},"c":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":2.0}}}},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}},"t":{"df":1,"docs":{"1":{"tf":3.0}}}},"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"m":{"b":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"n":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"x":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"s":{"c":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"t":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":3.3166247903554}}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"b":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"b":{"a":{"df":0,"docs":{},"n":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}},"x":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"l":{"a":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}}}}}}},"f":{"a":{"df":1,"docs":{"1":{"tf":2.0}},"l":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"m":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.7320508075688772}},"n":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"w":{"df":1,"docs":{"0":{"tf":1.0}}}},"i":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":3.1622776601683795}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":2.0}}}}}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"u":{"a":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"i":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}},"t":{"'":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"k":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"g":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"t":{"'":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"j":{"b":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"m":{"a":{"d":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}},"y":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":2.0}}}},"df":0,"docs":{}},"i":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":2.449489742783178}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}}},"n":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}}},"o":{"b":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}},"r":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"w":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"l":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":2.23606797749979}}}},"l":{"a":{"c":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":3.4641016151377544}}}},"df":0,"docs":{}},"df":0,"docs":{}},"r":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"c":{"df":2,"docs":{"0":{"tf":1.4142135623730951},"1":{"tf":3.605551275463989}}},"df":0,"docs":{}}},"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"x":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":3.1622776601683795}}}}}}},"v":{"df":0,"docs":{},"i":{"d":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.4142135623730951}}},"df":0,"docs":{}}}}}},"q":{"df":0,"docs":{},"u":{"df":0,"docs":{},"i":{"c":{"df":0,"docs":{},"k":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"u":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":2.0}}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":2.0}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"c":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.4142135623730951}},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"o":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}}},"p":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"k":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"df":0,"docs":{}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"u":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"0":{"tf":1.0}}}}},"r":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"l":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}}},"y":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"q":{"df":0,"docs":{},"u":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"s":{"df":1,"docs":{"1":{"tf":1.0}}}},"v":{"a":{"df":0,"docs":{},"l":{"df":0,"docs":{},"u":{"df":1,"docs":{"1":{"tf":2.23606797749979}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"b":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}}},"w":{"a":{"df":0,"docs":{},"y":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.0}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}},"title":{"root":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"d":{"df":0,"docs":{},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}}}},"p":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});