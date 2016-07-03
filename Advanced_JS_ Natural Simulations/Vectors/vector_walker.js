/*This Walker uses separate properties, x and y, for the position. Change it so it stores a single position property, a PVector, that behaves the same. */

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
