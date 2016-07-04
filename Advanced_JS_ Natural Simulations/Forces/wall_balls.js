/*The balls in this program quickly fall out of the screen, never to be seen of again. To keep them inside, calculate a force that will push back on them when they get close to the walls.*/

var Ball = function(m, x, y) {
    this.mass = m;
    this.position = new PVector(x, y);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
    this.color = color(random(255), random(255), random(255), 127);
};

Ball.prototype.applyForce = function(force) {
    var f = PVector.div(force, this.mass);
    this.acceleration.add(f);
};

Ball.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Ball.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(this.color);
    ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
};

Ball.prototype.calculateWallForce = function() {

    if (this.position.x > width) {

    } else if (this.position.x < 0) {

    }

    if (this.position.y > height) {

    } else if (this.position.y < 0) {

    }
    
};

var balls = [];

for (var i = 0; i < 20; i++) {
    balls[i] = new Ball(random(0.1, 5), 0, 0);
}

var wind = new PVector(0.01, 0);
var gravity = new PVector(0, 0.1);

draw = function() {
    background(255, 255, 255);

    for (var i = 0; i < balls.length; i++) {
        balls[i].applyForce(wind);
        balls[i].applyForce(gravity);
        balls[i].update();
        balls[i].display();
    }
};