/*This program simulates a skateboard rolling down a road with minimal friction. We're going to extend it to show many skateboards rolling down, and slowing down due to a speed bump. */


var Skateboard = function(x, m) {
    this.mass = m;
    this.position = new PVector(x, 0);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.width = this.mass*16;
    this.height = this.mass*16*2;
};
  
Skateboard.prototype.applyForce = function(force) {
  var f = PVector.div(force, this.mass);
  this.acceleration.add(f);
};
  
Skateboard.prototype.update = function() {
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.acceleration.mult(0);
};

Skateboard.prototype.display = function() {
  stroke(0);
  
  fill(184, 184, 37);
  strokeWeight(1);
  ellipse(this.position.x, this.position.y+this.height/5, this.width/10, this.height/10);
  ellipse(this.position.x+this.width, this.position.y+this.height/5, this.width/10, this.height/10);
  ellipse(this.position.x, this.position.y+this.height*0.80, this.width/10, this.height/10);
  ellipse(this.position.x+this.width, this.position.y+this.height*0.80, this.width/10, this.height/10);
  
  fill(71, 71, 71);
  rect(this.position.x, this.position.y, this.width-2, this.height, 30);
};

var SpeedBump = function(y, height) {
    this.x = 50;
    this.y = y;
    this.width = 300;
    this.height = height;
}; 

SpeedBump.prototype.display = function() {
    fill(40, 40, 40, 100);
    noStroke();
    rect(this.x, this.y, this.width, this.height);
};

SpeedBump.prototype.isUnder = function(skateboard) {
    return skateboard.position.x >= this.x &&
        skateboard.position.x <= this.x + this.width &&
        skateboard.position.y >= this.y && 
        skateboard.position.y <= this.y + this.height;
};


var boards = [];
boards.push(new Skateboard(100, 1.5));

draw = function() {
    background(6, 97, 21);
    fill(140, 140, 140);
    rect(50, 0, 300, height);
    fill(255, 255, 255);
    rect(190, 0, 10, height);
    
    for (var i = 0; i < boards.length; i++) {
        var accel = new PVector(0, 0.1*boards[i].mass);
        
        var c = 0.01;       // Coefficient of friction
        var normal = 1;
        var frictionMag = c * normal;
        var friction = boards[i].velocity.get();
        friction.mult(-1);
        friction.normalize();
        friction.mult(frictionMag); 
        boards[i].applyForce(friction);
        
        boards[i].applyForce(accel);
        boards[i].update();
        boards[i].display();
    }
};