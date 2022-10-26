"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawBackground();

function drawBackground() {
    context.fillStyle="orange";
    context.fillRect(0,0,width,height);

    context.strokeStyle="white";
    context.stroke();
}

drawLines ();

function drawLines(){
    let step = 10;
    let amount = width/step;        //#lijnen die ik wil tekenen

    for (let i = 0; i < amount; i++){
        Utils.drawLines(i*step, 0, width - (step * i), height);
    }

    let stap = 10;
    let number = height/stap;
    for (let i = 0; i < number; i++){
        Utils.drawLines(0 ,i*stap, width, height - (stap * i));
    }


}
