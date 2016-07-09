/*This program animates a standard particle system emerging out of a cauldron. We want different sorts of particles to come out of the cauldron, though, starting with a smokey particle. */

//Step 1: Add smoke!
/*Create a Smoke object that inherits from Particle, but looks more like colored smoke.*/

//Step 2: Add stars!
/*Now, make a new kind of particle come out of the cauldron - stars! Like you did for the Smoke, you should inherit from the Particle object, but change the display. You can just use the star image from our image library, to avoid having to draw a star yourself.*/

angleMode = "radians";



var Particle = function(position) {
    this.acceleration = new PVector(0, -0.05);
    this.velocity = new PVector(random(-1, 1), random(0, -1));
    this.position = position.get();
    this.timeToLive = 255.0;
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
    stroke(0, 0, 0, this.timeToLive);
    strokeWeight(2);
    fill(255, 0, 0, this.timeToLive);
    ellipse(this.position.x, this.position.y, 12, 12);
};

Particle.prototype.isDead = function(){
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
    
    var Smoke = function(position){
   
    Particle.call(this, position);
};

Smoke.prototype = Object.create(Particle.prototype);
Smoke.prototype.constructor = Smoke;

Smoke.prototype.display = function(){
    
    noStroke();
    fill(255, 255, 255, this.timeToLive);
    ellipse(this.position.x, this.position.y, 12, 12);
    
};

var Star = function(position){
    Particle.call(this, position);
};
Star.prototype = Object.create(Particle.prototype);
Star.prototype.constructor = Star;
Star.prototype.display = function(){
    image(getImage("cute/Star"), this.position.x, this.position.y, this.size, this.size);
};

ParticleSystem.prototype.addParticle = function() {
    this.particles.push(new Particle(this.origin));
    this.particles.push(new Smoke(this.origin));
   
  
};

ParticleSystem.prototype.run = function(){
	for (var i = this.particles.length-1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
        this.particles.splice(i, 1);
    }
  }
};

var particleSystem = new ParticleSystem(new PVector(width/2, 280));



draw = function() {
    background(72, 7, 105);
    particleSystem.addParticle();
    particleSystem.run();
  
    // The magical cauldron
    fill(36, 36, 36);
    var cauldronX1 = 150;
    var cauldronX2 = 250;
    var cauldronY = 285;
    bezier(cauldronX1, cauldronY,
           cauldronX1-100, cauldronY+145,
           cauldronX2+100, cauldronY+145,
           cauldronX2, cauldronY);
};