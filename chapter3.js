// Chapter 3
// Language Basics

// JavaScript is case sensitive
// It's best practice to always use semicolons to end statements and braces to wrap condition blocks
// Avoid using keywords and reserved words as identifiers or property names
// Though JavaScript is loosely typed it's best to approach it as if it were static
// It’s recommended that a function either always return a value or never return a value.
// Writing a function that sometimes returns a value causes confusion, especially during debugging.
// All arguments in ECMAScript are passed by value. It is not possible to pass arguments by reference.

// The core language features of JavaScript are defined in ECMA-262 as a pseudolanguage named ECMAScript.
// ECMAScript contains all of the basic syntax, operators, data types, and objects necessary to complete
// basic computing tasks, though it provides no way to get input or to produce output. Understanding
// ECMAScript and its intricacies is vital to a complete understanding of JavaScript as implemented
// in web browsers. The most widely implemented version of ECMAScript is the one defined in ECMA-262,
// third edition, though many are starting to implement the fifth edition.

// The following are some of the basic elements of ECMAScript:
// ➤ The basic data types in ECMAScript are Undefined, Null, Boolean, Number, and String.
// ➤ Unlike other languages, there’s no separate data type for integers versus floating-point values;
// the Number type represents all numbers.
// ➤ There is also a complex data type, Object, that is the base type for all objects in the language.
// ➤ A strict mode places restrictions on certain error-prone parts of the language.
// ➤ ECMAScript provides a lot of the basic operators available in C and other C-like
// languages, including arithmetic operators, Boolean operators, relational operators,
// equality operators, and assignment operators.
// ➤ The language features flow-control statements borrowed heavily from other languages, such as the if
// statement, the for statement, and the switch statement.

// Functions in ECMAScript behave differently than functions in other languages:
// ➤ There is no need to specify the return value of the function since any function can return any value at any time.
// ➤ Functions that don’t specify a return value actually return the special value undefined.
// ➤ There is no such thing as a function signature, because arguments are passed as an array containing zero or more values.
// ➤ Any number of arguments can be passed into a function and are accessible through the arguments object.
// ➤ Function overloading is not possible because of the lack of function signatures.