"use strict";

//Function Declaration
function area(width, height) {
    return width * height;
}

console.log(area(2, 5));
console.log();

//Function Expression
const sum = function (a, b) {
    return a + b;
};

console.log(sum(2, 5));
console.log();

//Arrow Function
const sub = (a, b) => a - b;
console.log(sub(28, 3));
console.log();

//Immediately Invoked Function Expression
const msg = (function () {
    return "This function is executed one time only.";
})();

console.log(msg);
