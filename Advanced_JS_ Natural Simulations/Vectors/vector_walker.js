/*This Walker uses separate properties, x and y, for the position. Change it so it stores a single position property, a PVector, that behaves the same. */

/*Step 1: Use a PVector for the position*/
/*You will need to change the constructor and the methods, since they all use the position in some way.*/

/*Step 2: Use a PVector for the step size*/
/*The Walker calculates a step size in each direction and adds that to the x and y of the position. Use a PVector to store the step size instead, and use the add method of the position vector to come up with the new position.*/

var Walker = function() {
    
    this.position = new PVector(width/2, height/2);
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.position.x, this.position.y);
};

Walker.prototype.walk = function() {
 
    var velocity = new PVector(random(-5,5), random(-5,5));
    this.position.add(velocity);
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};