"use strict";

/*
An expression is a phrase of JavaScript that can be evaluated to produce a value.
Primary expressions in JavaScript are constant or literal values, certain language keywords, and variable references.
*/

//Literals are constant values that are embedded directly in the program.
console.log(123); //Number literal
console.log("Hello"); //String literal
console.log(/pattern/); //Regular expression literal
console.log();

//Some of JavaScript’s reserved words are primary expressions
console.log(true); //Evalutes to the boolean true value
console.log(false); //Evaluates to the boolean false value
console.log(null); //Evaluates to the null value
console.log(this); //Evaluates to the "current" object
console.log();

//The third type of primary expression is a reference to a variable, constant, or property of the global object
const i = 10;
const sum = 1 + 2;

console.log(i); //Evaluates to the value of the variable i
console.log(sum); //Evaluates to the value of the variable sum
console.log(undefined); //The value of the "undefined" property of the global object
