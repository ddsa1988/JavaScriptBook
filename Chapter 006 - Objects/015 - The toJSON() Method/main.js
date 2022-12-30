"use strict";

const point = {
    x: 1000,
    y: 2000,

    toString: function () {
        return `(${this.x}, ${this.y})`;
    },

    toJSON: function () {
        return this.toString();
    },
};

console.log([JSON.stringify(point)]);
