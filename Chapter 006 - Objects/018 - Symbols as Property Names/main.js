"use strict";

const extension = Symbol("my extension symbol");
console.log(extension);

const extension1 = Symbol("my extension symbol");
console.log(extension1);

console.log(extension == extension1);
console.log();

const myObj = {
    [extension]: {},
    [extension1]: {},
};

console.log(myObj);
myObj[extension].x = 10;
myObj[extension1].x = 20;
console.log(myObj);
console.log();

console.log(Object.getOwnPropertySymbols(myObj));
console.log();

const [a, b] = [...Object.getOwnPropertySymbols(myObj)];

console.log(a === extension);
console.log(b === extension1);
