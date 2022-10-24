"use strict";

const hotel1 = {
    name: "Park",
    rooms: 120,
    booked: 77,
    workingDays: ["sunday", "monday", "tuesday"],
    address: {
        street: "Av. Marechal",
        number: 2201,
        city: "Curitiba",
        country: "Brazil",
    },

    checkAvailability: function () {
        return this.rooms - this.booked;
    },
};

export { hotel1 };

const hotel2 = Object.assign({}, hotel1);

hotel2.name = "Quay";
hotel2.rooms = 40;
hotel2.booked = 25;
hotel2.workingDays = ["friday", "saturday"];
hotel2.address.street = "Av. Julian";
hotel2.address.number = 578;
hotel2.address.city = "New York";
hotel2.address.country = "EUA";

export { hotel2 };
