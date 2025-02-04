// Primitive

// 7 Types : String, Number, Boolean, NULL, undefined, Symbol, BigInt

const number = 100;
const numValue = 100.3;

const isLoggedIn = false;
let userEmail;

const id = symbol('123');
const anotherId = symbol('123');
console.log(typeof id);

console.log(id === anotherId);

// Reference (Non primitive)

// Arrays, objects, Functions

const heroes = ['superman', 'thor', 'ironman'];

let myObj = {
    name : 'Ansh',
    age : 21,
}

const myFunction = function (){
    console.log('Hello World!!');
}