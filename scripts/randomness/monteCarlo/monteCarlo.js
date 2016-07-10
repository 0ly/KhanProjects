// monte carlo
/*
One solution is to pick two random numbers instead of one. The first random number is just that, a random number. The second one, however, is what we’ll call a “qualifying random value.” It will tell us whether to use the first one or throw it away and pick another one. Numbers that have an easier time qualifying will be picked more often, and numbers that rarely qualify will be picked infrequently. Here are the steps (for now, let’s consider only random values between 0 and 1):

    Pick a random number: R1

    Compute a probability P that R1 should qualify. Let’s try: P = R1.

    Pick another random number: R2

    If R2 is less than P, then we have found our number—R1!

    If R2 is not less than P, go back to step 1 and start over.
*/
// montecarlo algorithm

// Adapted from Dan Shiffman, natureofcode.com

// A function that will generate random numbers, but prefer higher numbers. Named after the Monte Carlo Method

var monteCarlo = function() {

    // We do this “forever” until we find a qualifying random value.
    while (true) {
        // Pick a random value.
        var r1 = random(1);
        // Assign a probability.
        var probability = r1;
        // Pick a second random value.
        var r2 = random(1);
        // Does it qualify? If so, we’re done!
        if (r2 < probability) {
            return r1;
        }
    }
};

// Generate 10 random numbers and size ellipses based on them
for (var i = 0; i < 10; i++) {
    var num = monteCarlo();
    println(num);
    var radius = num*30;
    ellipse(num*380, 50, radius, radius);
}
