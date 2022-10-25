"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawConcentricCircles();
}

function drawConcentricCircles() {
    let i = 0 ;
    while (i <= 10) {
        //This strokeCircle function does not exist yet!
        //Add it to the utils script:
        //The function draws the stroke of a circle 
        //and has the following parameters: x,y,radius
        Utils.fillEllipse(200 + (i/10),200 + (i/10) ,15 +(i*14),15 +(i*14)); //herhaalde circles (x + (i/..), y + (i/..), rX+(i*...),rY+(i*...))
        i = i + 1;
    }
}