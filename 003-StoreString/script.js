"use strict";

let username;
let message;

username = "Molly";
message = "See our upcoming range";

let elName = document.querySelector("#name");
let elNote = document.querySelector("#note");

console.log(elName.textContent);

elName.textContent = username;
elNote.textContent = message;
