"use strict";

const myNumber1 = 0 || undefined || null || 250; //Returns the first truthy element
const myNUmber2 = 0 || undefined || null || 0 || null;
const myString1 = 0 || "Diego" || undefined || null;
const myString2 = "" && "Diego" && "0" && "Hello"; //Returns the first falsy element
console.log(myNumber1);
console.log(myNUmber2);
console.log(myString1);
console.log(myString2);
