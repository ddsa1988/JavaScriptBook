"use strict";

/*
JavaScript does not support true multidimensional arrays, but you can
approximate them with arrays of arrays. To access a value in an array
of arrays, simply use the [] operator twice.
*/

//Create a multidimensional array
const table = new Array(5);

for (let i = 0; i < table.length; i++) {
    table[i] = new Array(5);
}
console.log(table);
console.log();

//Initialize the array
for (let row = 0; row < table.length; row++) {
    for (let col = 0; col < table[row].length; col++) {
        table[row][col] = row * col;
    }
}
console.log(table);
console.log();
