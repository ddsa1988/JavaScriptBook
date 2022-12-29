"use strict";

const myArray = [[1, 100], 2, 3, 4, 5];
const myString1 = myArray.toString();
console.log(myString1);
console.log(typeof myString1);
console.log();

const myObj1 = { x: 1, y: 10, z: 500 };
const myString2 = myObj1.toString();
console.log(myString2);
console.log(typeof myString2);
console.log();

const myObj2 = {
    a: 25,
    b: 63,
    toString: function () {
        return `(${this.a}, ${this.b})`;
    },
};

console.log(String(myObj2));
