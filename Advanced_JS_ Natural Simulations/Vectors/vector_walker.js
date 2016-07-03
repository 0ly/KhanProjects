/*This Walker uses separate properties, x and y, for the position. Change it so it stores a single position property, a PVector, that behaves the same. */

/*Step 1: Use a PVector for the position*/
/*You will need to change the constructor and the methods, since they all use the position in some way.*/

var Walker = function() {
    
    this.position = new PVector(width/2, height/2);
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.position.x, this.position.y);
};

Walker.prototype.walk = function() {
 
    var xStepSize = random(-5, 5);
    var yStepSize = random(-5, 5);
    
    this.position.x += xStepSize;
    this.position.y += yStepSize;
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};