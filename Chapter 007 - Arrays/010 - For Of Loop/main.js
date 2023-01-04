"use strict";

const letters = [..."Diego", , , ..."dos"];
console.log(letters);
console.log();

for (const value of letters) {
    console.log(value);
}
console.log();

for (const [index, value] of letters.entries()) {
    console.log(index, value);
}
