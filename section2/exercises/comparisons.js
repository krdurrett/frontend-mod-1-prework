/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/

//-------------------
// PART 1: Comparing variables
//-------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// this should log: true

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
console.log("Is numberTeachers equal to stringTeachers?", numberTeachers == stringTeachers);
// this should log: true

/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);

// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);

// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
//YOU DO: Explain.
//This will print a result in the console of: true. This is a conditional, using the comparison operator of '<'.
//Conditionals will always produce output of either "true" or "false". Since the number 4 is, in fact, less than 9, the '<'
//operator will give a 'true' output.
var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//This will print a result in the console of: false. This is a conditional, using the comparison operator of '<'.
//Conditionals will always produce output of either 'true' or 'false'. The variable of 'books' was assigned a value of 3,
//using the assignment operator of '='.
//Since 4 is not less than (the '<' is 'less than') 3, this '<' operator will give a 'false' output.
var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
//This will print a result in the console of: true. The variable of 'friends' was assigned a value of 6 using the assignment operator
//of '='. The variable of 'siblings' was assigned a value of 2, using the assignment operator of '='.
//This is a conditional, using the comparison operator of '>' ('>' means 'greater than').
//Since 6 (friends variable) is, in fact, greater than 2 (siblings variable), this '>' operator will give a 'true' ouput.

var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
//This will print a result in the console of: true. The variable of 'attendees' was assiged a value of 9, using the assignment
//operator of '='. The variable of 'meals' was assigned a value of 8, using the assignment operator of '='.
//This is a conditional with a comparison operator of '!==' ('!==' means 'not equal').
//Since 9 (attendees variable) does not equal 8 (meals), this '!==' will give a 'true' output.

//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats);


// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && (age < 1));

// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: My final line of code evaluated to false, which is what expected. This fuction used the logical operator
//of '&&', which is the logical operator for 'and'. When you use the logical operator of '&&' (and), it will only
// return an output of 'true' IF both values in the function are 'true', all other times it will return 'false'.
//The variable lovesToPlay was assigned a value of 'true' using an assignment operator of '='. The second part of the function
//needed to determine if the dog 'is a puppy'. The variable of 'age' had been assigned a value of 1, using the assignment
//operator of '='. Dogs are typically considered to be puppies if they are less than 1, so I used the comparion operator of
//'<' to create a conditional function of 'age < 1'. Since 'age' equals 1, and is not less than 1, that condtional function is
//'false'. Therefore, in this logical operation, since lovesToPlay is 'true' and (age < 1) is 'false', the entire operation
//would evaluate to 'false'.

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect? Yes, everything printed as expected.
