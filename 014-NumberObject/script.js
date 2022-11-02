"use strict";

const aInteger = 259;
const aFloat = 12.5978;
const aInfinite = Infinity;

console.log(aInteger);
console.log(aFloat);
console.log(aInfinite);

console.log("\n");

console.log(Number.isInteger(aInteger));
console.log(Number.isInteger(aFloat));
console.log(Number.isInteger(aInfinite));

console.log("\n");

console.log(Number.isFinite(aInteger));
console.log(Number.isFinite(aFloat));
console.log(Number.isFinite(aInfinite));

console.log("\n");

const myName = "Diego dos Santos Alexandre";

console.log(Number.isNaN(aInteger));
console.log(Number.isNaN(aFloat));
console.log(Number.isNaN(aInfinite));
console.log(Number.isNaN(0 / 0));

console.log("\n");

console.log(aFloat.toFixed(2));
console.log(aFloat.toPrecision(2));
console.log(aFloat.toString());
