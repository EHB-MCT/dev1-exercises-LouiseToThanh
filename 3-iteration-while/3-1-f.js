"use strict";
import context from "../../scripts/context.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalSquares();
}

function drawDiagonalSquares() {
    let i = 0;
    while (i<7) {
        context.strokeRect(65+(i*30),65 +(i*30),90,90); //herhaling rect/squares: (x+(i*),y+(i*), w,h)
        i = i+1;
    }
}


/** context.beginPath();
    context.lineWidth= 2;
    context.rect(x,y,width,height);
    context.stroke();
} */