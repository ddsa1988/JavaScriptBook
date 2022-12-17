"use strict";

/*
The nullish coalescing (??) operator is a logical operator that returns
its right-hand side  operand when its left-hand side operand is null or 
undefined, and otherwise returns its left-hand side operand.
*/

const myNumber = undefined ?? null ?? 0;
const myChar = undefined ?? "" ?? null ?? 0;
console.log(myNumber);
console.log(myChar, " ***");
