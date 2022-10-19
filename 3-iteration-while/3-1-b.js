"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawGrid();
}

function drawGrid() {
    let i = 0;
    while (i <= 6) {
        let x = i*50 + 25;
        let y = x;
        Utils.drawLines(75, y , 325, y);
        Utils.drawLines(x, 75,x, 325);
        i = i + 1 ;
    }
}