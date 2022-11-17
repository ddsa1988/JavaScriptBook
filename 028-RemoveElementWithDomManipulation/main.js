"use strict";

const removeElement = document.getElementsByTagName("li")[3];
console.log(removeElement);

const containerElement = removeElement.parentNode;
console.log(containerElement);

containerElement.removeChild(removeElement);
