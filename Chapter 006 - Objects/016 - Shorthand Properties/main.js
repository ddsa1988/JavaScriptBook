"use strict";

const x = 3;
const y = 5;

//Before ES6
const myObj1 = {
    x: x,
    y: y,
};
console.log(myObj1);
console.log();

//After ES6
const myObj2 = { x, y };
console.log(myObj2);
