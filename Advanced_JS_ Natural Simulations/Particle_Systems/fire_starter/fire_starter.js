/*This program creates new particle systems once the user clicks, and you're going to make those systems look like fire in this challenge.*/

//Step 1: Add an initial systems
/*However, it'll be a lot easier to see your changes if your program starts off with at least one system, so you don't have to keep clicking. Do that now.*/

//Step 2: Make it look like fire!
/*This particle system doesn't look like fire - it's colored white and accelerates downwards. Make it look like fire, with the particles flying upward, and their color changing from red to yellow throughout their lifespan. 
You'll use a new color mode for this step, which makes things easier. The HSB color mode changes what the 3 first parameter of color functions do from (red, green, blue) that you use all the time to (hue, saturation, brightness):
- Hue: gives colors their colorfulness. 0 for red, 43 for yellow, 85 for green... Test it by yourself!;
- Saturation: how lively should the color be. Goes from 0 (bland) to 255 (lively);
- Brightness: how bright should the color be. Goes from 0 (dark) to 255 (bright);*/

//Step 3: Make lines of fire!
/*It's pretty neat how you can now create fires when you click. But you know what'd be even cooler? If you can create fires as you drag your mouse, to make lines of fire. Try that now*/

angleMode = "radians";

var Particle = function(position) {
    //negative y value for fire going upwards effect
    this.acceleration = new PVector(0, -0.05);
    this.velocity = new PVector(random(-1, 1), random(-1, 0));
    this.position = position.get();
    this.timeToLive = 100;
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
    
    //adjustment to make ellipses have the fire look
    colorMode(HSB);
    var hue = (100 - this.timeToLive)/2;

    noStroke();
    fill(hue, 255, 255, this.timeToLive);
    ellipse(this.position.x, this.position.y, 12, 12);
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
        
        var p = this.particles[i];

        try {   // Let's try, but don't freak out if it fails
            p.run();    // Trying to run particle
        } catch (e) {   // Dammit, something went wrong
            throw ({    // Hack Oh Noes and tell the user
                message: "Make sure the values you pass to the fill() function are always positive. " + e
            });
        }
        
        if (p.isDead()) {
            this.particles.splice(i, 1);
        }
    }
};

// We start off with an empty systems array
var systems = [];

//Initial System (Step 1)
systems.push(new ParticleSystem(new PVector(0,0)));

// We fill up the leaves array with positions
var leaves = [];
for (var i = 0; i < 100; i++) {
    leaves.push(new PVector(random(0, width), random(0, height)));
}

mouseClicked = function() {
    systems.push(new ParticleSystem(new PVector(mouseX, mouseY)));
};

//Create a line of fire when mouse is dragged
mouseDragged = function(){
    systems.push(new ParticleSystem(new PVector(mouseX, mouseY)));
};


draw = function() {
    colorMode(RGB);
    background(66, 57, 11);
    
    for (var i = 0; i < leaves.length; i++) {
        image(getImage("avatars/leaf-orange"), leaves[i].x, leaves[i].y, 30, 30);
    }
    for (var i = 0; i < systems.length; i++){
        systems[i].addParticle();
        systems[i].run();
    }
};

