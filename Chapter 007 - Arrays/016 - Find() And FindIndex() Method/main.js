"use strict";

/*
These methods are like filter. However, these two methods stop 
iterating the first time the predicate finds an element. 
When that happens, find() returns the matching element,
and findIndex() returns the index of the matching element.
*/

const a = [..."HELLO WORLD"];
console.log(a);
console.log();

const b = a.find((value) => value === "L");
console.log(b);

const c = a.findIndex((value) => value === "L");
console.log(c);
