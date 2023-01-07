"use strict";

let a = [100, 200, 300, 400, 500];
console.log(a);
console.log();

let b = a.copyWithin(1);
console.log(a);
console.log(b);
console.log();

a = [100, 200, 300, 400, 500];
b = a.copyWithin(2, 3, 5);
console.log(a);
console.log(b);
console.log();

a = [100, 200, 300, 400, 500];
b = a.copyWithin(0, -2);
console.log(a);
console.log(b);
