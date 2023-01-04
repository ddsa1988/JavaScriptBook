"use strict";

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const submitButton = document.getElementById("submit-button");
const showDataButton = document.getElementById("show-data-button");

const data = new Array();

submitButton.addEventListener("click", function () {
    if (!firstName.value || !lastName.value) {
        console.log("Empty data!");
        return;
    }

    // const regex = new RegExp(/[\d\s]/);
    // console.log(regex.exec(firstName.value));

    const regex = /[\d\s]/;

    if (
        firstName.value.search(regex) > -1 ||
        lastName.value.search(regex) > -1
    ) {
        console.log("Invalid data!");
        return;
    }

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
