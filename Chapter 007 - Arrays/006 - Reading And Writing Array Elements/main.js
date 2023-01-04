"use strict";

const a = ["world"];
console.log(a);
console.log(a[0]);
console.log(a[10]);

a[1] = "Diego";
console.log(a);

const b = 2;
a[b] = 250;
console.log(a);
console.log(a.length);
console.log();

const c = ["New York", "Curitiba", "João Pessoa"];
a.push(c);
console.log(a);
console.log();

const d = [...a, ...c];
console.log(d);
