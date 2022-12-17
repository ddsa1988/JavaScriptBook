"use strict";

const myMap = new Map([[1, "one"]]);
console.log(myMap);
console.log();

for (const [key, value] of myMap) {
    console.log(`Key: ${key} - Value: ${value}`);
}
