// Chapter 5
// Reference Types

// It’s recommended to use object literal notation only when you’re going to specify properties for readability.

// Generally speaking, dot notation is preferred unless variables are necessary to access properties by name.

// Arrays can contain a maximum of 4,294,967,295 items, which should be plenty for almost all programming needs.

// It’s very important to understand the difference between a primitive Boolean value and a Boolean object
// — it is recommended to never use the latter.

// Objects in JavaScript are called reference values, and several built-in reference types can be used to create specific
// types of objects, as follows:
  // ➤ Reference types are similar to classes in traditional object-oriented programming but are implemented differently.
  // ➤ The Object type is the base from which all other reference types inherit basic behavior.
  // ➤ The Array type represents an ordered list of values and provides functionality for manipulating and converting the values.
  // ➤ The Date type provides information about dates and times, including the current date and time and calculations.
  // ➤ The RegExp type is an interface for regular-expression support in ECMAScript, providing most basic and some
  //   advanced regular-expression functionality.

// One of the unique aspects of JavaScript is that functions are actually instances of the Function type, meaning
// functions are objects. Because functions are objects, functions have methods that can be used to augment how they behave.
// Because of the existence of primitive wrapper types, primitive values in JavaScript can be accessed as if they
// were objects. There are three primitive wrapper types: Boolean, Number, and String. They all have the
// following characteristics:
  // ➤ Each of the wrapper types maps to the primitive type of the same name.