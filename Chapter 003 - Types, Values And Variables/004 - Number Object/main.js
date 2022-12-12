"use strict";

console.log("Number Object:");
console.log();

//Infinity: A positive number too big to represent
console.log(Number.POSITIVE_INFINITY);
console.log(1 / 0);
console.log(Number.MAX_VALUE * 2); //Overflow
console.log(-Number.MAX_VALUE * 2); //Underflow
console.log();

//Not a Number
console.log("diego" / 1);
console.log(0 / 0);
console.log(Infinity / Infinity);
console.log(NaN === NaN); //Not a number is not equal to any value, including itself
console.log();

//Number object properties and methods
console.log(Number.parseInt("5.69")); //Convert a string number to an integer
console.log(Number.parseFloat("5.69")); //Convert a string number to a float
console.log(Number.isNaN(1), Number.isNaN(0 / 0)); //Checks if a value is not a number
console.log(Number.isFinite(259874)); //Checks if a number is finite
console.log(Number.isInteger(5.89)); //Checks if a number is an integer
console.log(Number.MIN_SAFE_INTEGER); //Maximum safe integer value
console.log(Number.MAX_SAFE_INTEGER); //Mainimum safe integer value
console.log(Number.isSafeInteger(3658)); //Checks is a number is between the valuies of safe integer
console.log(Number.EPSILON); //Smallest difference between numbers
