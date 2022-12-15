"use strict";

let [a, b] = [1, 2];
console.log(a);
console.log(b);
console.log();

[a, b] = [b, a];
console.log(a);
console.log(b);
console.log();

[a, b] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log();

[a, ...b] = [1, 2, 3, 4, 5];
console.log(a);
console.log(b);
console.log();

const myObj = {
    myName: "Diego",
    age: 33,
    height: 1.8,
    state: "married",
};

const [myName, age, ...rest] = Object.keys(myObj);
console.log(myName, age, rest);
