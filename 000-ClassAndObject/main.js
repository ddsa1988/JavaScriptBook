"use strict";

import { Amoeba } from "./amoeba.js";
import { Circle } from "./circle.js";

const amoeba = new Amoeba();
const circle = new Circle();

amoeba.rotate();
amoeba.playSound();

console.log("\n");

circle.rotate();
circle.playSound();
