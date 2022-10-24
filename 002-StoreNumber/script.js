"use strict";

const cost = document.querySelector("#cost");
let price, quantity, total;

price = 5;
quantity = 14;
total = price * quantity;

cost.textContent = "$" + total;
