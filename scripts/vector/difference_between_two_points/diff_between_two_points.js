// Adapted from Dan Shiffman, natureofcode.com

mouseMoved = function() {
    background(255, 255, 255);
    // Two PVectors, one for the mouse location and one for the center of the window
    var mouse  = new PVector(mouseX, mouseY);
    var center = new PVector(width/2, height/2);
    // PVector subtraction!
    mouse.sub(center);

    // Draw a line to represent the vector -
    // Simplify drawing it by first translating to center
    // and drawing the line from there
    pushMatrix();
    translate(width/2, height/2);
    stroke(255, 0, 0);
    strokeWeight(3);
    line(0, 0, mouse.x, mouse.y);
    popMatrix();
};
