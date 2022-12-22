"use strict";

function getObjectValue1(obj, value) {
    console.log(obj?.[value]);
}

function getObjectValue2(obj) {
    for (let i = 0; i < Object.keys(obj).length; i++) {
        console.log(obj?.[`day${i}`]);
    }
}

const myObj1 = {
    firstName: "diego",
    lastName: "Alexandre",
    birthyear: "1988",
};

getObjectValue1(myObj1, "firstName");
getObjectValue1(myObj1, "birthyear");
getObjectValue1(myObj1, "name");
console.log();

const myObj2 = {
    day0: "Sunday",
    day1: "Monday",
    day2: "Tuesday",
    day3: "Wednesday",
    day4: "Thurdays",
    day5: "Friday",
    day6: "Saturday",
};

getObjectValue2(myObj2);
