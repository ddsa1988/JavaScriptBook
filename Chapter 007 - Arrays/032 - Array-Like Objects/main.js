"use strict";

/*
These are the features that make JavaScript arrays distinct from regular objects. 
But they are not the essential features that define an array. It is often perfectly 
reasonable to treat any object with a numeric length property and corresponding 
non-negative integer properties as a kind of array.
*/

const myObj = new Object();
console.log(myObj);

let i = 0;

while (i < 10) {
    myObj[i] = i * i;
    i++;
}
myObj.length = i;

console.log(myObj);
console.log();

for (let i = 0; i < myObj.length; i++) {
    console.log(myObj[i]);
}
