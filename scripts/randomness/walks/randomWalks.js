// left right up down walker.
//*****************************
//*random left right up down walker*
//create a walker object
/*
var Walker = function() {
draw = function() {
};
*/

/*********************************************
/*****************************************
// improved random walker.
//create a walker object
/*
Walker.prototype.walk = function() {
        this.y--; //up
    }
};

//create our Walker
//var w = new Walker();
//display

draw = function() {
    w.walk();
    w.display();
};
*/

//*****************************
//*probablity to move in a direction**

// Adapted from Dan Shiffman, natureofcode.com
/*
var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};
// walker display
Walker.prototype.display = function() {
    stroke(0, 0, 0);
    point(this.x, this.y);
};

// Randomly move up, down, left, right, or stay in one place
Walker.prototype.walk = function() {
    var r = random(1);

    // It will be most likely to move to the right
    if (r < 0.4) {
      this.x++; //right
    } else if (r < 0.6) {
      this.x--;// left
    } else if (r < 0.8) {
      this.y++;// up
    } else {
      this.y--; // down
    }
};
// create walker
var w = new Walker();

var draw = function() {
    w.walk();
    w.display();
};
*/
