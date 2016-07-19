// Adapted from Dan Shiffman, natureofcode.com

for (var x = 0; x < 100; x++) {
  for (var y = 0; y < 100; y++) {
    // A random brightness!
    var bright = random(255);
    stroke(bright, bright, bright);
    point(x, y);
  }
}
