
var Mover = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.topspeed = 3;
    this.angle =0;
};
   

Mover.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.velocity.mult(1);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Mover.prototype.applyForce = function(force) {
    this.acceleration.add(force); 
};

Mover.prototype.turnLeft = function() {
    this.angle -=16;
};

Mover.prototype.turnRight = function() {
    this.angle +=16;
};

Mover.prototype.display = function() {
    
    
    pushMatrix();
    stroke(0, 0, 0);
    strokeWeight(1);
    translate(this.position.x,this.position.y);
    rotate(this.angle);
    fill(235, 5, 62);
    rectMode(CENTER);
    rect(12,0,13,10);
    rect(-12,0,13,10);
    fill(117, 109, 117);
    triangle(30,0,-25,0,0,-30);
    popMatrix();
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


keyPressed = function(){
    
    if(keyCode === LEFT){
        mover.turnLeft();
    } else if(keyCode === RIGHT){
        mover.turnRight();
    }
    
};


var draw = function() {
    
    var thrust = new PVector(0,-0.10); 
    
    thrust.rotate(mover.angle); 

    if(keyIsPressed && key.toString() === "z"){ 
       mover.applyForce(thrust);
    }
  background(255, 255, 255);
  
  mover.update();
  mover.checkEdges();
  mover.display();
};