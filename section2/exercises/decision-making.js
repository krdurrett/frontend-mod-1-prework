/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
//This is a 'if/else' statement. This kind of keyword/statement is used to control or evaluate a condition, or conditional instructions.
//In this particular example, 'if' is evaluating the condition (doorChoice === 1), meaning that if the variable doorChoice
//is assigned a value of 1, the condition will be evaluated as true. The subsequent code block would then be ran as bearClothing = hat,
//assigning the variable bearClothing the value of 'hat'. However, if the variable doorChoice was assigned a value of 2 (or any other number or value),
//the condition (doorChoice === 1) would evaluate as false (since 2 does not equal 1). In this case, the initial code block
//of bearClothing = 'hat' would be skipped or ignored and the next code block bearClothing = 'scarf' would run.

2. What variable has a new value assigned to it after the first if statement executes?
//bearClothing

3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
//scarf

4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
//Basically, this is the same as the previous 'if/else' statement, EXCEPT, it adds 'else if', which allows for more complex Statements
//to be evaluated in code. In this example, there are three options for variable bearChoice assignment (1, 2, 3). Contrary to the
//previous 'if/else' statment, which only had to evaluate for two possible doorChoice assigments (1, 2). This requires the use
//if 'else if' statements, to account for more variable assignment possibility, and more options for subsequent code block
//consideration. If bearChoice is assigned a 1, the initial 'if' statement is evaluated to 'true' and the first code block
//will be ran "You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!". If bearChoice is
//assigned a value of 2, the initial 'if' statement evaluates to 'false', the first code block is ignored, and the next else if statement
//is evaluated, which would return a 'true' outcome and run the second code block "You tell the bear the " + bearClothing + " is too small and it starts to cry!"
//Thirdly if bearChoice is assigned a 3, the first two 'if' and 'else if' statements would evaulate to false and the third code block would run.
//If you choose any other variable to assign to bearChoice, the last code block runs.

5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
//"You run as fast as you can into the next room. It's full of snakes!"

6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
//"You tell the bear the "hat" is too small and it starts to cry!"

7. What is your favorite ending?
//"You stay with the bear and become it's best friend!"  (This would only run if you assigned a variable other than 1,2, or 3 to bearChoice)
