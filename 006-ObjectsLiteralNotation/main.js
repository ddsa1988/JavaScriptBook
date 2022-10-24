"use strict";

import { hotel1 } from "./ObjectLiteralNotation.js";
import { hotel2 } from "./ObjectLiteralNotation.js";

console.log(hotel1);
console.log(hotel1.checkAvailability());
console.log(hotel1.name);
console.log("\n");
console.log(hotel2);
console.log(hotel2.checkAvailability());
console.log(hotel2["name"]);
