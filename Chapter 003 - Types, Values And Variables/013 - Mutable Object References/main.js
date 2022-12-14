"use strict";

/*
Reference types: object and array.
Reference types are mutable. You can change their values and size. You compare them by refernce.
*/

const myArray1 = [1, 2, 3];
const myArray2 = [1, 2, 3];

console.log(myArray1 === myArray2); //False becasue the two variables points to diferrent references

const a = [1, 2, 3];
const b = a;

console.log(a === b); //True becasue the two variables points to the same reference

a.push(250);
console.log(a);
console.log(b);
