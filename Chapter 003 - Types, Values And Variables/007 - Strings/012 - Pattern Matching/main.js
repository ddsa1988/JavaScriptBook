"use strict";

// /^HTML/ = Match the letters HTML at the start of a string

// /[1-9][0-9]*/ = Match a nonzero digit, followedd by any # of digits

// /\bjavascript\b/i = Match "javascript" as a word, caseinsensitive

const text = "testing: 1, 2, 3";
const pattern = /\d+/g;

console.log(pattern.test(text)); //Return true if finds a match
console.log(text.search(pattern)); //Returns the position of the first match
console.log(text.match(pattern)); //Return an array with all matches
console.log(text.replace(pattern, "#"));
console.log(text.split(/\D+/)); //Split on nondigits
