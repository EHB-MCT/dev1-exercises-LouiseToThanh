"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

drawCircle(width/2,height/2,200); //midden van het scherm

//drawMickey(100,300,200);
//drawMickey(500,700,100);

function drawCircle(x,y, size) {
    context.beginPath();
    context.ellipse(x,y,size, size,0, 0,Math.PI * 2);
    context.fill(); 
    context.beginPath();
    context.ellipse(x-size, y-size, size/2, size/2,0,0,Math.PI * 2);
    context.fill();
    context.beginPath();
    context.ellipse(x + size, y-size, size/2, size/2,0,0,Math.PI * 2);
    context.fill(); 
}