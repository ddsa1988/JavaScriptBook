"use strict";

const data = {
    firstName: "Diego",
    lastName: "Alexandre",
    birthYear: 1988,
    age: function (year) {
        return year - this.birthYear;
    },
};

console.log(Object.keys(data)); //Returns an array with the keys of the object
console.log(Object.values(data)); ////Returns an array with the values of the object
console.log(Object.entries(data)); //Returns an array of arrays with the keys and values of the object
console.log();

for (const key of Object.keys(data)) {
    console.log(key);
}

console.log();

for (const [key, value] of Object.entries(data)) {
    console.log(`Key: ${key} - Value: ${value}`);
}
