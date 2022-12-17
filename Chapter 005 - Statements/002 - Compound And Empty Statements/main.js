"use strict";

//A compound statement allows you to use multiple statements where JavaScript syntax expects a single statement.

{
    const a = 10;
    let b = 20;
    console.log(a + b);
}

try {
    console.log(a + b);
} catch (error) {
    console.log("Const and let variables are block scope.");
}
console.log();

//The empty statement allows you to include no statements where one is expected.

const myArray = new Array(10);
console.log(myArray);

//Initialize an array
for (let i = 0; i < myArray.length; myArray[i++] = 0); //empty
console.log(myArray);
