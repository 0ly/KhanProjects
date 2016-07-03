/*This program draws a vector to represent the position of the mouse relative to the top left corner.*/

/*Step 1: Display the magnitude*/
/*Use the text command to display the magnitude of that vector at the end of it.*/

/*Step 2: Color the  background*/
/*Now let's do something interesting - change the background color based on the magnitude. If the magnitude is 0, it should be black, and if it's the maximum possible magnitude, it should be white. You'll need to use some additional math functions to come up with a good background value.*/



mouseMoved = function() {
        
    
    var mouse = new PVector(mouseX, mouseY);
    var maxMag = dist(0, 0, width, height);
    var mag = mouse.mag();
    var a = map(mag, 0, maxMag,0, 255);
    background(a, a, a);
    
    stroke(255, 0, 0);
    strokeWeight(3);
    line(0, 0, mouse.x, mouse.y);
    
    
    fill(63, 26, 212);
    text(mag, mouse.x, mouse.y);

};