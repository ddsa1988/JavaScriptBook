"use strict";

//Reduce is from left-t-right

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const b = a.reduce((acc, value) => acc + value, 0); //Zero is the initial value of the accumulator [can be ommited]
console.log(b);
console.log();

const c = [..."Diego"];
console.log(c);

const d = c.reduce((acc, value) => acc + value, "Hello ");
console.log(d);
console.log();

//ReduceRight is from right-to-left
const e = c.reduceRight((acc, value) => acc + value, "Hello ");
console.log(e);
