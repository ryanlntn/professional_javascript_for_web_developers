// Chapter 6
// Object-Oriented Programming

// It helps to think of ECMAScript objects as hash tables:
// nothing more than a grouping of name-value pairs where the value may be data or a function.

// There are two types of properties: data properties and accessor properties.

// The factory pattern is a well-known design pattern used in software engineering to abstract
// away the process of creating specific objects.

function createPerson(name, age, job){   // A person factory
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function(){
    alert(this.name);
  };
  return o;
}

var person1 = createPerson(“Nicholas”, 29, “Software Engineer”); // Don't mind me just making people
var person2 = createPerson(“Greg”, 27, “Doctor”);

// Constructors in ECMAScript are used to create specific types of objects.

function Person(name, age, job){   // A person constructor
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function(){
    alert(this.name);
  };
}

var person1 = new Person(“Nicholas”, 29, “Software Engineer”); // Nevermind now I'm constructing people
var person2 = new Person(“Greg”, 27, “Doctor”);

// Note that the code inside Person() is the same as the code inside createPerson(), with the following exceptions:
// ➤ There is no object being created explicitly.
// ➤ The properties and method are assigned directly onto the this object.
// ➤ There is no return statement.

// The major downside to constructors is that methods are created once for each instance.

// Each function is created with a prototype property, which is an object containing properties and methods that should be available to instances of a particular reference type. This object is literally
// a prototype for the object to be created once the constructor is called.

function Person(){ }  // A person prototype
Person.prototype.name = “Nicholas”;
Person.prototype.age = 29;
Person.prototype.job = “Software Engineer”;
Person.prototype.sayName = function(){
  alert(this.name);
};
var person1 = new Person();
person1.sayName(); //”Nicholas”
var person2 = new Person();
person2.sayName(); //”Nicholas”
alert(person1.sayName == person2.sayName); //true

// Unlike the constructor pattern, the properties and methods are all shared among instances,
// so person1 and person2 are both accessing the same set of properties and the same sayName() function.

function Person(){
}
Person.prototype = {      // Shorter prototype syntax
    name : “Nicholas”,
    age : 29,
    job : “Software Engineer”,
    sayName : function () {
        alert(this.name);
    }
};

// The most common way of defining custom types is to combine the constructor and prototype patterns.
// The constructor pattern defines instance properties, whereas the prototype pattern defines methods
// and shared properties. With this approach, each instance ends up with its own copy of
// the instance properties, but they all share references to methods, conserving memory. This pattern
// allows arguments to be passed into the constructor as well, effectively combining the best parts of
// each pattern. The previous example can now be rewritten as follows:

function Person(name, age, job){
  this.name = name;
  this.age = age;
  this.job = job;
  this.friends = [“Shelby”, “Court”];
}
Person.prototype = {
  constructor: Person,
  sayName : function () {
    alert(this.name);
  }
};
var person1 = new Person(“Nicholas”, 29, “Software Engineer”);
var person2 = new Person(“Greg”, 27, “Doctor”);

// ECMA-262 describes prototype chaining as the primary method of inheritance in ECMAScript.

// Combination inheritance (sometimes also called pseudoclassical inheritance) combines prototype
// chaining and constructor stealing to get the best of each approach. The basic idea is to use
// prototype chaining to inherit properties and methods on the prototype and to use constructor stealing
// to inherit instance properties. This allows function reuse by defining methods on the prototype and
// allows each instance to have its own properties. Consider the following:

function SuperType(name){
  this.name = name;
  this.colors = [“red”, “blue”, “green”];
}
SuperType.prototype.sayName = function(){
  alert(this.name);
};
function SubType(name, age){
  //inherit properties
  SuperType.call(this, name);
  this.age = age;
}
//inherit methods
SubType.prototype = new SuperType();
SubType.prototype.sayAge = function(){
  alert(this.age);
};

// ECMAScript supports object-oriented (OO) programming without the use of classes or interfaces.
// Objects are created and augmented at any point during code execution, making objects into dynamic
// rather than strictly defined entities. In place of classes, the following patterns are used for the
// creation of objects:

// ➤ The factory pattern uses a simple function that creates an object, assigns properties and methods,
//   and then returns the object. This pattern fell out of favor when the constructor pattern emerged.
// ➤ Using the constructor pattern, it’s possible to define custom reference types that can be created
//   using the new operator in the same way as built-in object instances are created. The constructor
//   pattern does have a downside, however, in that none of its members are reused, including functions.
//   Since functions can be written in a loosely typed manner, there’s no reason they cannot be shared by
//   multiple object instances.
// ➤ The prototype pattern takes this into account, using the constructor’s prototype property to assign
//   properties and methods that should be shared. The combination constructor/ prototype pattern uses the
//   constructor to define instance properties and the prototype pattern to define shared properties and methods.

// Inheritance in JavaScript is implemented primarily using the concept of prototype chaining. Prototype chaining
// involves assigning a constructor’s prototype to be an instance of another type. In doing so, the subtype assumes
// all of the properties and methods of the supertype in a manner similar to class-based inheritance. The
// problem with prototype chaining is that all of the inherited properties and methods are shared among object
// instances, making it ill-suited for use on its own. The constructor stealing pattern avoids these issues, calling
// the supertype’s constructor from inside of the subtype’s constructor. This allows each instance to have its own
// properties but forces the types to be defined using only the constructor pattern. The most popular pattern of
// inheritance is combination inheritance, which uses prototype chaining to inherit shared properties and methods
// and uses constructor stealing to inherit instance properties.