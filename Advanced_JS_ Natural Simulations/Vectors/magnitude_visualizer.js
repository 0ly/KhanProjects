/*This program draws a vector to represent the position of the mouse relative to the top left corner.*/

mouseMoved = function() {
    background(255, 255, 255);
    
    var mouse = new PVector(mouseX, mouseY);
    
    stroke(255, 0, 0);
    strokeWeight(3);
    line(0, 0, mouse.x, mouse.y);
};