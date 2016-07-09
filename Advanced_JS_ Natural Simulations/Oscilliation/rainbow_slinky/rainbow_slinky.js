/*This slinky is hanging from the ceiling, so it should really be bobbing up and down from spring forces.*/

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
    
    
    background(255);
    drawSlinky(width/2, 10, 200);
};