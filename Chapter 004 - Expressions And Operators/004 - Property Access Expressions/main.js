"use strict";

/*
JavaScript defines two syntaxes for property access:

expression . identifier
expression [ expression ]

The values null and undefined don't have properties. If you try it JavaScript throw a TypeError

*/

const myArray = [10, 20, 30, 40, 50];

const myObj = {
    firstName: "Diego",
    lastNmae: "Alexandre",
    birthday: "22/01/1988",
};

console.log(myArray[2]);
console.log(myArray["2"]);
console.log();

console.log(myObj.firstName);
console.log(myObj["firstName"]);
console.log(myObj["firstname"]);
