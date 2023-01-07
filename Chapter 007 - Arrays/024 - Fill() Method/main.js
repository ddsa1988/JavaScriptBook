"use strict";

let a = new Array(5);
let b = a.fill(0);
console.log(a);
console.log(b);
console.log();

b = a.fill(9, 1, 4);
console.log(a);
console.log(b);
console.log();

b = a.fill(7, 2, -1);
console.log(a);
console.log(b);
