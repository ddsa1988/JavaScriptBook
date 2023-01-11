"use strict";

const myArray = [..."Diego Alexandre"];
console.log(myArray);
console.log();
console.log(myArray.toString());
console.log(myArray.toString().replaceAll(",", ""));
console.log();

const myNumbers = [1, [2, 3], [4, [5, 6]]];
console.log(myNumbers);
console.log(myNumbers.toString());
console.log(myNumbers.toString().split(","));
