"use strict";


let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

drawLine(); 

function drawLine(){

    //L
    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(20,20);
    context.lineTo(20,100);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(20,100);
    context.lineTo(50,100);
    context.stroke();
    
    //O
    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(60,20);
    context.lineTo(60,100);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(60,20);
    context.lineTo(80,20);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(60,100);
    context.lineTo(80,100);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(80,100);
    context.lineTo(80,20);
    context.stroke();

    //U

    context.lineWidth = 5;
    context.strokeStyle = 'purple';
    context.beginPath();
    context.moveTo(100,100);
    context.lineTo(100,20);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'purple';
    context.beginPath();
    context.moveTo(100,100);
    context.lineTo(120,100);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'purple';
    context.beginPath();
    context.moveTo(120,100);
    context.lineTo(120,20);
    context.stroke();

    //I

    context.lineWidth = 5;
    context.strokeStyle = 'pink';
    context.beginPath();
    context.moveTo(140,10);
    context.lineTo(140,15);
    context.stroke();
    
    context.lineWidth = 5;
    context.strokeStyle = 'pink';
    context.beginPath();
    context.moveTo(140,100);
    context.lineTo(140,20);
    context.stroke();

    //S

    context.lineWidth = 5;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(180,20);
    context.lineTo(160,40);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(160,40);
    context.lineTo(180,60);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(180,60);
    context.lineTo(160,100);
    context.stroke();

    //E
    context.lineWidth = 5;
    context.strokeStyle = 'Yellow';
    context.beginPath();
    context.moveTo(200,20);
    context.lineTo(200,100);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'Yellow';
    context.beginPath();
    context.moveTo(220,20);
    context.lineTo(200,20);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'Yellow';
    context.beginPath();
    context.moveTo(220,60);
    context.lineTo(200,60);
    context.stroke();

    context.lineWidth = 5;
    context.strokeStyle = 'Yellow';
    context.beginPath();
    context.moveTo(220,100);
    context.lineTo(200,100);
    context.stroke();

}
