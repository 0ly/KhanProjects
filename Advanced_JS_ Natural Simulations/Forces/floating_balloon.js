/*This program creates a balloon that rests at the bottom of the screen*/

/*Step 1: Fill it with helium!*/
/*Apply a force that simulates filling the balloon with helium- like an inner wind force!*/


var Balloon = function() {
    this.mass = 1;
    this.height = 100;
    this.width = 70;
    this.position = new PVector(width/2, height-this.height/2-10);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};
  
Balloon.prototype.applyForce = function(force) {
    var f = PVector.div(force, this.mass);
    this.acceleration.add(f);
};
  
Balloon.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Balloon.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 0, 0);
    line(this.position.x, this.position.y, this.position.x, this.position.y + this.height*2);
    ellipse(this.position.x, this.position.y, this.width, this.height);
};

Balloon.prototype.checkEdges = function() {
};


var m = new Balloon(); 

draw = function() {
    background(224, 224, 224);

    var heliumDispenser = new PVector(0, -0.001);
    m.applyForce(heliumDispenser);
    
    m.update();
    m.display();
    m.checkEdges();
};

