"use strict";

//Before ES6
const square1 = {
    area: function () {
        return this.side * this.side;
    },
    side: 10,
};
console.log(square1.area());

//After ES6
const square2 = {
    area() {
        return this.side * this.side;
    },
    side: 10,
};
console.log(square2.area());
console.log();

const METHOD_NAME = "m";
const symbol = Symbol();

//Before ES6
const weirdMethods1 = {
    "method With Spaces": function (x) {
        return x + 1;
    },

    [METHOD_NAME]: function (x) {
        return x + 2;
    },

    [symbol]: function (x) {
        return x + 3;
    },
};

console.log(weirdMethods1["method With Spaces"](1));
console.log(weirdMethods1[METHOD_NAME](1));
console.log(weirdMethods1[symbol](1));
console.log();

//After ES6
const weirdMethods2 = {
    "method With Spaces"(x) {
        return x + 1;
    },

    [METHOD_NAME](x) {
        return x + 2;
    },

    [symbol](x) {
        return x + 3;
    },
};

console.log(weirdMethods2["method With Spaces"](1));
console.log(weirdMethods2[METHOD_NAME](1));
console.log(weirdMethods2[symbol](1));
