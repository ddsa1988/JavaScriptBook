"use strict";

const now = new Date();
const birthday = new Date(1988, 1, 22, 15, 45, 55);
console.log(now.getFullYear());
console.log(birthday.getMinutes());
console.log(birthday.toDateString());
console.log(birthday.toTimeString());
console.log();

console.log(Number(now)); //Time stamp miliseconds
console.log(Number(birthday));

console.log(Math.abs(now - birthday) / (1000 * 60 * 60 * 24) / 365); // 1000 (1 second), 60 (1 minute), 60 (1 hour), 24 (1 day), 365 (1 year)
