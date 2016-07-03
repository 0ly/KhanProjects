/*This program draws a vector to represent the position of the mouse relative to the top left corner.*/

/*Step 1: Display the magnitude*/
/*Use the text command to display the magnitude of that vector at the end of it.*/



mouseMoved = function() {
    background(255, 255, 255);
    
    var mouse = new PVector(mouseX, mouseY);
    
    stroke(255, 0, 0);
    strokeWeight(3);
    line(0, 0, mouse.x, mouse.y);
    var mag = mouse.mag();
    fill(63, 26, 212);
    text(mag, mouse.x, mouse.y);
};