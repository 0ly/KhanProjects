// Adapted from Dan Shiffman, natureofcode.com
//bouncing ball
var position = new PVector(100, 100);
var velocity = new PVector(2, 5);

var draw = function() {
    background(255, 255, 255);

    position.add(velocity);

    // We still sometimes need to refer to the individual components of a PVector and can do so using the dot syntax: location.x, velocity.y, etc.
    if ((position.x > width) || (position.x < 0)) {
        velocity.x = velocity.x * -1;
    }
    if ((position.y > height) || (position.y < 0)) {
        velocity.y = velocity.y * -1;
    }

    noStroke();
    fill(179, 179, 179);
    ellipse(position.x, position.y, 16, 16);
};
