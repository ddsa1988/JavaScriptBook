"use strict";

const one1 = document.getElementById("one");
console.log(one1);
console.log("\n");

console.log("Original Class Name: " + one1.className);

one1.className = "cool";
console.log("After Change The Class Name: " + one1.className);
console.log("\n");

const one2 = document.querySelector("#three");
console.log(one2);
