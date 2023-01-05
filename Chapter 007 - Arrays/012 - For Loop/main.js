"use strict";

const letters = [..."Diego", , , ..."dos"];
console.log(letters);
console.log();

for (let i = 0; i < letters.length; i++) {
    console.log(letters[i]);
}
console.log();

for (let i = 0; i < letters.length; i++) {
    if (letters[i] === undefined || letters[i] === null) continue;
    console.log(letters[i]);
}
console.log();

for (let i = letters.length; i >= 0; i--) {
    if (letters[i] === undefined || letters[i] === null) continue;
    console.log(letters[i]);
}
