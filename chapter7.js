// Chapter 7
// Function Expressions

function a() {} // A function declaration. This will be hoisted to the top of execution.

var a = function(){} // A function expression. This will not be hoisted to the top of execution.

// Anonymous functions are also sometimes called lambda functions.

// A recursive function typically is formed when a function calls itself by name.
// It’s advisable to always use arguments .callee of the function name whenever you’re writing recursive functions.
// The value of arguments.callee is not accessible to a script running in strict mode and will cause an error when attempts
// are made to read it. Instead, you can use named function expressions to achieve the same result.

// Closures are not anonymous functions though they can be.
// A closure is a nested function that has access to it's parent function's execution context.
// Closures can access variables from their parent functions but not this or arguments.

// The basic syntax of an anonymous function used as a block scope (often called a private scope) is as follows:
(function(){        // parenthesis make this a function expression
  //block code here
})();

// Strictly speaking, JavaScript has no concept of private members; all object properties are public.

// A privileged method is a public method that has access to private variables and/or private functions.

// Singletons are objects of which there will only ever be one instance.
// Traditionally, singletons are created in JavaScript using object literal notation.

// Function expressions are useful tools in JavaScript programming. They allow truly dynamic programming where functions
// need not be named. These anonymous functions, also called lambda functions, are a powerful way to use JavaScript functions.
// The following is a summary of function expressions:

// ➤ Function expressions are different from function declarations. Function declarations require names, while
//   function expressions do not. A function expression without a name is also called an anonymous function.
// ➤ With no definitive way to reference a function, recursive functions become more complicated.
// ➤ Recursive functions running in nonstrict mode may use arguments.callee to call themselves recursively instead
//   of using the function name, which may change.

// Closures are created when functions are defined inside other functions, allowing the closure access to all of the
// variables inside of the containing function, as follows:

// ➤ Behind the scenes, the closure’s scope chain contains a variable object for itself, the containing
//   function, and the global context.
// ➤ Typically a function’s scope and all of its variables are destroyed when the function has finished executing.
// ➤ When a closure is returned from that function, its scope remains in memory until the closure no longer exists.

// Using closures, it’s possible to mimic block scoping in JavaScript, which doesn’t exist natively, as follows:

// ➤ A function can be created and called immediately, executing the code within it but never leaving a reference to the function.
// ➤ This results in all of the variables inside the function being destroyed unless they are specifically set to
//   a variable in the containing scope.

// Closures can also be used to create private variables in objects, as follows:

// ➤ Even though JavaScript doesn’t have a formal concept of private object properties, closures can be used to implement
//   public methods that have access to variables defined within the containing scope.
// ➤ Public methods that have access to private variables are called privileged methods.
// ➤ Privileged methods can be implemented on custom types using the constructor or prototype
//   patterns and on singletons by using the module or module-augmentation patterns.

// Function expressions and closures are extremely powerful in JavaScript and can be used to accomplish many things.
// Keep in mind that closures maintain extra scopes in memory, so overusing them may result in increased memory consumption.