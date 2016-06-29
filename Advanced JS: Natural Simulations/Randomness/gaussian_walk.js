/*This walker walks a random step size in each direction, but we want it to use a normal distribution to pick the step size now.*/


var generator;
var standardDeviation;
var mean;

var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.x, this.y);
};

// Randomly move up, down, left, right, or stay in one place
Walker.prototype.walk = function() {
    var xStepSize = random(-2, 2);
    var yStepSize = random(-2, 2);
  
    this.x += xStepSize;
    this.y += yStepSize;
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
