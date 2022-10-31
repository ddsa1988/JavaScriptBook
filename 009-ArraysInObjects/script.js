"use strict";

const costs = {
    room1: [420, 40, 10],
    room2: [460, 20, 5],
    room3: [230, 15, 95],
    room4: [620, 150, 60],
};

console.log(costs);
console.log(costs.room3[0]);

console.log("\n");

for (const [key, value] of Object.entries(costs)) {
    value.forEach(function (element) {
        console.log(`Key: ${key} - Value: ${element}`);
    });
    console.log("\n");
}
