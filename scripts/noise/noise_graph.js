// Adapted from Dan Shiffman, natureofcode.com

var t = 0;

var draw = function() {
  var n = noise(t);

  // Using map() to customize the range of Perlin noise
  var x = map(n, 0, 1, 0, width);
  rect(0, t*100, x, 1);

  t += 0.01;
};
