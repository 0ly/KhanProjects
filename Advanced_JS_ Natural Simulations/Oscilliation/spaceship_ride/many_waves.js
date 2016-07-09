/*
step one
This program defines a Wave object, so that we can create multiples waves with different periods and amplitudes easily. Like we did in our example, display the wave as a series of ellipses moving across the screen.
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

Wave.prototype.draw = function() {
};

var wave = new Wave(200, 175, color(255, 0, 0, 100));

translate(0, height/2);

draw = function() {
    background(255);
    wave.update();
    wave.draw();
};
