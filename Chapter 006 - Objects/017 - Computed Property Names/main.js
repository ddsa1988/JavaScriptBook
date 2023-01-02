"use strict";

const PROPERTY_NAME = "p1";
const computePropertyName = () => "p" + 2;

//Before ES6
const myObj1 = {};
myObj1[PROPERTY_NAME] = 1;
myObj1[computePropertyName()] = 2;
console.log(myObj1);
console.log();

//After ES6
const myObj2 = {
    [PROPERTY_NAME]: 1,
    [computePropertyName()]: 2,
};
console.log(myObj2);
