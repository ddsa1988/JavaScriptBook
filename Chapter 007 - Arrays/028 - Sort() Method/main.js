"use strict";

//The sort method convert to string and then sorts
const myArray1 = ["rodrigo", "tainara", "diego", "amanda", "ivanice"];
myArray1.sort();
console.log(myArray1);
console.log();

//Sorts a numeric array in an alphabetical order
const myArray2 = [100, 10, 2, -1, 300, 50, 35, 200];
myArray2.sort();
console.log(myArray2);
console.log();

//Sorts a numeric array in a ascending order
const myArray3 = [100, 10, 2, -1, 300, 50, 35, 200];
myArray3.sort((a, b) => a - b);
console.log(myArray3);
console.log();

//Sorts a numeric array in a descending order
const myArray4 = [100, 10, 2, -1, 300, 50, 35, 200];
myArray4.sort((a, b) => b - a);
console.log(myArray4);
console.log();
