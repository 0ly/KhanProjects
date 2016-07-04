/*These logs should be decelerating when they hit the water, from the fluid resistance, but they're bouncing back up! */

/*Step 1: Add fluid resistance*/
/*Fix that by calculating and applying the drag force at the appropriate time, using methods from the Liquid object.*/


/*Step 2: Different Widths! */
/*These logs are all the same width now, BORING! Randomize the widths when the logs are first created, in some reasonable range.*/


var Liquid = function(x, y, w, h, c) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.c = c;
};
  
Liquid.prototype.contains = function(m) {
    var l = m.position;
    return l.x > this.x && l.x < this.x + this.w &&
           l.y > this.y && l.y < this.y + this.h;
};
  
Liquid.prototype.calculateDrag = function(m) {
    var speed = m.velocity.mag();
    var dragMagnitude = this.c * speed * speed;
    
    var dragForce = m.velocity.get();
    dragForce.mult(-1);

    dragForce.normalize();
    dragForce.mult(dragMagnitude);
    return dragForce;
};
  
Liquid.prototype.display = function() {
    noStroke();
    fill(126, 138, 242);
    rect(this.x, this.y, this.w, this.h);
};

var Log = function(w, x, y) {
    this.mass = 1;
    this.width = w;
    this.position = new PVector(x, y);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};
  
Log.prototype.applyForce = function(force) {
    var f = PVector.div(force, this.mass);
    this.acceleration.add(f);
};
  
Log.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Log.prototype.display = function() {
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(184, 150, 55);
    rect(this.position.x, this.position.y, this.width, this.mass*16);
};

Log.prototype.checkEdges = function() {
    if (this.position.y > height) {
        this.velocity.y *= -1;
        this.position.y = height;
    }
};

var logs = [];
var liquid = new Liquid(0, height/2, width, height/2, 0.1);

for (var i = 0; i < 5; i++) {
    logs[i] = new Log(random(20, 65), 20+i*width/5, 0);
}
    
draw = function() {
    background(235, 254, 255);
    liquid.display();

    for (var i = 0; i < logs.length; i++) {
        
        //liquid check
        if(liquid.contains(logs[i])){

            var dragForce = liquid.calculateDrag(logs[i]);
            logs[i].applyForce(dragForce);
        }

        var gravity = new PVector(0, 0.1*logs[i].mass);
        logs[i].applyForce(gravity);
        
        logs[i].update();
        logs[i].display();
        logs[i].checkEdges();
    }
};