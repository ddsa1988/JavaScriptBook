"use strict";

const a = [1, true, 3, NaN, undefined];

console.log(a.includes(3));
console.log(a.includes(100));
console.log(a.includes(NaN));
console.log(a.includes(undefined));
console.log();

console.log(a.indexOf(NaN));
console.log(a.indexOf(undefined));
