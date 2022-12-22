"use strict";

const myObj1 = Object.create({ x: 20, y: 10 }); //Inherits properties x and y.
console.log(myObj1);
console.log(myObj1.x);
console.log(myObj1.y);
console.log(myObj1.x + myObj1.y);

const myObj2 = Object.create(Object.prototype);
console.log(myObj2);
