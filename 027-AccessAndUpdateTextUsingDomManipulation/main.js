"use strict";

const newElement = document.createElement("li");
console.log(newElement);

const newText = document.createTextNode("quinoa");
console.log(newText);

newElement.appendChild(newText);
console.log(newElement);

const position = document.getElementsByTagName("ul")[0];
console.log(position);

position.appendChild(newElement);
