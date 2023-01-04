"use strict";

const a = [100];
console.log(a);
console.log();

a.push(50, 40);
console.log(a);
console.log();

a.unshift(200, 300);
console.log(a);
console.log();

console.log(a.pop());
console.log(a);
console.log();

console.log(a.shift());
console.log(a);
console.log();

delete a[2];
console.log(a);
console.log();

console.log(a.splice(2, 1, 500));
console.log(a);
