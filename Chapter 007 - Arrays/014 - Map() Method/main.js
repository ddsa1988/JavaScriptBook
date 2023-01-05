"use strict";

/*
The map() method passes each element of the array on which it is
invoked to the function you specify and returns an array containing the
values returned by your function.
*/

const a = [1, 2, 3, 4, 5];
console.log(a);

const b = a.map((value) => value * 2);
console.log(b);
console.log();

const c = [..."diego", , , "a"];
console.log(c);

const d = c.map((value) => value.toUpperCase());
console.log(d);
