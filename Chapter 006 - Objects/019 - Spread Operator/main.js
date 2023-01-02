"use strict";

const position = {
    x: 0,
    y: 1,
};

const dimension = {
    width: 100,
    height: 75,
};

const rectangle = { ...position, ...dimension };
console.log(rectangle);
console.log();

const a = { x: 1 };

const myObj1 = { x: 10, ...a };
console.log(myObj1);

const myObj2 = { ...a, x: 10 };
console.log(myObj2);
console.log();

const b = Object.create({ x: 1 });
console.log(b);

console.log(b.__proto__);
const myObj3 = { ...b.__proto__ };
console.log(myObj3);
