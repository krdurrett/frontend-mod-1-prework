/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};

printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
function sayHello() {
  console.log("Oh, hello!");
}
// Then, call the function 2 times.
sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
function greetMe(name) {
  console.log(name);
}
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
greetMe('Kayla');
greetMe('Chris');
greetMe('Asher');


// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
function addMe(numberOne, numberTwo) {
  var sum = (numberOne + numberTwo);
  console.log(sum);
}
// Then, call that function 3 times, each time, passing in 2 different Numbers.
addMe(1, 2);
addMe(12, 21);
addMe(15, 15);


// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function rainyWeather(animalOne, animalTwo) {
  console.log("It's raining " + animalOne + " and " + animalTwo + "!");
}
rainyWeather('cats', 'dogs');
rainyWeather('camels', 'monkeys');
//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?

EXPLAIN: I named my function 'rainyWeather'. This is because I wanted to print a concatenation using the well-
known phrase 'Raining cats and dogs'. Each parameter I named 'animalOne' and 'animalTwo', to describe what
kind of argument I was looking to be passed in to the function parameters.


*/
