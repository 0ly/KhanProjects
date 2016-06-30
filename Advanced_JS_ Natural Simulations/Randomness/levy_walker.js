// Generates random numbers using the Monte Carlo Method
/*The steps of this walker follow an uniform distribution - all step lengths are equally likely - as they are based on the random function. We want you to change it to a probability distribution - smaller steps are more likely - by using the values from the monteCarlo function instead.*/

//Step 1: Use the Monte Carlo method

//Step 2: Make it prefer short distances
/* This monteCarlo function tends to yield higher numbers, but we want a Levy walk, which should be more likely to yield lower numbers. Change the monteCarlo function so that the probability is higher for lower numbers instead. Hint: 1 character is all you need to change.*/



var monteCarlo = function() {
    while (true) {
        var r1 = random(1);
        var probability = r1;
        var r2 = random(1);
        if (r2 > probability) {
            return r1;
        }
    }
};

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
     var stepSize = monteCarlo() * random(0,10);
 
    var xStepSize = random(-stepSize, stepSize);
    var yStepSize = random(-stepSize, stepSize);
 
    this.x += xStepSize;
    this.y += yStepSize;
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
