// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "The Hulk";
var specialAbility = "super strength";
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Welcome " + heroName;
var catchphrase = `Hulk Smash with my ${specialAbility}`;

console.log(greeting);
console.log(catchphrase);
// Declare two variables - power AND energy - set to integers
var power = 100;
var energy = 30;

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;
console.log(fullPower);
console.log(fullEnergy);
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Abomination", "Juggernaut", "Thanos"];
var sideKicks = ["Iron Man", "Captian America", "Doctor Strange"];

// Print the first sidekick to your console
console.log(sideKicks[0]);

// Print the last archEnemy to the console
console.log(archEnemies[2]);

// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("Red Hulk");

// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);

// Remove the first sidekick from the sidekicks array
sideKicks.shift();

// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sideKicks);

// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
/*var saveTheDay = "Sweet Victory!";
var badExcuse = "I think I hear my mom calling me, gotta go!";
function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  if (dangerLevel > 50){
    console.log(badExcuse);
  } else if ((dangerLevel >= 10) && (dangerLevel <= 50)){
    console.log(saveTheDay);
  } else if (dangerLevel < 10) {
    console.log("Meh, hard pass.");
  }
}
assessSituation(51, saveTheDay, badExcuse);*/
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."
function assessSituation(dangerLevel, announcement, excuse) {
  if (dangerLevel > 98){
    console.log(excuse);
  } else if ((dangerLevel >= 21) && (dangerLevel <= 98)){
    console.log(announcement);
  } else if (dangerLevel < 21) {
    console.log("Meh, hard pass.");
  }
}
assessSituation(100, announcement, excuse);
// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Bob",
  smell: "Roses",
  weight: 150,
  citiesDestroyed: ["Tokyo", "New York", "LA"],
  luckyNumbers: [7, 13, 70],
  address: monsterAddress = {
    number: 2001,
    street: "Secret Monster Drive",
    state: "Colorado",
    zip: 80014,
  }
}

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50
class SuperHero {
  archNemesis = "The Syntax Error";
  powerLevel = 100;
  energyLevel = 50;
  constructor(name, superpower, age){
    this.name = name;
    this.superpower = superpower;
    this.age = age;
  }
  sayName(){
    console.log(this.name);
  }
  maximizeEnergy(){
    var energyLevel = 1000;
    console.log(energyLevel);
  }
  gainPower(powerIncrease){
    var powerLevel = 50;
    var newPowerLevel = (powerLevel + powerIncrease);
    console.log(newPowerLevel);
  }
}
// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number

// - Create 2 instances of your SuperHero class
var codingStudent = new SuperHero ("Kayla", "making coding mistakes", 38);
var turingGrad = new SuperHero ("Mason", "making perfect code", 35);
console.log(codingStudent);
console.log(turingGrad);
codingStudent.sayName();
codingStudent.maximizeEnergy();
codingStudent.gainPower(100);

// Reflection
// What parts were most difficult about this exerise?
//The class methods, and honestly this took me way longer than 30 minutes, so I feel like maybe i'm way behind?
//Upon further investigation, I realize the issues I was having with the methods in the last activity were Because
//I was trying to manipulate STATIC data. You can't do that, not in the way I think you were asking as to anyway?
//
// What parts felt most comfortable to you?
//Declaring variables, printing to console, creating arrays and functions.

// What skills do you need to continue to practice before starting Mod 1?
//Creating classes/methods.
