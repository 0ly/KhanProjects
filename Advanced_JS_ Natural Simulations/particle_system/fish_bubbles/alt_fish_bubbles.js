//step one
/*
This program draws a fish and bubbles coming out of its mouth, using a particle system
for the bubbles. But, it's adding a new bubble in every frame, and that seems like a
lot of bubbles to come out of one fish. Can you change it so that it only adds bubble
every few frames, using the frameCount variable?
*/
//step two
/*
In the ocean, bubbles get bigger as they travel to the surface because there's
less pressure and the gas expands. Add some logic to the particles so that they
get bigger as they get closer to the surface.
*/
//step three
/*
Now that the bubbles are more realistic, make the fish more realistic -
make it swim across the ocean, starting over on the left side whenever it goes
beyond the right side of the canvas.
*/
//step four
/*
Now that the fish is swimming, the bubbles should move with it -- as in, new bubbles
should always appear to comeout of the fish's mouth.
*/


var Particle = function(position) {
    this.acceleration = new PVector(0, -0.05);
    this.velocity = new PVector(random(-1, 1), random(-1, 0));
    this.position = position.get();
    this.timeToLive = 200;
};

Particle.prototype.run = function() {
    this.update();
    this.display();
};

Particle.prototype.update = function(){
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.timeToLive -= 2;
};

Particle.prototype.display = function() {
    stroke(255, 255, 255, 100);
    strokeWeight(2);
    fill(255, 255, 255, 50);

    //step two
    var radius = map(this.position.y, height/2, 0, 5, 15);
ellipse(this.position.x, this.position.y, radius, radius);
   //end step two

};

Particle.prototype.isDead = function() {
    if (this.timeToLive < 0) {
        return true;
    } else {
        return false;
    }
};

var ParticleSystem = function(position) {
    this.origin = position.get();
    this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
    for (var i = this.particles.length-1; i >= 0; i--) {
        var p = this.particles[i];
        p.run();
        if (p.isDead()) {
            this.particles.splice(i, 1);
        }
    }
};

var Fish = function(position) {
    this.position = position.get();
    this.width = 100;
    this.height = 60;

    this.velocity = new PVector(0, 0);
    this.acceleration = 0;
    this.topspeed = 4;
    this.xoff = 1000;
    this.yoff = 0;
    this.r = 16;
};

Fish.prototype.swim = function() {
 //step three
this.position.x+= 1.0;
if(this.position.x>width+100) {
this.position.x = -60;
this.flip = !this.flip; }
//step three
};

Fish.prototype.display = function() {
    noStroke();
    fill(255, 191, 0);
    ellipse(this.position.x, this.position.y, this.width, this.height);
    triangle(this.position.x-this.width/2+10, this.position.y,
             this.position.x-this.width*0.75, this.position.y+this.height/3,
             this.position.x-this.width*0.75, this.position.y-this.height/3);
    fill(255, 191, 0);
    triangle(this.position.x+this.width/2+10, this.position.y-this.height/12,
             this.position.x+this.width/2-2, this.position.y+this.height/8,
             this.position.x+this.width/2-2, this.position.y-this.height/8);
    triangle(this.position.x+this.width/2+10, this.position.y-this.height/12+18,
             this.position.x+this.width/2-10, this.position.y+this.height/8+10,
             this.position.x+this.width/2-12, this.position.y-this.height/8+10);
    fill(255, 255, 255);
    ellipse(this.position.x+this.width/2-10, this.position.y-11, 15, 20);
    fill(0, 0, 0);
    ellipse(this.position.x+this.width/2-7, this.position.y-10, 6, 6);
};

Fish.prototype.getMouthPosition = function() {
    return new PVector(this.position.x+this.width/2+10, this.position.y);
};

var fish = new Fish(new PVector(width/2, height/2));
var bubbles = new ParticleSystem(fish.getMouthPosition());

draw = function() {

    //step one
    if(frameCount%10===0) {
        bubbles.addParticle();
    }

    background(17, 78, 117);
    fish.swim();//step three
    bubbles.run();
    //step four
    bubbles.origin.set(fish.getMouthPosition());
    bubbles.addParticle();
    fish.display();
};
