"use strict";

let msg1 = "Hellow World!";
let msg2 = msg1.substring(1, 5);
console.log("Substring method:");
console.log(msg1);
console.log(msg2);
console.log();

msg1 = "Hellow World!";
msg2 = msg1.slice(1, 5);
console.log("Slice method:");
console.log(msg1);
console.log(msg2);
console.log();

msg1 = "Hellow World!";
msg2 = msg1.split(" ");
console.log("Split method:");
console.log(msg1);
console.log(msg2);
console.log();
