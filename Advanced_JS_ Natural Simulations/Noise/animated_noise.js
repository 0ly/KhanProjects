/*We start off with a 2D visualization of noise, just like the one from last tutorial. What would happen if instead of passing 2 arguments to noise, we passed 3, with the third one slowly changing over time?

The color of all the points would also change smoothly, creating the illusion that you're moving through the clouds. Cool, right?

That's your task for this challenge - to smoothly animate noise over time. It will involve:
- passing a third argument into noise;
- using the draw function to repaint the current noise;
- incrementing the third argument appropriately in each frame.*/


var zOff = 0.0;

draw = function() {
    
    var xOff = 0.0;
    
    zOff+= 0.01;
    
    for (var x = 0; x < 100; x++) {
        var yOff = 0.0;
        for (var y = 0; y < 100; y++) {
            var bright = map(noise(xOff, yOff, zOff), 0, 1, 0, 255);
            stroke(bright, bright, bright);
            point(x, y);
            yOff += 0.01;
        }
        
        xOff += 0.01;
    }
};
