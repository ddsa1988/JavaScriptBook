"use strict";

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const submitButton = document.getElementById("submit-button");
const showDataButton = document.getElementById("show-data-button");

const data = new Array();

submitButton.addEventListener("click", function () {
    if (!firstName.value || !lastName.value) return;

    const myObj = {
        firstName: firstName.value,
        lastName: lastName.value,
    };

    firstName.value = "";
    lastName.value = "";

    data.push(myObj);
    // console.log(data);
});

showDataButton.addEventListener("click", function () {
    if (!data.length) return;

    console.log(data);
});
