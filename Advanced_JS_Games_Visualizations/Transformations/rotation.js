/*The goal of this challenge is to create a color wheel using many rotated copies of a single rectangle.

The program currently draws a rectangle whose upper-left corner is in the upper-left corner of the screen.*/

//Step 1: Move the rectangle to the center
/*
Your task for this step is to use a translation to move the upper-left corner of the rectangle to the center of the screen.
*/

//Step 2: Make a wheel
/*Now, generate a wheel by using 12 rectangles, with each rectangle rotated 30 degrees more than the previous rectangle. To do this, you will use two new components: a for loop and a rotation.*/

//Step 3: Make the wheel colorful
/*Finally, let's turn the wheel into a color wheel by using a different color for each rectangle.

Make the change in colors, around the color wheel, smooth by incrementing or decrementing each of the r,g, and b values by a constant amount for each rectangle.*/

noStroke();
background(0, 0, 0);
var r = 255;
var g = 90;
var b = 0;
fill(r, g, b);

for(var ang = 0; ang < 360; ang+= 30){
     fill(r, g, b);
    r-= 15;
    g+=5;
    b+=16;
    pushMatrix();
    translate(200,200);
    rotate(ang);
    rect(0, 0, 150, 15);
    popMatrix();
}
