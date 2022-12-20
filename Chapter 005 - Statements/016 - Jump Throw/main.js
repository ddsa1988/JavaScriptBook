"use strict";

/*
An exception is a signal that indicates that some sort of exceptional condition or error has occurred.
To throw an exception is to signal such an error or exceptional condition.
*/

const test = 6;

if (test === 5) {
    throw "New Error";
}

if (test === 6) {
    throw TypeError("Test!!!!");
}
