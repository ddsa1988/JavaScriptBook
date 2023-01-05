"use strict";

const letters = [..."Diego", , , ..."dos"];
console.log(letters);
console.log();

letters.forEach(function (value, index) {
    console.log(index, value);
});
console.log();

let uppercase = "";
letters.forEach((value) => (uppercase += value.toUpperCase()));
console.log(uppercase);
