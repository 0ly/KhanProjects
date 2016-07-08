/*This program starts with a boulder sitting at the top of the mountain. */

//Step 1: Make it fall
/*Apply a simple gravity-like force that makes it fall down the slope.*/

//Step 2: BOULDER ROLL!
/*
The boulder is rotated each time, but the angle never changes. Compute the angular acceleration based on the normal acceleration, and use that to determine a new angle.
*/

//Step 3: Push it back
/*  
Now, give our beaver Hopper the power to push the boulder back up. Whenever the user is pressing the mouse, apply an opposite force that's strong enough to counter the gravity.
*/

angleMode = "radians";

var Boulder = function(m, x, y) {
    this.position = new PVector(x, y);
    this.mass = m;
    this.width = this.mass * 10;
    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0;
    
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};

Boulder.prototype.applyForce = function(force) {
    if (force instanceof PVector) {
        var f = PVector.div(force, this.mass);
        this.acceleration.add(f);
    }
};

Boulder.prototype.update = function () {
    this.aAcceleration = this.acceleration.x/10;
    this.aVelocity += this.aAcceleration;
    this.aVelocity = constrain(this.aVelocity, -0.1, 0.1);
    this.angle += this.aVelocity;
    
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    
    this.acceleration.mult(0);
};

Boulder.prototype.display = function () {
    pushMatrix();
    translate(this.position.x, this.position.y);
    image(getImage("creatures/Hopper-Jumping"), this.width*0.25, this.width*0.3, 45, 55);
    rotate(this.angle);
    this.drawShape();
    popMatrix();
};

Boulder.prototype.drawShape = function() {
    ellipseMode(CENTER);
    fill(82, 82, 82);
    ellipse(0, 0, this.width, this.width);
    noStroke();
    var from = color(102, 102, 102, 40);
    var to = color(148, 148, 148, 40);
    var gradientBars = 20;
    for (var i = 0; i < gradientBars; i++) {
        var interA = lerpColor(from, to, i*1/gradientBars);
        var sWidth = (gradientBars-i)*this.width/gradientBars;
        fill(interA);
        ellipse(i, 0, sWidth, sWidth);
    }
    var from = color(102, 102, 102, 40);
    var to = color(94, 94, 94, 40);
    var gradientBars = 20;
    for (var i = 0; i < gradientBars; i++) {
        var interA = lerpColor(from, to, i*1/gradientBars);
        var sWidth = (gradientBars-i)*this.width/gradientBars;
        fill(interA);
        ellipse(-i, 0, sWidth, sWidth);
    }
};

var boulder = new Boulder(6, 10, 10);
var gravity = new PVector(0.1,0.1);
var pushBack = new PVector(-0.5, -0.5);

draw = function() {

     if(mouseIsPressed){
        boulder.applyForce(pushBack);
    }

    background(215, 245, 245);
    
    // draw mountain
    fill(181, 181, 181);
    stroke(150, 150, 150);
    triangle(0, 40, width-40, height, 0, height);
    
    // draw boulder
    boulder.applyForce(gravity);
    boulder.update();
    boulder.display();
};