"use strict";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

for (const value of arr) {
    sum += value;
}

console.log(sum);
console.log(
    arr.reduce((accumulator, currentValue) => accumulator + currentValue, 10) //10 is the initial value for the accumulator, if ommited it's zero
);
