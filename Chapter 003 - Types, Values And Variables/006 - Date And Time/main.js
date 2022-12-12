"use strict";

const now = new Date();
const nowTimeStamp = Date.now();

console.log(now); //The current time as a Date object.
console.log(nowTimeStamp); //Timestamp that specifies the number of elapsed milliseconds since January 1, 1970.

console.log(now.getTime()); //Get timestamp that specifies the number of elapsed milliseconds since January 1, 1970.
console.log(now.toISOString()); //Convert to a string in standard format
