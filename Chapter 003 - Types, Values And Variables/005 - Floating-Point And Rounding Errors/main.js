"use strict";

/*Floating-point representation used by JavaScript (and
just about every other modern programming language) is a binary
representation, which can exactly represent fractions like 1/2, 1/8,
and 1/1024.*/

console.log(0.3 - 0.2);
console.log(0.2 - 0.1);
console.log(1.0 - 0.9);
console.log(100.0 - 99.9);
console.log(1000.0 - 999.9);
console.log();

console.log(Number.parseFloat(0.3 - 0.2).toFixed(1));
console.log(Number.parseFloat(1000.0 - 999.9).toFixed(1));
