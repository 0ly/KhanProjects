/*The goal of this challenge is to create a color wheel using many rotated copies of a single rectangle.

The program currently draws a rectangle whose upper-left corner is in the upper-left corner of the screen.*/

//Step 1: Move the rectangle to the center
/*
Your task for this step is to use a translation to move the upper-left corner of the rectangle to the center of the screen.
*/

noStroke();
background(0, 0, 0);
var r = 255;
var g = 90;
var b = 0;
fill(r, g, b);

pushMatrix();
translate(200,200);
rect(0, 0, 150, 15);
popMatrix();
