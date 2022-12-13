"use strict";

const msg1 = "     Hello World!     ";
let msg2 = msg1.trimStart(); //Remove spaces at start

console.log(msg1 + "*****");
console.log(msg2 + "*****");
console.log();

msg2 = msg1.trimEnd(); //Remove spaces at end
console.log(msg1 + "*****");
console.log(msg2 + "*****");
console.log();

msg2 = msg1.trim(); //remove spaces at start and end
console.log(msg1 + "*****");
console.log(msg2 + "*****");
