/*Project Overview

You've seen that Perlin noise is sometimes better at simulating natural patterns than randomness, like how the program below makes a mountain range with just a few lines of noise-controlled code. Keep using noise and randomness to paint a landscape below:

Make several mountain ranges, seemingly receding farther into the background, with different colors.
Use randomness to draw birds in the sky.
Use noise to create a white cloud against a blue sky.
Use randomness to dot the mountain ranges with little trees.
What else can you do? Go wild!*/

var drawRange = function() {
    var incAmount = 0.01;
    for (var t = 0; t < incAmount*width; t += incAmount) {
        var n = noise(t);
        var y = map(n, 0, 1, 0, height/2);
        rect(t*100, height-y, 1, y);
    }
};

drawRange();
