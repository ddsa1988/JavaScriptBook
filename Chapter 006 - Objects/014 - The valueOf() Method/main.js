"use strict";

/*
The valueOf() method is much like the toString() method, but is called when  JavaScript needs 
to convert an object to some primitive type other than a string—typically, a number
*/

const point = {
    x: 1000,
    y: 2000,

    valueOf: function () {
        return this.x + this.y;
    },
};

console.log(Number(point));
