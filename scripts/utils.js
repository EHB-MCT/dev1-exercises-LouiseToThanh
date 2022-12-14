"use strict";

import context from "./context.js";    //we gebruiken var. gebruiken die we importeren van een ander module

/**
 * Draws a line between 2 points 
 * 
 * @param {*} x1 x-coordinate of starting point 
 * @param {*} x2 x-coordinate of ending point 
 * @param {*} y1 y-coordinate of starting point 
 * @param {*} y2 y coordinate of ending point 
 */
export function drawLines(x1, y1, x2, y2 ) {   //exp naar ander module, zonder 'default'
    context.beginPath();
    context.moveTo(x2,y2);
    context.lineTo(x1,y1);
    context.stroke();
}

/**export function rgb(r,g,b) {
    let rgb="rgb("+r+","+g+","+b+")";
    return rgb
}
*/

export function fillEllipse(x,y,rX,rY) {
    context.beginPath();
    context.ellipse(x,y,rX,rY,0,0,Math.PI*2);
    context.fillEllipse();
}

export function strokeRect(x,y,width,height){
    context.beginPath();
    context.lineWidth= 2;
    context.rect(x,y,width,height);
    context.stroke();
}