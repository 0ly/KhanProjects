// Adapted from Dan Shiffman, natureofcode.com

var Mover = function() {
  this.position = new PVector(random(width), random(height));
  this.velocity = new PVector(random(-2, 2), random(-2, 2));
};

Mover.prototype.update = function() {
  this.position.add(this.velocity);
};

Mover.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(127);
  
  //TODO 1: Change this to a triangle
  ellipse(this.position.x, this.position.y, 48, 48);
  
  //TODO 2: Add two thruster beneath the triangle spaced out
};

Mover.prototype.checkEdges = function() {

  if (this.position.x > width) {
    this.position.x = 0;
  } 
  else if (this.position.x < 0) {
    this.position.x = width;
  }

  if (this.position.y > height) {
    this.position.y = 0;
  } 
  else if (this.position.y < 0) {
    this.position.y = height;
  }
};

var mover = new Mover();

var draw = function() {
    
  //TODO 3: React to left/right arrows, turning the triangle in the given direction
  
  //TODO 4: Increase acceleration when the Z key is pressed. 
  background(255, 255, 255);
  
  mover.update();
  mover.checkEdges();
  mover.display(); 
};




