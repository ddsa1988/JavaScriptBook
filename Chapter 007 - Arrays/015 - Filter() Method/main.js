"use strict";

/*
The filter() method returns an array containing a subset of the
elements of the array on which it is invoked. The function you pass to
it should be predicate: a function that returns true or false
*/

const a = [1, 2, 3, , , 4, 5];
console.log(a);

const b = a.filter((value) => value > 3);
console.log(b);
console.log();

const c = ["diego", , , null, "Amanda", undefined, "Rodrigo"];

const d = c.filter((value) => value !== null && value !== undefined);
console.log(d);
