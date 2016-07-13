/*In this challenge you will draw a sun in the sky with some clouds. The center of the sun is drawn already, but the sun is missing its sun rays!*/

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

