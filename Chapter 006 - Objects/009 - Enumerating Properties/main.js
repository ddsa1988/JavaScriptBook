"use strict";

const person = {
    firstName: "",
    lastName: "",
    birthyear: "",
};

const diego = Object.create(person);
diego.id = "";
diego.country = "";

/*
The for/in loop runs the body of the loop once for  each 
enumerable property (own or inherited) of the specified object
*/
for (const key in diego) {
    console.log(key, diego.hasOwnProperty(key));
}

console.log();

/*
Object.keys() returns an array of the names of the enumerable own properties of an object. It does not include
non-enumerable properties, inherited properties, or properties whose name is a Symbol
*/
console.log(Object.keys(diego));

/*
Object.getOwnPropertyNames() works like Object.keys() but returns an array of the names of nonenumerable
own properties as well, as long as their names are strings.
*/
console.log(Object.getOwnPropertyNames(diego));

/*
Object.getOwnPropertySymbols() returns own properties whose names are Symbols, whether or not they are
enumerable.
*/
console.log(Object.getOwnPropertySymbols(diego));

/*
Reflect.ownKeys() returns all own property names, both enumerable and non-enumerable, and both string and Symbol.
*/
console.log(Reflect.ownKeys(diego));
