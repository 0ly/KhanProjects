/*You are going to make a small game. In this game, the player races their rabbit (the rightmost rabbit) toward the finish line against 3 other rabbits.

The player's rabbit will be controlled by a button.
*/

/*Step 1: Creating a button*/
/*Your task, for this step, is to:
- create a button, btn1, directly beneath the rightmost rabbit
- make sure the button is drawn on the screen*/

//Step 2: Configuring the button
/*Now customize your button:
- change the width and height (make the button a reasonable size)
- change the color
- change the label

Notice that we didn't have to set these properties in the config object before (these properties were optional).*/


//Step 3: Making the button functional
/*Now let's make the button actually do something!

Change the onClick method for your button, so that it calls a method on the player's rabbit (the last rabbit in the rabbits array) to make it hop forward.*/

/*************
*OBJECT TYPES
**************/

/******************
*Button Object Type
*******************/

/*************
*OBJECT TYPES
**************/

/******************
*Button Object Type
*******************/

var Button = function(config) {
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 80;
    this.height = config.height || 50;
    this.label = config.label || "Click";
    this.color = config.color || color(207, 85, 85);
    this.onClick = config.onClick || function() {};
};

//draw the button
Button.prototype.draw = function() {
    if (this.isMouseInside() && mouseIsPressed) {
        fill(255, 255, 255);
    }
    else {
       fill(this.color); 
    }
    rectMode(CENTER);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(CENTER, CENTER);
    text(this.label, this.x, this.y);
};

//check if mouse cursor is inside the button
Button.prototype.isMouseInside = function() {
    return mouseX > this.x-this.width/2 &&
           mouseX < (this.x + this.width/2) &&
           mouseY > this.y - this.height/2 &&
           mouseY < (this.y + this.height/2);
};

//handle mouse clicks for the button
Button.prototype.handleMouseClick = function() {
    if (this.isMouseInside()) {
        this.onClick();
    }
};

/******************
*Rabbit Object Type
*******************/

var Rabbit = function(x, y){
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.angle = 90;
    this.steps = 0;
    this.FRICTION = 0.2;
    this.HOP_SPEED = 3;
};

//make the rabbit hop forward
Rabbit.prototype.hop = function() {
    this.speed = this.HOP_SPEED;
};

//update the rabbits position and speed
Rabbit.prototype.update = function() {
    this.y -= this.speed;
    if(this.speed > 0){
        this.speed -= this.FRICTION;
    }
    else if(this.speed < 0){
        this.speed = 0;
    }
};

//draw the rabbit
Rabbit.prototype.draw = function() {
    ellipseMode(CENTER);
    angleMode = "degrees";
    translate(this.x, this.y);
    rotate(-this.angle-90);
    fill(255, 255, 255);
    noStroke();
    ellipse(0, -7, 2, 5);
    fill(0, 0, 0);
    ellipse(0, 0, 10, 16);
    fill(255, 255, 255);
    ellipse(0, 6, 8, 9);
    fill(0, 0, 0);
    ellipse(0, 9, 6, 8);
    triangle(-3, 8, 0, 8, -1, -1);
    triangle(3, 8, 0, 8, 2, -1);
    fill(255, 255, 255);
    stroke(255, 255, 255);
    triangle(-1, 12, 1, 12, 0, 13);
    resetMatrix();
};

/**************
*MAIN PROGRAM
***************/

/** create object instances **/

//create rabbits
var rabbits = [];
for (var i = 0; i < 4; i++) {
    rabbits.push(new Rabbit(50 + 100 * i, 300));
}

/*
Attempted to just use the final element of the array, but the checker wanted hard coded values, rather than rab.x or rab.y + 50

var rab = rabbits[rabbits.length - 1];

*/

//create button
var btn1 = new Button({
  
    x: 350,
    y: 350,
    width: 50,
    height: 35,
    color: color(217, 255, 0),
    label: "GO!",
    onClick: function(){
        rabbits[rabbits.length -1].hop();
    }

    /*
    x: rab.x,
    y: rab.y + 50
    */

});

draw = function() {
    background(98, 122, 54);
    
    //Draw the finish line
    rectMode(CORNER);
    stroke(0, 0, 0);
    for (var i = 0; i < width - 20; i += 40) {
        fill(0, 0, 0);
        rect(i, 20, 20, 20);
        rect(i + 20, 40, 20, 20);
        fill(255, 255, 255);
        rect(i+20, 20, 20, 20);
        rect(i, 40, 20, 20);
    }
    
    //Draw the racers
    for (var i = 0; i < rabbits.length; i++) {
        rabbits[i].update();
        rabbits[i].draw();
        
        if (i < 3 && frameCount % 15 === 0) {
            if (random(1) < 0.5) {
                rabbits[i].hop();
            }
        }
    }
    
    //Draw the button
    btn1.draw();
};

mouseClicked = function() {
    btn1.handleMouseClick();
};
