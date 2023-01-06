"use strict";

/*
The every() method is like the mathematical “for all” quantifier ∀:
it returns true if and only if your predicate function returns true for
all elements in the array
*/

const a = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(a);
console.log();

const b = a.every((value) => value > 5);
console.log(b);

/*
The some() method is like the mathematical “there exists” quantifier
∃: it returns true if there exists at least one element in the array for
which the predicate returns true and returns false if and only if the
predicate returns false for all elements of the array
*/

const c = a.some((value) => value > 5);
console.log(c);
