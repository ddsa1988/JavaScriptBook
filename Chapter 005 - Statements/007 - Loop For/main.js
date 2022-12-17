"use strict";

const arr = new Array();

for (let i = 10; i > 0; i--) {
    arr.push(i);
}

console.log(...arr.sort((a, b) => a - b));
console.log();

let i,
    j,
    sum = 0;

for (i = 0, j = 10; i < 10; i++, j--) {
    sum += i * j;
}

console.log(sum);
