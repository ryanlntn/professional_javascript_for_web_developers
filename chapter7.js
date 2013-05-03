// Chapter 7
// Function Expressions

function a() {} // A function declaration. This will be hoisted to the top of execution.

var a = function(){} // A function expression. This will not be hoisted to the top of execution.

// Anonymous functions are also sometimes called lambda functions.

// A recursive function typically is formed when a function calls itself by name.
// It’s advisable to always use arguments .callee of the function name whenever you’re writing recursive functions.
// The value of arguments.callee is not accessible to a script running in strict mode and will cause an error when attempts
// are made to read it. Instead, you can use named function expressions to achieve the same result.