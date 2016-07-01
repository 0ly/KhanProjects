/*This walker takes a random step each time. Change it to use a noise-based step size instead. The best way to do this is to setup two timer properties for x and y that you increment each time, and map to a reasonable value.*/

/*Step 1: Use noise for the step size*/

var Walker = function() {
    this.x = width/2;
    this.y = height/2;

    //noise time   
    this.tx = 0;
    this.ty = 10000;
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.x, this.y);
};

Walker.prototype.walk = function() {
 
    //mapping noise to stepsize
    var xStepSize = map(noise(this.tx), 0, 1, 0, width);
    var yStepSize = map(noise(this.ty), 0, 1, 0, height);
    
    //adjusting x/y positions
    this.x = xStepSize;
    this.y = yStepSize;

    //incrementing time for noise
    this.tx += 0.01;
    this.ty += 0.01;
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
