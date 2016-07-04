/*Create beautiful artwork based on movement around an attractor.*/

/*Step 1: Make Trails*/
/*To turn this simulation into an artwork generator, make it so that the movers draw trails as they travel through the space. All you need to do is remove a line of code!*/

/*Step 2: Hide the attractor!*/
/*To add some mystery to the art piece, let's hide the attractor. Once again, this only requires removing one line of code.*/

/*Step 3: Color the trails!*/
/*To make this artwork more colorful, change the Mover object to accept a color argument which it uses to color the circle. Randomly generate a color when you create each new Mover.*/


var Attractor = function() {
    this.position = new PVector(width/2, height/2);
    this.mass = 20;
    this.G = 1;
};

Attractor.prototype.calculateAttraction = function(m) {
    var force = PVector.sub(this.position, m.position);
    var distance = force.mag();
    distance = constrain(distance, 5, 25);  
    force.normalize();
    var strength = (this.G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
};

Attractor.prototype.display = function() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
    ellipse(this.position.x, this.position.y, this.mass*2, this.mass*2);
};


var Mover = function(mass, x, y, c) {
    this.position = new PVector(x, y);
    this.velocity = new PVector(1, 0);
    this.acceleration = new PVector(0, 0);
    this.mass = mass;
    this.color = c;
};
  
Mover.prototype.applyForce = function(force) {
    var f = PVector.div(force,this.mass);
    this.acceleration.add(f);
};
  
Mover.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Mover.prototype.display = function() {
    
    fill(this.color);
    noStroke();
    ellipse(this.position.x, this.position.y, this.mass*16, this.mass*16);
};

var movers = [];
var attractor = new Attractor();

for (var i = 0; i < 10; i++) {
    var randomColor = color(random(0,255),random(0,255),random(0,255));
    movers[i] = new Mover(random(0.1, 2), random(width), random(height), randomColor);
}

draw = function() {
    //background(255, 255, 255);
    
    //attractor.display();
    for (var i = 0; i < movers.length; i++) {
        var force = attractor.calculateAttraction(movers[i]);
        movers[i].applyForce(force);

        movers[i].update();
        movers[i].display();
    }
};