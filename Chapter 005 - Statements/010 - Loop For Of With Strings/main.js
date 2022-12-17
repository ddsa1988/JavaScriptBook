"use strict";

const word = "mississippi";
const count = {};

for (const char of word) {
    if (count[char]) {
        count[char]++;
    } else {
        count[char] = 1;
    }
}

console.log(count);
