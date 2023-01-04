"use strict";

const a = [1, 2, 3];
console.log(...a);
console.log();

const b = [0, ...a, 4];
console.log(b);
console.log();

//The spread operator creates a shallow copy of an array
const original = [1, 2, 3];
const copy = [...original];

copy.push(100);
console.log(original);
console.log(copy);
console.log();

//The spread operator turns any string into an array of single-character
const digits = [..."0123456789ABCDF"];
console.log(digits);

//You can remove duplicates from an array using he set and then converts back to an array

const uniqueLetters = [...new Set([..."Hello World"])];
console.log(uniqueLetters);
