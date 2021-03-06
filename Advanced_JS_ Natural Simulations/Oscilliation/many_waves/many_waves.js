/*
step one
This program defines a Wave object, so that we can create multiples waves with different periods and amplitudes easily. Like we did in our example, display the wave as a series of ellipses moving across the screen.
*/
/*
step two
Now make, update, and draw another wave with different parameters from the first
*/
angleMode = "radians";

var Wave = function(amplitude, period, color) {
    this.startAngle = 0;
    this.amplitude = amplitude;
    this.period = period;
    this.color = color;
    this.angleVel = (TWO_PI / this.period) * 5;
};

Wave.prototype.update = function() {
    this.startAngle += TWO_PI / this.period;
};
/*
/*
 startAngle += 0.015;
  var angle = startAngle;

  for (var x = 0; x <= width; x += 24) {
    // Calculate the y location according to amplitude and sine of the angle.
    var y = amplitude * sin(angle);
    // Draw a circle at the x, y location
    stroke(0, 0, 0);
    fill(0, 0, 0, 50);
    strokeWeight(2);
    ellipse(x, y+height/2, 48, 48);
    // Increment the angle according to angular velocity
    angle += angleVel;
  }
*/
Wave.prototype.draw = function() {
    //step one
    var angle = this.startAngle;
    fill(this.color);

    for(var x = 0; x <= width; x += 24) {
        var y = this.amplitude * sin(angle);
        ellipse(x , y + height / 2, 48, 48);
        angle += this.angleVel;


    }
    //end step one
};

var wave = new Wave(200, 175, color(255, 0, 0, 100));
//step 2
var water = new Wave(50, 100, color(125, 128, 219,50));

translate(0, height/2);

draw = function() {
    background(255);
    wave.update();
    //step 2
    wave.draw();
    water.update();
    water.draw();
};
