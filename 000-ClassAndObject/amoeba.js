"use strict";

import { Shape } from "./shape.js";

class Amoeba extends Shape {
    rotate() {
        console.log("Rotate Class Amoeba.");
    }

    playSound() {
        console.log("Play Sound Class Amoeba.");
    }
}

export { Amoeba };
