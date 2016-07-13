/*In this challenge you will draw a sun in the sky with some clouds. The center of the sun is drawn already, but the sun is missing its sun rays!*/

//Step 1: Draw sun rays on the sun
/*Use a for loop and call the drawSunRay() function to draw the sun rays. You will need to translate and rotate each sun ray, so that they appear in the right spot.

The drawSun() function should draw the entire sun, including both the circle (for the center of the sun) and the sun rays, so make sure that you put your for loop inside the drawSun() function.*/

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
drawSun();

//draw clouds

