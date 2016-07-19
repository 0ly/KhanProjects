/*In this challenge you will draw a sun in the sky with some clouds. The center of the sun is drawn already, but the sun is missing its sun rays!*/

//Step 1: Draw sun rays on the sun
/*Use a for loop and call the drawSunRay() function to draw the sun rays. You will need to translate and rotate each sun ray, so that they appear in the right spot.

The drawSun() function should draw the entire sun, including both the circle (for the center of the sun) and the sun rays, so make sure that you put your for loop inside the drawSun() function.*/

//Step 2: Draw a cloud
/*Now that you have drawn the sun, you will need some clouds to provide some shade!

Draw at least one cloud using drawCloud(). Make sure to move it around with translate() first!
*/

//Step 3: Scale the sun
/*Hmm, the sun is a little too small! Use scaling to make the sun larger.

To complete this step you will need to:
- Use the variable scaleF to hold your scaling factor (The amount your sun will be scaled by).
- Add a scale() command before your call to drawSun() to make the sun larger
- Use a translate() command to keep the sun centered in the middle of the canvas. The center of your sun should remain in the middle of the canvas even if you change the value of scaleF.

Figuring out the correct expressions to use in your translate() command can be challenging. It may help to break your expression into two parts:
- One part to translate the middle of the scaled version of the sun back to (0,0). Try thinking about where a point at (200,200) would be drawn after it was scaled by scaleF.
- One part to translate the sun from (0,0) to the middle of the canvas

*/

angleMode = "degrees";
var backgroundColor = color(135, 206, 250);
var sunColor = color(255, 255, 0);
var sunStrokeColor = color(200, 200, 0);
var sunDiameter = 100;

var drawCloud = function() {
    noStroke();
    fill(255, 255, 255);
    ellipse(0, 0, 126, 97);
    ellipse(60, 0, 70, 60);
    ellipse(-60, 0, 70, 60);
};

var drawSunRay = function() {
    fill(sunColor);
    noStroke();
    triangle(0, 90, -40, 0, 40, 0);
};

var drawSun = function() {
    //draw sun rays
     for(var i = 0; i < 360; i+=30){
        pushMatrix();
        translate(200,200);
        rotate(i);
        drawSunRay();
        popMatrix();
    }
    
    
    //draw center of sun
    fill(sunColor);
    stroke(sunStrokeColor);
    ellipse(width/2, height/2, sunDiameter, sunDiameter);
};

//draw background
background(backgroundColor);

//draw sun
var scaleF = 2.0;
pushMatrix();
translate(200 - 200 * scaleF, 200 - 200 * scaleF);
scale(scaleF);
drawSun();
popMatrix();

//draw clouds
pushMatrix();
translate(100,50);
drawCloud();
popMatrix();

