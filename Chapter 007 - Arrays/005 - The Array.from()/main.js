"use strict";

const original = [1, 2, 3];
const copy = Array.from(original);

copy.push(100);
console.log(original);
console.log(copy);
console.log();

const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const b = Array.from(a, (x) => x * 10); //If you pass the second argument the Array.from() works like the map method

console.log(b);
console.log();

const c = Array.from(a, function (x) {
    return x * 100;
});

console.log(c);
