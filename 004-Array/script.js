"use strict";

const colors = ["white", "blue", "brown"];
console.log(colors);
console.log(colors.length);

colors.push("black");
console.log(colors);
console.log(colors.length);

colors.unshift("yellow");
console.log(colors);
console.log(colors.length);

console.log("\n");

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log("\n");

colors.forEach((element, index) => {
    console.log(`[${index}] ${element}`);
});
