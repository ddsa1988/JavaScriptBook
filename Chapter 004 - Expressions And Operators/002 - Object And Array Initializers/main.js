"use strict";

let myArray1 = []; //An empty array: no expressions inside brackets means no elements
let myArray2 = new Array(); //An empty array with length of zero. Initial value is undefined.
let myArray3 = new Array(5); //An empty array with length of five. Initial value is undefined.

myArray1 = [1, 2, 3];
myArray2 = [1 + 2, 3 + 4];
myArray3 = [1, , , , 5];
console.log(myArray3);
console.log(myArray3[1]);
console.log();

const myObj1 = {}; //An empty object
console.log(myObj1);
myObj1.x = 2.5; //Add properties
myObj1.y = 10;
console.log(myObj1);
