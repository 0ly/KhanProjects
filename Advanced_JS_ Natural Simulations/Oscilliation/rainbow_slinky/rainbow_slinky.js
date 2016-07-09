/*This slinky is hanging from the ceiling, so it should really be bobbing up and down from spring forces.*/

/*Step 1: Slink that slinky!*/
/*Use the sin() function to calculate the y position of the bottom of the slinky, and map() to convert it to a reasonable value.*/

angleMode = "radians";

var drawSlinky = function(centerX, startY, endY) {
    noFill();
    colorMode(HSB);
    strokeWeight(2);
    ellipseMode(CENTER);
    var overlap = 0.8;
    var space = (endY/overlap - startY)/30;
    for (var i = 0; i < 30; i++) {
        stroke(i*9, 200, 255);
        ellipse(centerX, i*space*overlap + startY, 60, space);
    }
};

draw = function() {
    var y = sin(TWO_PI * frameCount / 10);
    var m = map(y,-1,1,100,200);
    
    background(255);
    drawSlinky(width/2, 10, m);
};