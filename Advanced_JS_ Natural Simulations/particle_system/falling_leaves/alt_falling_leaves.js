//step one
/*
One common use of particle systems is to simulate falling leaves. We've drawn a tree in this program and included a leaf-like Particle object in the code, and want you to make it so that clicking somewhere will make a leaf fall from that point.
*/
//step two
/*
Right now, your leaves are falling off screen forever, because we didn't give them a lifespan or any stopping mechanism. Since they're leaves, they should probably stop falling once they hit the ground, right? Add conditional logic so that the leaves pile up on the bottom of the screen.
*/
//step three
/*
Leaves usually spin as they fall. Use the technique from the angular velocity section to make the leaves spin as they fall from the tree (not too fast!).
*/
angleMode = "radians";
//step three
var Particle = function(position) {
    this.acceleration = new PVector(0, 0.05);
    this.velocity = new PVector(random(0, 1), random(0, 0));
    this.position = position;
    this.angle = 0;
    this.aVelocity = 0;
    this.aAcceleration = 0.005;
};



Particle.prototype.run = function() {
    this.update();
    this.display();
};
//step three
Particle.prototype.update = function(){


    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.aVelocity += this.aAcceleration;
     this.angle += this.aVelocity;

};
Particle.prototype.display = function() {
    image(getImage("avatars/leaf-green"), this.position.x, this.position.y, 40, 40);
};

var Tree = function(position, options) {
    this.position = position.get();
    this.branchingFactor = 3;
    this.angleBetweenBranches = 32;
    this.scaleFactor = 0.7;
    this.numLevels = 4;
    this.baseBranchLength = 120;
};

Tree.prototype.display = function() {
    var self = this;

    var forward = function(distance) {
        line(0, 0, 0, -distance);
        translate(0, -distance);
    };

    var back = function(distance) {
        forward(-distance);
    };

    var right = function(angle) {
        rotate(angle * PI / 180);
    };

    var left = function(angle) {
        right(-angle);
    };

    var drawTree = function(depth, length) {
        if (depth === 0) {
            image(getImage("avatars/leaf-green"), -10, -30, 40, 40);
            return;
        }
        var totalAngle = self.angleBetweenBranches * (self.branchingFactor - 1);

        strokeWeight(depth*5);
        forward(length);
        right(totalAngle / 2.0);
        for (var i = 0; i < self.branchingFactor; i += 1) {
            drawTree(depth - 1, length * self.scaleFactor);
            left(self.angleBetweenBranches);
        }
        right(totalAngle / 2.0 + self.angleBetweenBranches);
        back(length);
    };

    pushMatrix();
    translate(this.position.x, this.position.y);
    stroke(122, 112, 85);
    drawTree(this.numLevels, this.baseBranchLength);
    popMatrix();
};

var leaves = [];
var tree = new Tree(new PVector(width/2, 400));

//step one
mouseClicked = function() {

leaves.push(new Particle (new PVector(mouseX, mouseY)));
};

draw = function() {
    background(194, 231, 255);
    tree.display();

    //step one
    for( var i = 0 ; i < leaves.length ; i++) {
     var leaf = leaves[i];

    leaf.run();
    }

    //step two
     for ( var i = 0; i < leaves.length; i++) {var leaf = leaves[i];

    if(leaf.position.y > 370) {
         leaf.acceleration.set (0, 0);
        leaf.velocity.set(0,0);
        leaf.aAcceleration = 0;
        leaf.aVelocity = 0;

      }
    }
};
