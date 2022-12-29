"use strict";

//Copy the properties of one object to another object. Overrride the existing properties

let target = { x: 1 };
let source = { y: 10, z: 20 };

for (const key of Object.keys(source)) {
    target[key] = source[key];
}
console.log("Source ", source);
console.log("Target ", target);
console.log();

target = { x: 1 };
source = { y: 10, z: 20 };

target = Object.assign(target, source);
console.log("Source ", source);
console.log("Target ", target);
console.log();

target = { x: 1 };
source = { x: 5, y: 10, z: 20 };

target = Object.assign(target, source);
console.log("Source ", source);
console.log("Target ", target);
console.log();

/*To avoid overriding the target properties, we create a new object, copy the defaults into it, 
and then override those defaults with the properties*/
target = { x: 1 };
source = { x: 5, y: 10, z: 20 };

target = Object.assign({}, source, target);
console.log("Source ", source);
console.log("Target ", target);
console.log();

target = { x: 1 };
source = { x: 5, y: 10, z: 20 };

target = { ...source, ...target };
console.log("Source ", source);
console.log("Target ", target);
console.log();
