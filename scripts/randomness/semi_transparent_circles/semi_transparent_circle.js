// Adapted from Dan Shiffman, natureofcode.com
//semitransparent circles

var generator = new Random(1);

var draw = function() {
    // The nextGaussian() function returns a normal distribution of random numbers with the following parameters: a mean of zero and a standard deviation of one
    var num = generator.nextGaussian();
    var standardDeviation = 60;
    var mean = 200;

    // Multiply by the standard deviation and add the mean.
    var x = standardDeviation * num + mean;

    noStroke();
    fill(214, 159, 214, 10);
    ellipse(x, 200, 16, 16);
};
*/
