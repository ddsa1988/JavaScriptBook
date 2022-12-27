"use strict";

/*
To check whether an object has a property with a given name. You can do this with the
in operator, with the hasOwnProperty() and propertyIsEnumerable() methods,
*/

/*
The in operator expects a property name on its left side and an object on its right. 
It returns true if the object has an own property or an inherited property by that name:
*/
const myData = {
    firstName: "Diego",
    lastName: "Alexandre",
    birthyear: 1988,
};

console.log("firstName" in myData);
console.log("lastName" in myData);
console.log("LastName" in myData);
console.log("toString" in myData); //True: o inherits a toString property
console.log();

/*The hasOwnProperty() method of an object tests whether that object has an own property 
with the given name. It returns false for inherited properties:
*/
console.log(myData.hasOwnProperty("firstName"));
console.log(myData.hasOwnProperty("lastName"));
console.log(myData.hasOwnProperty("LastName"));
console.log(myData.hasOwnProperty("toString")); //False: o inherits a toString property
console.log();
