/*For the rest of the Natural Simulations course, our projects will work towards creating a simulation of an ecosystem. Imagine a population of computational creatures swimming around a digital pond, interacting with each other according to various rules. Now that you know the basics of vectors and motions, you can begin to create those creatures!

For this first ecosystem project, start from the basic Mover example code. Develop a set of rules for simulating the real-world behavior of a creature, such as a nervous fly, swimming fish, hopping bunny, slithering snake, etc. Control the object’s motion by only manipulating the acceleration, using what you know so far. Try to give the creature a personality through its behavior, rather than through its visual design - or in addition to it, if you're feeling artsy. Have fun with it!*/





var Fly = function() {
  this.position = new PVector(random(width), random(height));
  this.velocity = new PVector(0, 0);
  this.acceleration = new PVector(0, 0);
};

Fly.prototype.update = function() {
    
    
    //Fly will be drawn towards mouse if mouse is present
    var mouse = new PVector(mouseX, mouseY);
    var maxDir = PVector.sub(new PVector(0,0), new PVector(width,height));
    var maxMag = maxDir.mag();
    var dir = PVector.sub(mouse, this.position);
    var closeness = (maxMag - dir.mag())/maxMag;
    dir.normalize();
    dir.mult(closeness);
    
    this.acceleration = dir;
    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
    
    //If mouse is not present, then it will go about it's business(random direction)
    if(mouseX < 0 && mouseY < 0){
        
      this.acceleration = PVector.random2D();
      this.acceleration.mult(random(2));
      this.velocity.add(this.acceleration);
      this.velocity.limit(10);
      this.position.add(this.velocity);
        
    }
};

Fly.prototype.display = function() {
  stroke(0);
  strokeWeight(2);
  fill(127);
  ellipse(this.position.x, this.position.y, 10, 10);
};

Fly.prototype.checkEdges = function() {

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

var flies = [];

for (var i = 0; i < 5; i++) {
    flies[i] = new Fly(); 
}

//If mouse exits the canvas, set mouse properties negative(for fly.update() check).
mouseOut = function(){
    mouseX = -1;
    mouseY = -1;
};


draw = function() {
    background(255, 255, 255);
    for (var i = 0; i < flies.length; i++) {
        flies[i].update();
        flies[i].checkEdges();
        flies[i].display(); 
    }
};

