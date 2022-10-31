"use strict";

function Obj(room, food, phone) {
    this.room = room;
    this.food = food;
    this.phone = phone;
}

console.log(Obj.prototype);

const costs = [
    new Obj(420, 40, 10),
    new Obj(460, 20, 5),
    new Obj(230, 15, 95),
    new Obj(620, 150, 60),
];

console.log(costs);
console.log(costs[0].phone);
console.log("\n");

costs.forEach(function (element) {
    for (const [key, value] of Object.entries(element)) {
        console.log(`Key: ${key} - Value: ${value}`);
    }
    console.log("\n");
});
