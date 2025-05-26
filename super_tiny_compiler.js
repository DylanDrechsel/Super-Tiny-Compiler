// --------------------> Super Tiny Compiler Notes <-------------------- \\
// lisp --> a collection of items that are finite and in a particular order.
// Most compilers break down into three primary stages:
//      1. Parsing --> os taking raw code and turning it into a more abstract representation of the code.
//      2. Transformation --> takes this abstract representation and manipulates it to do whatever the compiler wants it to.
//      3. Code Generation --> takes the transformed representation of the code and turns it into new code.
//
// --------------------> Parsing <-------------------- \\
//      1. Lexical Analysis --> takes the raw code and splits it apart into these things called tokens by a thing called a tokenizer (or lexer).
//         --> Tokens are an array of tiny little objects that describe an isolated piece of syntax.
//      2. Syntactic Analysis --> takes the tokens and reformats them into a representation that describes each part of the syntax and their relation to one another.
//         --> An Abstract Syntax Tree (AST) is a deeply nested object that represents code in a way that is both easy to work with and tells us a lot of information.
//
// ------------------> Tokens <------------------ || ------------------> Abstract Syntax Tree <------------------ \\
//  [                                                 {
//    { type: 'paren',  value: '('        },            type: 'Program',       
//    { type: 'name',   value: 'add'      },            body: [{
//    { type: 'number', value: '2'        },              type: 'CallExpression',
//    { type: 'paren',  value: '('        },              name: 'add',
//    { type: 'name',   value: 'subtract' },              params: [{
//    { type: 'number', value: '4'        },                type: 'NumberLiteral',
//    { type: 'number', value: '2'        },                value: '2',
//    { type: 'paren',  value: ')'        },              }, {
//    { type: 'paren',  value: ')'        },                type: 'CallExpression',
//  ]                                                       name: 'subtract',
//                                                          params: [{
//                                                            type: 'NumberLiteral',
//                                                            value: '4',
//                                                        }, {
//                                                            type: 'NumberLiteral',
//                                                            value: '2',
//                                                          }]
//                                                        }]
//                                                      }]
//                                                    }
//
// --------------------> Transformation <-------------------- \\
// This just takes the AST from the last step and makes changes to it. It can manipulate the AST in the same language or it can translate it into an entirely new language.
// You might notice that our AST has elements within it that look very similar. There are these objects with a type property. Each of these are known as an AST Node.
// These nodes have defined properties on them that describe one isolated part of the tree.
//
// We can have a node for a 'NumberLiteral':
//
//  {
//    type: 'NumberLiteral',
//    value: '2',
//  }
//
// Or maybe a node for a 'CallExpression':
//
//  {
//    type: 'CallExpression',
//    name: 'subtract',
//    params: [...nested nodes go here...],
//  }
//
// When transforming the AST we can manipulate nodes by adding/removing/replacing properties, we can add new nodes, 
// remove nodes, or we could leave the existing AST alone and create an entirely new one based on it.
// Since we're targeting a new language, we're going to focus on creating an entirely new AST that is specific to the target language.
//
// --------------------> Traversal (Part of Transformation) <-------------------- \\
// In order to navigate through all of these nodes, we need to be able to traverse through them. This traversal process goes to each node in the AST depth-first.
//
//  {
//     type: 'Program',
//     body: [{
//       type: 'CallExpression',
//       name: 'add',
//       params: [{
//         type: 'NumberLiteral',
//         value: '2'
//       }, {
//         type: 'CallExpression',
//         name: 'subtract',
//         params: [{
//           type: 'NumberLiteral',
//           value: '4'
//         }, {
//           type: 'NumberLiteral',
//           value: '2'
//         }]
//       }]
//     }]
//   }
//
// So for the above AST we would go:
//
// 1. Program --> Starting at the top level of the AST
// 2. CallExpression (add) --> Moving to the first element of the Program's body
// 3. NumberLiteral (2) --> Moving to the first element of the CallExpression's params
// 4. CallExpression (subtract) --> Moving to the second element of CallExpression's params
// 5. NumberLiteral (4) - Moving to the first element of CallExpression's params 
// 6. NumberLiteral (2) - Moving to the second element of CallExpression's params
//
// If we were manipulating this AST directly, instead of creating a separate AST, we would likely introduce all sorts of abstractions here.
// But just visiting each node in the tree is enough for what we're trying to do.
//
// --------------------> Visitors (Part of Transformation) <-------------------- \\
// The basic idea here is that we are going to create a 'visitor' object that has methods that will accept different node types.
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




// In this file we are going to compile some lisp-like function calls into some C-like function calls