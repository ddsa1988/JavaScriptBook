"use strict";

const text = "Na na na na na na na na Batman!";
const wordSet = new Set(text.split(" "));
console.log(wordSet);
console.log();

for (const word of wordSet) {
    console.log(word);
}
