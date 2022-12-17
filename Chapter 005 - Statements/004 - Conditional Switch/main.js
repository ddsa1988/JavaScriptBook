"use strict";

const random = Math.floor(Math.random() * 10 + 1);

switch (random) {
    case 1:
        console.log(random);
        break;

    case (2, 3, 4, 5):
        console.log(random);
        break;
    case (6, 7, 8): //Without the break statement the code continues its execution
        console.log(random);
    default:
        console.log("Default");
        break;
}
console.log();

function convert(a) {
    switch (typeof a) {
        case "number":
            return a.toString(16); //Convert the number to a hexadecimal integer

        case "string":
            return '"' + a + '"'; //Return the string enclosed in quotes

        default:
            return String(a); //Convert any other type in the usual way
    }
}

console.log(convert(255));
console.log(convert("diego"));
console.log([1, 2, 3]);
