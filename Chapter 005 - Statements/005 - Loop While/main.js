"use strict";

let count = 10;
const arr = new Array();

while (count) {
    arr.push(count);
    count--;
}

console.log(...arr.sort((a, b) => a - b));
