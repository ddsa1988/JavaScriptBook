"use strict";

const msg1 = "Hellow World!";

console.log(msg1.charAt(0)); //The first character
console.log(msg1.charAt(msg1.length - 1)); //The last character
console.log(msg1.charCodeAt(0)); //Returns ASCII decimal value of "H" [Returns a value between 0 and 65535]
console.log(msg1.charCodeAt(1)); //Returns ASCII decimal value of "e"
console.log(msg1.codePointAt(1)); //It's the same as charCodeAt, but can return values greather than 65535
