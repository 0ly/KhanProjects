/*Use noise for the step size

This walker takes a random step each time. Change it to use a noise-based step size instead. The best way to do this is to setup two timer properties for x and y that you increment each time, and map to a reasonable value.*/

var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.x, this.y);
};

Walker.prototype.walk = function() {
 
    var xStepSize = random(-5, 5);
    var yStepSize = random(-5, 5);

    this.x += xStepSize;
    this.y += yStepSize;
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
