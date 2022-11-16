"use strict";

const itemTwo = document.getElementById("two");
const itemTwoValue = itemTwo.firstChild.nodeValue;

console.log(itemTwo);
console.log(itemTwoValue);

itemTwo.firstChild.nodeValue = itemTwoValue.replace("pine nuts", "orange");
