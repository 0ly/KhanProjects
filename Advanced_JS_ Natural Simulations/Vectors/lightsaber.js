/*This light saber is drawn according to the coordinates of a vector.*/
/*Step 1: Make it grow!*/
/*Use the keyPressed function to make it double in size every time the user presses the up arrow, by multiplying the vector.*/
/*Step 2: Make it shrink*/
/*Now, make it so that every time you press the down arrow, the light saber shrinks in half, by dividing the vector.*/

var  v = new PVector(50, 75);

var drawSaber = function() {
    background(0, 0, 0);
    // glow
    strokeWeight(8);
    stroke(97, 94, 94, 150);
    line(0, 400, v.x, 400-v.y);
    // blade
    stroke(237, 9, 9);
    strokeWeight(4);
    line(0, 400, v.x, 400-v.y);
};

drawSaber();

keyPressed = function(){
        if(keyCode === 38){
            
            v.mult(2);
            //println(v.x + " " + v.y);
        } else if(keyCode === 40){
            //println(v.x + " " + v.y);
            v.div(2);
        }
        drawSaber();
    };