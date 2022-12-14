"use strict";

console.log(1 === 2);
console.log(1 === 1);
console.log();

const myNumber = 100;
const myString = "Diego";
const myArray = [1, 2, 3];
const myObject = {
    firstName: "Diego",
};

console.log("Truthy Values:");
console.log(Boolean(myNumber));
console.log(Boolean(myString));
console.log(Boolean(myArray));
console.log(Boolean(myObject));
console.log();

console.log("Falsy Values:");
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
