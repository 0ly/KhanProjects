/*Turn this random walker into a faster, more colorful random blobber.*/

var Walker = function() {
    this.x = width/2;
    this.y = height/2;
};

Walker.prototype.display = function() {
    stroke(0, 0, 0);
    //point(this.x, this.y);
    noStroke();
    fill(219, 81, 81);
    ellipse(this.x,this.y, 20,20);
    
    
};

// Randomly move right, left, down, or up

Walker.prototype.walk = function() {
    var speed = 5;
    var choice = floor(random(4));
    if (choice === 0) {
        //move right
        this.x+=speed;
    } else if (choice === 1) {
        //move left
        this.x-=speed;
    } else if (choice === 2) {
        //move down
        this.y+=speed;
    } else {
        //move up
        this.y-=speed;
    } 
};

var w = new Walker();

draw = function() {
    w.walk();
    w.display();
};
