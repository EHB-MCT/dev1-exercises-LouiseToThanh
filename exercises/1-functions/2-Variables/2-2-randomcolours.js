"use strict";
let context;        // om je canvas aan te maken, staat altijd van boven, voor de functies 

//hieronder worden alle functies aangeroepen 
setup();            //setup van je canvas 
drawRect();


function setup() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context = canvas.getContext("2d");      //Let = altijd een variabele (constante variabele)  
}

function drawRect() {           //Coördinaten --> positie van je vierkant 
    drawSquare(0, 500);
    drawSquare(50, 400);
    drawSquare(100, 300);
    drawSquare(150, 200);
    drawSquare(200, 100);
 
}

function drawSquare(pos, size) {  //drawSquare wordt opgeroepen in drawRect --> lokaal, niet globaal --> kleuren van de squares 
                    //(parameters)
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;

    context.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
    context.fillRect(100 + pos, 100 + pos, size, size);  //size,size = canvas width & height    

}

