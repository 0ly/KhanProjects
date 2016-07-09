angleMode = "radians";
/*step one*/
var Spaceship = function() {


    this.angle = new PVector();
    this.velocity = new PVector(random(-0.1, 0.1), random(-0.1, 0.1));



this.amplitude = new PVector(random(0, width), random(0, width));
this.position = new PVector(0, 0);
/* end step one*/
};
//step two
Spaceship.prototype.display = function() {
  pushMatrix();
translate(width/2, height/2);
stroke(181, 63, 0);
strokeWeight(9);
line(0, 0, this.position.x, this.position.y);
imageMode(CENTER);
translate(this.position.x, this.position.y);
    rotate(PI);
    image(getImage("space/octopus"), 0, 0,80, 100);

popMatrix();

};
//end 2


Spaceship.prototype.oscillate = function() {

    this.angle.add(this.velocity);
    this.position.set(
                sin(this.angle.x) * this.amplitude.x,
                sin(this.angle.y) * this.amplitude.y);
};

Spaceship.prototype.display = function() {
    pushMatrix();
    translate(width/2, height/2);
    stroke(181, 63, 0);
    strokeWeight(9);
    line(0, 0, this.position.x, this.position.y);
    imageMode(CENTER);
    image(getImage("space/octopus"),
        this.position.x, this.position.y,
        80, 100);
    popMatrix();
};

var ships = [];
for (var i = 0; i < 10; i++) {
    ships.push(new Spaceship());
}

draw = function() {
    background(174, 218, 232);
    for (var i = 0; i < ships.length; i++) {
        ships[i].oscillate();
        ships[i].display();
    }
};
