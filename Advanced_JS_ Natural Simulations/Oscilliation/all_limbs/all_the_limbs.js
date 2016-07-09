/*
step one
In this challenge, you'll make a puppet out of pendulums. We've created all the limbs and stored them in a variable, but we're only displaying and responding to mouse events for one of them right now. Make it so we do that for all of the limbs instead.
*/
//step two
/*
The parts of the limbs move independently now - try dragging them and you'll see. What we want instead is for the bottom part of each limb to connect to the top limb, like a joint. That means that for half the pendulums, the origin isn't static - it varies, based on their parent pendulum's position. To make this happen in code, we suggest letting the first argument of Pendulum be either a PVector or another Pendulum, and acting accordingly. But there may be other ways, too. (Note that this looks like what's called a 'double pendulum', but truly simulating a double pendulum requires far more complex equations.)
*/
/*
step three
To make this more fun, let's start off the different limbs at different angles. Currently, every pendulum has the same angle hard-coded in the constructor, so you'll need to both modify the constructor and all of your calls to it.
*/
angleMode = "radians";

//step three add angle
var Pendulum  = function(origin, armLength, angle) {
   this.origin = origin;
   this.armLength = armLength;
   this.position = new PVector();
   this.angle = angle;// angle

    this.aVelocity = 0.0;
    this.aAcceleration = 0.0;
    this.damping = 0.995;
    this.ballRadius = 25.0;
    this.dragging = false;
};

Pendulum.prototype.go = function() {
    this.update();
    this.display();
};

Pendulum.prototype.update = function() {
    // As long as we aren't dragging the pendulum, let it swing!
    if (!this.dragging) {
        // Arbitrary constant
        var gravity = 0.4;
        // Calculate acceleration
        this.aAcceleration = (-1 * gravity / this.armLength) * sin(this.angle);
        // Increment velocity
        this.aVelocity += this.aAcceleration;
        // Arbitrary damping
        this.aVelocity *= this.damping;
        // Increment angle
        this.angle += this.aVelocity;
    }
};

Pendulum.prototype.display = function() {
    //step two change this section. \/
     if (this.origin instanceof PVector) {
        this.currentOrigin = this.origin;
    } else {
        this.currentOrigin = this.origin.position;
    }
    // step 2 all origins here too currentOrigin.
    this.position = new PVector(
       this.armLength * sin(this.angle),
       this.armLength * cos(this.angle));
    this.position.add(this.currentOrigin);
    stroke(0, 0, 0);
    strokeWeight(3);
    line(this.currentOrigin.x, this.currentOrigin.y, this.position.x, this.position.y);
    fill(224, 194, 134);
    if (this.dragging) {
        fill(143, 110, 44);
    }
    ellipse(this.position.x, this.position.y, this.ballRadius, this.ballRadius);



};

Pendulum.prototype.handleClick = function(mx, my) {
    var d = dist(mx, my, this.position.x, this.position.y);
    if (d < this.ballRadius) {
        this.dragging = true;
    }
};

Pendulum.prototype.stopDragging = function() {
    this.aVelocity = 0;
    this.dragging = false;
};

Pendulum.prototype.handleDrag = function(mx, my) {
    if (this.dragging) {
                 //change step 2 origin -> currentOrigin
      var diff = PVector.sub(this.currentOrigin, new PVector(mx, my));
      this.angle = atan2(-1*diff.y, diff.x) - radians(90);
    }
};
/*
var limbLength = 75;
var leftArm1  = new Pendulum(new PVector(width/2-50, 110), limbLength);
var leftArm2  = new Pendulum(new PVector(width/2-50, 185), limbLength);
var rightArm1 = new Pendulum(new PVector(width/2+50, 110), limbLength);
var rightArm2 = new Pendulum(new PVector(width/2+50, 185), limbLength);
var leftLeg1  = new Pendulum(new PVector(width/2+40, 230), limbLength);
var leftLeg2  = new Pendulum(new PVector(width/2+40, 305), limbLength);
var rightLeg1 = new Pendulum(new PVector(width/2-40, 230), limbLength);
var rightLeg2 = new Pendulum(new PVector(width/2-40, 305), limbLength);
*/

//step 2
var limbLength = 75;
var leftArm1  = new Pendulum(new PVector(width/2-50, 110), limbLength,2);
var leftArm2  = new Pendulum(leftArm1, limbLength,30);
var rightArm1 = new Pendulum(new PVector(width/2+50, 110), limbLength,2);
var rightArm2 = new Pendulum(rightArm1, limbLength,30);
var leftLeg1  = new Pendulum(new PVector(width/2+40, 230), limbLength,2);
var leftLeg2  = new Pendulum(leftLeg1, limbLength,30);
var rightLeg1 = new Pendulum(new PVector(width/2-40, 230), limbLength,2);
var rightLeg2 = new Pendulum(rightLeg1, limbLength,30);



var limbs = [leftLeg1, leftLeg2,
                 rightLeg1, rightLeg2,
                 leftArm1, leftArm2,
                 rightArm1, rightArm2];

draw = function() {
    background(255);

    // Draw the body
    strokeWeight(4);
    line(width/2-50, 110, width/2+50, 110);
    line(width/2, 110, width/2, 230);
    line(width/2-40, 230, width/2+40, 230);
    fill(224, 194, 134);
    rect(width/2-25, 39, 50, 64, 30);

    //leftArm1.go();
    //step 2
    for(var i = 0; i < limbs.length; i++) {
        limbs[i].go();
    }
};

mousePressed = function() {
   // leftArm1.handleClick(mouseX, mouseY);
    //step 2
    for(var i = 0; i < limbs.length; i++) {
        limbs[i].handleClick(mouseX, mouseY);
    }

};

mouseDragged = function() {
    //leftArm1.handleDrag(mouseX, mouseY);
    // step 2
    for(var i = 0; i < limbs.length; i++) {
        limbs[i].handleDrag(mouseX, mouseY);
    }

};

mouseReleased = function() {
    //leftArm1.stopDragging();
    // step 2
    for(var i = 0; i < limbs.length; i++) {
       limbs[i].stopDragging();
    }

};
