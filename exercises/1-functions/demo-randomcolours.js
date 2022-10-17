"use strict";
let context;

setup();
drawRect();


function setup();
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;
context = canvas.getContext('2d');

let width = context.canvas.width;
let height= context.canvas.height;

function drawRect();
drawRect (100, 200, 400);
drawRect (150, 150,350);
drawRect(200,200);

function 
let r = Math.floor(Math.random()*255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let color= "rgb("+ r +","+ g +","+ b +")";



function drawRect(pos,size){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    context.fillStyle=color;
    context.fillRect(pos,pos,size, size);
}

