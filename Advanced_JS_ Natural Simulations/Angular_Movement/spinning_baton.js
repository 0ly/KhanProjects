/*This program draws a baton in the upper left.*/

angleMode = "radians";	

draw = function() {
    background(255);
    
    fill(127, 127, 127);
    stroke(0, 0, 0);
    line(-50, 0, 50, 0);
    strokeWeight(2);
    ellipse(-50, 0, 16, 16);
    ellipse(50, 0, 16, 16);
};
