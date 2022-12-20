"use strict";

try {
    throw TypeError("Type Error!!!");
} catch (error) {
    console.log("Catch");
} finally {
    console.log("Finally"); //Finlally is always executed
}

console.log();

try {
    throw TypeError("Type Error!!!");
} catch (error) {
    console.log("Catch");
    return;
} finally {
    console.log("Finally"); //Finally is always executed
}

console.log("Test");
