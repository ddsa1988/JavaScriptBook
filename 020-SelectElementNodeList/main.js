"use strict";

const h1 = document.getElementsByTagName("h1");
const li = document.getElementsByTagName("li");
const hot = document.getElementsByClassName("hot");
const id = document.querySelectorAll("li[id]");

console.log("Node List header h1: ");
console.log(h1);
console.log("Length: " + h1.length);

for (const value of Object.values(h1)) {
    console.log(value);
}

console.log("\n");

console.log("Node List Item li: ");
console.log(li);
console.log("Length: " + li.length);

for (const value of Object.values(li)) {
    console.log(value);
}
console.log("\n");

console.log("Node List Class hot: ");
console.log(hot);
console.log("Length: " + hot.length);

for (const value of Object.values(hot)) {
    console.log(value);
}
console.log("\n");

console.log("Node List Id: ");
console.log(id);
console.log("Length: " + id.length);

for (const value of Object.values(id)) {
    console.log(value);
}
