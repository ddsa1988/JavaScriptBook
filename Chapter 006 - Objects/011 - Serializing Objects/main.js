"use strict";

const data = {
    x: 1,
    y: 100,
    z: [false, null, "", undefined],
};

console.log("Original Object: \n", data);
console.log();

const dataJson1 = JSON.stringify(data);
console.log("Converted to JSON \n", dataJson1);
console.log(typeof dataJson1);

const dataJson2 = JSON.parse(dataJson1);
console.log("Coverted from JSON \n", dataJson2);
console.log(typeof dataJson2);
