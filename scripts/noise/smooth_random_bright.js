// Adapted from Dan Shiffman, natureofcode.com

var xoff = 0.0;
for (var x = 0; x < 100; x++) {
    var yoff = 0.0;
    for (var y = 0; y < 100; y++) {
        var bright = map(noise(xoff, yoff), 0, 1, 0, 255);
        stroke(bright, bright, bright);
        point(x, y);
        yoff += 0.01;
    }
    xoff += 0.01;
}
