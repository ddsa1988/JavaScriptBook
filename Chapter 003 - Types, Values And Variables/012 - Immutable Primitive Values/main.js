"use strict";

/*
Primitive types: undefined, null, booleans, numbers and strings.
Primitive types are immutable. You cannot change their values. You compare them by value.
*/

const number1 = 200;
const number2 = 200;

const string1 = "diego";
const string2 = " diego";

console.log(number1 === number2);
console.log(string1 === string2);
console.log(string1.toUpperCase()); //Returns a new string and the original remains unchanged
console.log(string1);
