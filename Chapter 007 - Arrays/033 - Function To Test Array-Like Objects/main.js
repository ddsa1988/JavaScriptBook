"use strict";

function isArrayLike(arrayLike) {
    if (arrayLike === null || arrayLike === undefined) return false;
    if (typeof arrayLike !== "object") return false;
    if (arrayLike.length < 0) return false;
    if (
        !Number.isInteger(arrayLike.length) ||
        !Number.isFinite(arrayLike.length)
    )
        return false;
    if (arrayLike.length >= 4294967295) return false;

    return true;
}

const myObj1 = {
    1: "Test1",
    2: "Test2",
    3: "Test3",
    length: 3,
};

console.log(myObj1);
console.log();

console.log(isArrayLike(myObj1));
console.log(isArrayLike(..."Diego"));
console.log(isArrayLike(5));
