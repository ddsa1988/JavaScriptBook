"use strict";

//Slice returns a slice or subarray and doesn't modify the source array
const a = [100, 200, 300, 400, 500];

const b = a.slice(0, 3);
const c = a.slice(3);
const d = a.slice(0, -1);
const e = a.slice(-5, -2);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
