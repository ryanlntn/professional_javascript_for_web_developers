// Chapter 4
// Variables, Scope, and Memory

// Think of function arguments in ECMAScript as nothing more than local variables.
// Function arguments are considered to be variables and follow the same access rules as any other variable in the execution context.

// Two types of values can be stored in JavaScript variables: primitive values and reference values.
// Primitive values have one of the five primitive data types: Undefined, Null, Boolean, Number, and String.
// Primitive and reference values have the following characteristics:

// ➤ Primitive values are of a fixed size and so are stored in memory on the stack.
// ➤ Copying primitive values from one variable to another creates a second copy of the value.
// ➤ Reference values are objects and are stored in memory on the heap.
// ➤ A variable containing a reference value actually contains just a pointer to the object, not the object itself.
// ➤ Copying a reference value to another variable copies just the pointer, so both variables end up referencing the same object.
// ➤ The typeof operator determines a value’s primitive type, whereas the instanceof operator is used to determine the reference
//   type of a value.

// All variables, primitive and reference, exist within an execution context (also called a scope) that
// determines the lifetime of the variable and which parts of the code can access it.
// Execution context can be summarized as follows:
// ➤ Execution contexts exist globally (called the global context) and within functions.
// ➤ Each time a new execution context is entered, it creates a scope chain to search for variables and functions.
// ➤ Contexts that are local to a function have access not only to variables in that scope but also to variables in
//   any containing contexts and the global context.
// ➤ The global context has access only to variables and functions in the global context and cannot directly access
//   any data inside local contexts.
// ➤ The execution context of variables helps to determine when memory will be freed.

// JavaScript is a garbage-collected programming environment where the developer need not be concerned with
// memory allocation or reclamation. JavaScript’s garbage-collection routine can be summarized as follows:
// ➤ Values that go out of scope will automatically be marked for reclamation and will be deleted during the
//   garbage-collection process.
// ➤ The predominant garbage-collection algorithm is called mark-and-sweep, which marks values that aren’t
//   currently being used and then goes back to reclaim that memory.
// ➤ Another algorithm is reference counting, which keeps track of how many references there are to a particular value.
//   JavaScript engines no longer use this algorithm, but it still affects Internet Explorer because of nonnative JavaScript
//   objects (such as DOM elements) being accessed in JavaScript.
// ➤ Reference counting causes problems when circular references exist in code.
// ➤ Dereferencing variables helps not only with circular references but also with garbage collec- tion in general.
//   To aid in memory reclamation, global objects, properties on global objects, and circular references should all
//   be dereferenced when no longer needed.