
/*In this challenge you will make a cool-looking optical illusion! The illusion will use overlapping black and white circles.*/

//Step 1: Complete the circle drawing functions
/*For this step of the challenge you will finish writing the functions for drawWhiteCircle and drawBlackCircle.

The function drawWhiteCircle should draw a white circle, and the function drawBlackCircle should draw a black circle. The circles drawn by the functions should have their centers at (0,0). Both of the functions should use the input parameter named diameter to control the diameter of the circles that are drawn.*/

var diameter = 600;
var decreaseAmt = 0.02;
var scaleF = 1.0;

var drawWhiteCircle = function(diameter) {
    fill(255, 255, 255);
    ellipse(0, 0, diameter, diameter);
};

var drawBlackCircle = function(diameter) {
    fill(0, 0, 0);
    ellipse(0, 0, diameter, diameter);
};

background(255, 255, 255);
