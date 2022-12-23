"use strict";

/*
The delete operator only deletes own properties, not inherited ones. (To delete an inherited property, 
you must delete it from the prototype object in which it is defined. Doing this affects every object 
that inherits from that prototype.)
*/

//Delete Object Property
const data = {
    firstName: "diego",
    lastName: "alexandre",
    birthyear: 1988,
    test1: "test1",
    test2: "test2",
};

console.log(data);

delete data.test1;
delete data["test2"];

console.log(data);
console.log();

//Delete Gobal Object Property
globalThis.test1 = "Test1";
console.log(globalThis.test1);
console.log(globalThis);

// delete globalThis.test1;
// console.log(globalThis.test1);
