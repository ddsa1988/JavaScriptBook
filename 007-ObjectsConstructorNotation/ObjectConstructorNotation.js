"use strict";

function Hotel(
    name,
    rooms,
    booked,
    workingDays,
    street,
    number,
    city,
    country
) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.workingDays = workingDays;
    this.address = {
        street: street,
        number: number,
        city: city,
        country,
        country,
    };
    this.checkAvailability = function () {
        return this.rooms - this.booked;
    };
}

const hotel1 = new Hotel(
    "Park",
    120,
    77,
    ["sunday", "monday", "tuesday"],
    "Av. Marechal",
    2201,
    "Curitiba",
    "Brazil"
);

export { hotel1 };

const hotel2 = new Hotel(
    "Quay",
    40,
    25,
    ["friday", "saturday"],
    "Av. Julian",
    578,
    "New York",
    "EUA"
);

export { hotel2 };
