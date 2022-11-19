"use strict";

const firstItem = document.getElementById("one");
console.log(firstItem);

console.log(firstItem.hasAttribute("class"));

const attribute = firstItem.getAttribute("class");
console.log(attribute);

firstItem.removeAttribute("class");
console.log(firstItem.hasAttribute("class"));

firstItem.className = "test1";
firstItem.setAttribute("class", "cool");
