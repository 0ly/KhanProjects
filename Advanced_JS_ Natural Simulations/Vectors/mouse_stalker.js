/*This is the mover program, where the circle accelerates towards the mouse. We want you to make it so that it accelerates faster when the mouse is closer, and slower when the mouse is farther.*/

/*Step 1: Star with some vector math*/
/* To start off with, do some vector math to figure out the magnitude of the biggest possible direction vector, which we could compare our current direction vector to. (Think about it this way: what is the farthest your mouse could be away from the circle?)*/

/*Step 2: Measure Closeness*/
/*Now that you know the magnitude of the biggest possible direction vector, compare that to the magnitude of the vector that represents the current distance from the mouse to the circle. The goal is to come up with a number between 0 and 1, where 0 is the farthest away and 1 is right on top.*/

/*Step 3: Vary the acceleration*/
/*Finally you have a number you can use to vary the acceleration proportionally to the mouse distance. Use that to affect the magnitude of the acceleration vector.*/

var Mover = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

Mover.prototype.update = function() {
    var mouse = new PVector(mouseX, mouseY);
    //creates a vector by subtracting a PVector with 0 values from a PVector with the canvas's dimensions(the biggest possible vector)
    var maxDir = PVector.sub(new PVector(0,0), new PVector(width,height));
    //the magnitude of the biggest possible vector.
    var maxMag = maxDir.mag();
    var dir = PVector.sub(mouse, this.position);
    //closeness
    var closeness = (maxMag - dir.mag())/maxMag;     
    dir.normalize();
    //vary the accelration by closeness
    dir.mult(closeness);
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
};

Mover.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.position.x, this.position.y, 48, 48);
};

Mover.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.position.x = 0;
  } else if (this.position.x < 0) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 0;
  } else if (this.position.y < 0) {
    this.position.y = height;
  }
};

var mover = new Mover();

draw = function() {
    background(255, 255, 255);
    
    mover.update();
    mover.checkEdges();
    mover.display(); 
};



