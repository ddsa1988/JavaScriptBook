"use strict";

//splice() is a general-purpose method for inserting or removing elements from an array.
let a = [100, 200, 300, 400, 500, 600, 700, 800];
let b = a.splice(4); //Splice return the deleted elements
console.log(a);
console.log(b);
console.log();

a = [100, 200, 300, 400, 500, 600, 700, 800];
b = a.splice(1, 4);
console.log(a);
console.log(b);
console.log();

a = [100, 200, 300, 400, 500, 600, 700, 800];
b = a.splice(5, 0, 599); //At position 5. Delete 0 elements and insert the value 599
console.log(a);
console.log(b);
console.log();

a = [100, 200, 300, 400, 500, 600, 700, 800];
b = a.splice(5, 2, 599); //At position 5. Delete 2 elements and insert the value 599
console.log(a);
console.log(b);
