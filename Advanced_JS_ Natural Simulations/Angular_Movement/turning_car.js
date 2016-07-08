/*This program displays a car that starts with a constant velocity. In the challenge, you'll get it to turn using the keyboard and point towards the angle of movement. */
//Step 1: Add keyboard control*
/*This program displays a car that starts with a constant velocity. In the challenge, you'll get it to turn using the keyboard and point towards the angle of movement. For this step, just implement code that will call the car's currently empty turnLeft and turnRight functions when the left and right arrows are pressed.*/

//Step 2: Make it Turn
/*Now make those turn methods actually do something. To get the car to turn in a direction, generate a force vector that is angled in that direction, relative to the car's current velocity vector, and apply that force. (Hint: check the PVector documentation!)*/

angleMode = "radians";

var Car = function() {
    this.position = new PVector(width/2, height/2);
    this.velocity = new PVector(3, 0);
    this.acceleration = new PVector(0, 0);
    this.topspeed = 4;
    this.xoff = 1000;
    this.yoff = 0;
    this.r = 16;
};

Car.prototype.update = function () {
    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Car.prototype.applyForce = function(force) {
    this.acceleration.add(force);
};

Car.prototype.turnLeft = function() {
     var force = this.velocity.get();
     force.rotate(-PI / 2);
     this.applyForce(force);
};

Car.prototype.turnRight = function() {
     var force = this.velocity.get();
     force.rotate(PI / 2);
     this.applyForce(force);
};

Car.prototype.display = function () {
    // Step 3:
    var angle = this.velocity.heading();
    
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(127, 127, 127);
    pushMatrix();
    rectMode(CENTER);
    translate(this.position.x, this.position.y);
    // Step 3:
    rotate(angle);
    // draw the car
    fill(255, 0, 0);
    rect(0, 0, 70, 30);
    rect(0, 0, 29, 30);
    fill(79, 79, 79);
    ellipse(-15, -18, 20, 8);
    ellipse(-15, 18, 20, 8);
    ellipse(15, 18, 20, 8);
    ellipse(15, -18, 20, 8);
    rect(21, 0, 11, 26);
    popMatrix();
};

Car.prototype.checkEdges = function () {
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

var car = new Car();

keyPressed = function(){
    if(keyCode === LEFT){
        car.turnLeft();
    } else if(keyCode === RIGHT){
        car.turnRight();
    }
};

draw = function() {
    background(102, 209, 104);
    car.update();
    car.checkEdges();
    car.display();
};