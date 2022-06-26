// External

// Print

console.log("Hi, how are you?")

// Creating variables

var FirstName = 'Sanila';
var okay = true;
var LastName = "Ranatunga";
var age = 15;
var job,business;

// Print only variable

console.log(FirstName);
console.log("My last name is "+LastName);
console.log("My age is"+age);
console.log("It is "+okay)
console.log("I'm working in "+job) //Undefined

// Get variable type

console.log(typeof(LastName))
console.log(typeof(okay))
console.log(typeof(age));
console.log(typeof(job));

// Define a undefined variable

job = 'Software enginner';

// Variable mutation(mutation means modifying data)
LastName = "Euntrepener";
console.log("I am a"+ job +"and i am a"+LastName);

// Display an alert
alert("Hello, welcome to my website");

// Get user input
business = prompt("Do you like to be a business?")
alert("He likes to be a "+business+".")


// ----------------
// ----------------
// Arithmetic operators
// ----------------
// ----------------

// Single operators
var my_age, year, result;
my_age = 15;
year = 2022;

// Substraction

result = year - my_age;
console.log("I was born in "+result);