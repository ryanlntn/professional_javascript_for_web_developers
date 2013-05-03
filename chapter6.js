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