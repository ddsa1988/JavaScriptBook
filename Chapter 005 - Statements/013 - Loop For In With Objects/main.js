"use strict";

//The for/in statement loops through the property names of a specified object.

const data = {
    firstName: "Diego",
    lastName: "Alexandre",
    birthYear: 1988,
    age: function (year) {
        return year - this.birthYear;
    },
};

for (const key in data) {
    console.log(`Key: ${key} - Value: ${data[key]}`);
}
console.log();

//Copy the names of all object properties into an array:
const arr = new Array();
let i = 0;

for (arr[i++] in data); //Empty
console.log(arr);
