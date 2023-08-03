// let name = "Kuldeep";
// console.log(name);

//cannot be reserve keyword
//should be meaning full
//they cannot start with a number
//they contain space of hyphen (-)
//They are case sensitive
//the datatype of variable can be changed in the javascript
//so we can can js a dynamic programming language
//variable will take the datatype of the value which is assigned to it

// let firstName = 'Kuldeep';
// let lastName = 'Jhala';

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let name = "Kuldeep"; //string literal
let age = 30; // number literal
let isApproved = false; // Boolean Literal
let firstName = undefined;
let lastName = null;
let selectedColor = null;

//types of types of datatype
// 1. primitive = string, number, boolean, undefined, null
// 2. reference type = object, arrays, function

//creating an object
let namek = "kuldeep";
let agek = 30;
let person = {
  namek: "mosh",
  agek: 30,
};

console.log(person);

//dot notation, we prefer this  for our codebase.
person.namek = "hardWorkingPerson"; //you can change the values by  'dot notation' to assign or reassign the data
console.log(person);

//bracket notation, we need to use this when we dont know what we have to select from the object
person["namek"] = "successfullPerson";
console.log(person);

let selectionObject = "agek";
person[selectionObject] = "20"; //age is updated dynamically using bracket notation

console.log(person);

//size and typeOf datatype of an array is dynamic, and typeof array is object.
let selectedColors = ["red", "blue"]; //array literals
//above string value is stored
selectedColors[2] = 1; //not number value is stored
console.log(selectedColors[2]);

//an array is and ds that is used to represent list of items
console.log(selectedColors);

//functions is a set of statemnt whether it performs a task or calculate some value
//preforming a task
function greet(name, lastNames) {
  console.log("hello " + name + ' ' + lastNames);
}

greet("kuldeepsinh", 'Jhala');

//calculate a value
function square(number) {
    return number * number;
}

console.log(square(100));
