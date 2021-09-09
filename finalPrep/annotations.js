// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {//Create a funtion named 'buildABear' that takes 5 parameters: name, age, fur, clothes, specialPower
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;//create a variable named greeting and assign it the value of a string `Hey partner! My name is "" - will you be my friend?!` and interpolate that with the parameter 'name'
  var demographics = [name, age];//create a variable named demographics and assign it a value of an array which includes the parameters 'name', and 'age'.
  var powerSaying = "Did you know that I can " + specialPower + " ?";//create a variable named powerSaying and assign it a value of a string "Did you know that I can "" ?" and concatenate with the parameter 'specialPower'
  var builtBear = {//create an object named builtBear
    basicInfo: demographics,//create a key named basicInfo and assign it a value of the variable 'demographics'
    clothes: clothes,//create a key named clothes and assign it a value of the parameter 'clothes'
    exterior: fur,//create a key named exterior and assign it a value of the parameter 'fur'
    cost: 49.99,//create a key named cost and assign it a 'number' value of 49.99
    sayings: [greeting, powerSaying, "Goodnight my friend!"],//create a key named sayings and assign it a value of an array: the array should contain two variables 'greeting' and 'powerSaying', and a string "Goodnight my Friend!"
    isCuddly: true,//create a key named isCuddly and assign it a boolean value of 'true'
  };

  return builtBear//create a return value for the function that will return, or log, the object named builtBear
};

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');//call the function buildABear and pass in the arguments ('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares')
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');//call the function buildABear and pass in the arguments ('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in')



//FizzBuzz
function fizzBuzz(num1, num2, range) {//create a function named 'fizzBuzz' that takes 3 parameters: 'num1', 'num2', range
  for (var i = 0; i <= range; i++) {//create a for loop with the inital expression set to 0, the condition to loop as long as less than or equal to range value, increment loop by 1
    if (i % num1 === 0 && i % num2 === 0) {//create a conditional for the loop that evaluates if the modulo of i by num1 stricly equals 0 and  if the modulo of i by num2 also strictly equals 0
      console.log('fizzbuzz');//if above conditional is met (evaluates to true), log 'fizzBuzz' to the console
    } else if (i % num1 === 0) {//if the above conditional isn't met, create a conditional that evaluates if the modulo of i by num1 strictly equals 0
      console.log('fizz');//if the above conditional is met (evaluates to true), log 'fizz' to the console
    } else if (i % num2 === 0) {//if the above conditional isn't met, create a conditional that evaluates if the modulo of i by num2 strictly equals 0
      console.log('buzz');//if the above conditional is met (evaluates to true), log 'buzz' to the console
    } else {//if the above conditionals all evaluate to 'false', run code below
      console.log(i);//log the value of i to the console
    }
  }
}

fizzBuzz(3, 5, 100);//call the function fizzBuzz and pass in the arguments (3,5,100)
fizzbuzz(5, 8, 400);//call the function fizzBuzz and pass in the arguments (5,8,400)
