"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let margin = 50;
let spacing = 50;
let width = context.canvas.width;
let height= context.canvas.height;

drawLines();

function drawLines(){
    context.beginPath();
    context.lineWidth = 2;
    context.moveTo(margin,spacing);  //Margin= wanneer je u venster kleiner maakt, blijft het 50 px (eerste aanmaken)
    context.lineTo(width-margin,spacing);

    context.lineTo(margin, spacing +100);
   context.lineTo(width-margin,spacing + 100);

    context.lineTo(margin, spacing + 200);
    context.lineTo(width-margin,spacing + 200);

    context.lineTo(margin, spacing + 300);
    context.lineTo(width-margin,spacing + 300);

    context.lineTo(margin, spacing + 400);
    context.lineTo(width-margin,spacing + 400);

    context.closePath();
    context.stroke();

}
