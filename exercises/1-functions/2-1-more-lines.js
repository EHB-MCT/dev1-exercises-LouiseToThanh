"use strict";

//canvas inladen en opnieuw uitvoeren
window.onresize = setup; 

/**@type {CanvasRenderingContext2D} */  
let context; 

setup();

function setup(){
    let canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight;
    context = canvas.getContext('2d');
    drawLines(); // onresize gaat enkel setup uitvoeren en niet drawLines
}

function drawLines(){ 
    context.lineWidth= 5;

    let margin = 200;
    let canvasWidth = context.canvas.width;

    context.beginPath();
    context.moveTo(margin,100);
    context.lineTo(canvasWidth - margin, 100);
    context.lineTo(margin, 150);
    context.lineTo(canvasWidth - margin, 150);
    context.lineTo(margin, 200);
    context.lineTo(canvasWidth - margin, 200);
    context.lineTo(margin, 250);
    context.lineTo(canvasWidth - margin, 250);
    context.lineTo(margin, 300);
    context.lineTo(canvasWidth - margin, 300);
    context.closePath();
    context.stroke();
}


