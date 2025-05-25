// --------------------> Super Tiny Compiler Notes <-------------------- \\
// lisp --> a collection of items that are finite and in a particular order
// Most compilers break down into three primary stages:
//      1. Parsing --> os taking raw code and turning it into a more abstract representation of the code
//      2. Transformation --> takes this abstract representation and manipulates it to do whatever the compiler wants it to
//      3. Code Generation --> takes the transformed representation of the code and turns it into new code

// --------------------> Parsing <-------------------- \\
//      1. Lexical Analysis --> takes the raw code and splits it apart into these things called tokens by a thing called a tokenizer (or lexer)
//      2. Syntactic Analysis


// In this file we are going to compile some lisp-like function calls into some C-like function calls