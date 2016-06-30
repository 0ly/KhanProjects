/*This walker walks a random step size in each direction, but we want it to use a normal distribution to pick the step size now.*/

/*Step 1: Initialize the generator*/
/*Start by storing a new Random() instance in the generator variable at the top of the program.*/

/*Step 2: Generate the values*/
/*Now use the generator to generate step sizes based on a normal distribution, with a mean of 0 and standard deviation of 2. Set the standardDeviation and mean variables at the top to the appropriate values and use them when calculating the step size in the walk method.*/

var generator = new Random(1);
var standardDeviation = 2;
var mean = 0;

var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    strokeWeight(3);
    stroke(0, 0, 0);
    point(this.x, this.y);
};

// Randomly move up, down, left, right, or stay in one place
Walker.prototype.walk = function() {
    var xStepSize = standardDeviation * generator.nextGaussian() + mean;
    var yStepSize = standardDeviation * generator.nextGaussian() + mean;
  
    this.x += xStepSize;
    this.y += yStepSize;
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
