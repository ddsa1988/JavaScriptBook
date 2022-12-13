"use strict";

const msg1 = "Hellow World!";

console.log(msg1.indexOf("l")); //Return the first index of the substring in the string
console.log(msg1.indexOf("l", 3)); //Return the first index of the substring in the string starting from the index 3
console.log(msg1.indexOf("a")); //Return -1 is when doesn't find the substring in the string
console.log(msg1.lastIndexOf("l")); //Return the last index of the substring in the string
console.log();

function countChar(msg, char) {
    if (typeof msg !== "string") throw TypeError("Parameter must be a string");
    if (typeof char !== "string" || char.length !== 1)
        throw TypeError("Parameter must be a char with length of 1");

    let index = 0;
    let count = 0;

    while (msg.indexOf(char, index) !== -1) {
        index = msg.indexOf(char, index) + 1;
        count++;
    }
    return count;
}

console.log(countChar(msg1, "l"));
console.log(countChar(msg1, "o"));
console.log(countChar(msg1, "A"));
console.log(countChar(msg1, "e"));
