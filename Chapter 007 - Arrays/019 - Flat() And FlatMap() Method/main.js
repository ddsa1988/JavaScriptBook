"use stric";

const a = [1, [2, [3, [4]]]];

console.log(a);
console.log(a.flat(1));
console.log(a.flat(2));
console.log(a.flat(3));
console.log(a.flat(4));
console.log();

const b = [1, [2, 3], [4, 5]];

const c = b.flat(Infinity).map((value) => value * 2);
console.log(c);
console.log();

const d = [1, [2], [3], 4, 5];

const e = d.flatMap((value) => value * 2);
console.log(e);
