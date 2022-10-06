"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawLine();

function drawLine(){
    context.beginPath();
    context.lineWidth=2;
    context.rect(50,50,200,200);
    context.strokeStyle = "red";
    context.stroke();

    context.beginPath();
    context.lineWidth=2;
    context.rect(350,350,200,200);
    context.strokeStyle = "red";
    context.stroke();

    context.beginPath();
    context.lineWidth=2;
    context.rect(200,200,200,200);
    context.strokeStyle = "red";
    context.fill();
    context.stroke();

    context.beginPath();
    context.lineWidth=2;
    context.rect(400,100,100,100);
    context.strokeStyle = "red";
    context.stroke();

    context.beginPath();
    context.lineWidth=2;
    context.rect(500,50,50,50);
    context.fill();
    context.fill();

    context.beginPath();
    context.lineWidth=2;
    context.rect(100,400,100,100);
    context.strokeStyle = "red";
    context.stroke();

    context.beginPath();
    context.lineWidth=2;
    context.rect(50,500,50,50);
    context.fill ();

}
