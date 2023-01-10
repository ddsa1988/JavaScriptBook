"use strict";

const a = [100, 200, 300, 400, 100, 200, 300, 400];
console.log(a);
console.log();

console.log(a.indexOf(200)); //Search for the index from the beginning of the array
console.log(a.lastIndexOf(200)); //Search for the index from the end of the array
console.log(a.indexOf(600)); //Return -1 if no index is found
console.log();

//Search all indexes from a specific number from the start to the end
let myNumber = 400;
let position = 0;

while (position < a.length) {
    position = a.indexOf(myNumber, position);

    if (position === -1) break;
    console.log(position);
    position++;
}
console.log();

//Search all indexes from a specific number from the end to the start
myNumber = 100;
position = a.length - 1;

while (position >= 0) {
    position = a.lastIndexOf(myNumber, position);

    if (position === -1) break;
    console.log(position);
    position--;
}
