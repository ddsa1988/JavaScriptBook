"use strict";

/*
Conditional Invocation:

function name ?. identifier
*/

const myObj = {
    firstName: "Diego",
    sum: function (a, b) {
        return a + b;
    },
};

console.log(myObj.sum?.(2, 5));
console.log(myObj["sum"]?.(2, 5));
console.log(myObj.add?.(2, 10));
console.log(myObj["add"]?.(2, 10));
