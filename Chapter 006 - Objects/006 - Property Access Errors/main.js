"use strict";

const book = {
    author: {
        fistName: "Diego",
        lastName: "Alexandre",
    },
    edition: "1st",
    year: 2021,
};

let surname0 = undefined;

if (book) {
    if (book.authors) {
        surname0 = book.author.lastName;
    }
}
console.log(surname0);

const surname1 = book && book.author && book.author.lastName; //Short-Circuiting with && returns the first falsy value or the last truthy value
console.log(surname1);

const surname2 = book && book.authors && book.author.lastName; //Short-Circuiting with && returns the first falsy value or the last truthy value
console.log(surname2);

const surname3 = book?.author?.lastName; //Optional chaining: returns undefined if the property doesn't exist
console.log(surname3);

const surname4 = book?.authors?.lastName; //Optional chaining: returns undefined if the property doesn't exist
console.log(surname4);

//const surname5 = book.authors.lastName; //TypeError: Cannot read properties of undefined (reading 'lastName')
