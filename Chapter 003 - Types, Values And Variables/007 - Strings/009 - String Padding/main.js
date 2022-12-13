"use strict";

const msg1 = "Hello World!";
let msg2 = msg1.padStart(msg1.length * 2); //Add spaces on the left to a specified length

console.log(msg1);
console.log(msg2);
console.log();

msg2 = msg1.padEnd(msg1.length * 2) + "*****"; //Add spaces on the right to a specified length
console.log(msg1);
console.log(msg2);
console.log();

msg2 = msg1.padStart(msg1.length * 2, "$");
console.log(msg2);
console.log();

msg2 = msg1.padEnd(msg1.length * 2, "&");
console.log(msg2);
console.log();
