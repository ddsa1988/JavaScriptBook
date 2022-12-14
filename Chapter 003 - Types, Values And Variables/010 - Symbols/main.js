"use strict";

const myName = Symbol();
const symbol1 = Symbol("1,2,3");
const symbol2 = Symbol("1,2,3");

const myData = {
    myName: "Diego",
};

console.log(myData);
console.log(myName);
console.log(typeof myName);
console.log(symbol1);
console.log(symbol2);
console.log(symbol1 == symbol2);
console.log(symbol1 === symbol2);
