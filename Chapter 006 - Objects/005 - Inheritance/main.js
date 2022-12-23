"use strict";

const person = {
    firsName: "",
    lastName: "",
    birthYear: "",
};
console.log("person object: ", person);
console.log();

const diego = Object.create(person);
console.log("diego object: ", diego);

const amanda = Object.create(person);
console.log("amanda object: ", amanda);
console.log();

diego.firsName = "Diego";
diego.lastName = "Alexandre";
diego.id = 123;
diego.birthYear = 1988;

amanda.firsName = "Amanda";
amanda.lastName = "Perna";
amanda.number = 347;
amanda.birthYear = 1993;

console.log("person object: ", person);
console.log("diego object: ", diego);
console.log("amanda object: ", amanda);
