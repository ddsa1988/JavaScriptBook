"use strict";

const language = {
    set current(name) {
        this.log.push(name);
    },

    get current() {
        return this.log;
    },

    log: [],
};

console.log(language);
language.current = "EN";
language.current = "FA";
console.log(language);
console.log(language.current);
console.log();

const myObj1 = {
    set dataProperty(data) {
        this.property = data;
    },

    get dataProperty() {
        return this.property;
    },

    property: null,
};

console.log(myObj1);
myObj1.dataProperty = "Diego";
console.log(myObj1);
console.log(myObj1.dataProperty);
console.log();

const myObj2 = {
    _myNumber: 0, //The _ in the property name hints that it is for internal use only

    set myNumber(number) {
        this._myNumber = number;
    },

    get myNumber() {
        return this._myNumber;
    },
};

myObj2.myNumber = 259;
console.log(myObj2);
console.log(myObj2.myNumber);
