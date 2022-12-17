"use strict";

/*
Property access expressions:

expression ?. identifier
expression ?.[ expression ]
*/

let myObj = {
    a: null,
};

//console.log(myObj.a.b); Type Error => Cannot read properties of null
console.log(myObj.a?.b); // Gets undefined if the property doesn't exist

myObj = {
    a: {
        b: "diego",
    },
};

console.log(myObj.a?.b); //Gets "diego"
console.log(myObj["a"]?.["b"]);
console.log(myObj.a?.c); //Gets undefined
console.log(myObj["a"]?.["c"]);
console.log();

let a;
let index = 0;

try {
    console.log(a[index++]); // Throws TypeError
} catch (error) {
    console.log(index); //1: increment occurs before TypeError is thrown
}

console.log(a?.[index++]); //undefined: because a is undefined
console.log(index); //1: not incremented because ?.[] shortcircuits
