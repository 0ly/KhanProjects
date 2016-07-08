/*This program draws a baton in the upper left.*/

/*Step 1: Center the baton*/
/*Use the translate function to center it in the middle of the canvas.*/

/*Step 2: Spin the baton!*/
/*  
Now that the baton is in the middle, spin it around its center, rotate()ing it a little bit every time draw is called.*/

angleMode = "radians";	
var angle = 0;

draw = function() {
    background(255);
    
    pushMatrix();

    translate(200,200);
    rotate(angle);
    angle+=0.03;
    fill(127, 127, 127);
    stroke(0, 0, 0);
    line(-50, 0, 50, 0);
    strokeWeight(2);
    ellipse(-50, 0, 16, 16);
    ellipse(50, 0, 16, 16);

    popMatrix();

};
