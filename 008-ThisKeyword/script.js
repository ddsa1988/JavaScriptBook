"use strict";

{
    console.log("The This keyword in the block scope: ");
    const diego = "Diego";
    console.log(this);
}
console.log("\n");

console.log("The This keyword in the global scope: ");
console.log(this);
console.log("\n");

function Sum(a, b) {
    console.log(this);
    return a + b;
}
console.log("The This keyword in the function declaration scope: ");
console.log(Sum(1, 2));
console.log("\n");

const Add = function (a, b) {
    console.log(this);
    return a + b;
};
console.log("The This keyword in the function expression scope: ");
console.log(Add(1, 2));
console.log("\n");

const Sub = (a, b) => {
    console.log(this);
    return a - b;
};
console.log("The This keyword in the arrow function scope: ");
console.log(Sub(1, 2));
console.log("\n");

const diego = {
    fullName: "Diego",
    birthyear: 1988,

    showThis: function () {
        console.log(this);
    },
};
console.log("The This keyword in the object scope: ");
diego.showThis();
