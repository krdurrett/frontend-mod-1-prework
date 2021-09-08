/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
/*
// Prompt 1: Dog
class Dog {
}
var rottweiler = new Dog();
var pitbull = new Dog();
console.log(rottweiler);
console.log(pitbull);

// Prompt 2: Snack
class Snack {
  }
var cookie = new Snack();
var popcorn = new Snack();
console.log(cookie);
console.log(popcorn);

// Prompt 3: Shirt
class Shirt {
  }
var vNeck = new Shirt();
var polo = new Shirt();
console.log(vNeck);
console.log(polo);
*/
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.
/*
// Prompt 1: Dog
class Dog {
  constructor() {
    this.color = "Black and brown";
    this.age = 5;
    this.isGoodBoy = true;
  }
}
var rottweiler = new Dog();
console.log(rottweiler);
// Prompt 2: Snack
class Snack {
  constructor() {
    this.taste = "Sweet";
    this.servingNumber = 3;
    this.isHealthy = true;
  }
}
var grape = new Snack();
console.log(grape);
// Prompt 3: Shirt
class Shirt {
  constructor() {
    this.color = "Blue";
    this.size = 5;
    this.isSoft = true;
  }
}
var polo = new Shirt();
console.log(polo);
*/
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(color, age, goodBoy) {
    this.color = color;
    this.age = age;
    this.isGoodBoy = goodBoy;
  }
}
var rottweiler = new Dog("Black and Brown", 5, true);
var pitbull = new Dog("White and Brown", 3, false);
console.log(rottweiler);
console.log(pitbull);

// Prompt 2: Snack
class Snack {
  constructor(taste, serving, healthy) {
    this.taste = taste;
    this.servingNumber = serving;
    this.isHealthy = healthy;
  }
}
var cookie = new Snack("sweet", 3, false);
var carrot = new Snack("crunchy", 5, true);
console.log(cookie);
console.log(carrot);
// Prompt 3: Shirt
class Shirt {
  constructor(color, size, soft) {
    this.color = color;
    this.size = size;
    this.isSoft = soft;
  }
}
var vNeck = new Shirt("Black", 10, true);
var polo = new Shirt("Red", 8, false);
console.log(vNeck);
console.log(polo);
