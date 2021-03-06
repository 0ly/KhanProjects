/*We've walked through the most basic version of this game, and hey, it's also pretty easy. Now that you understand it, try to make it more difficult and interesting. Here are some ideas for what you could do:

Invert the collision mechanism - make it so that the beaver has to get through a hole, without touching the sides.
Add obstacles that decrement the score - like bad sticks or holes in the ground.
Add NPCs- characters that attack the beaver, and have programmatically controlled movement of their own.
Add multiple levels, with increasing levels of difficulty (like new types of obstacles).
Add a cooler win state.*/

//TODO: Implement a better end of level action
    //*Done*Check if last stick has been drawn and is off screen 
    //If so
        //*Done* Stop scrolling movement
        //Check score
            //If stick count reached winning criteria
                //Display winning message
                //add an animation or some other effect (ex, fireworks in the background or make hoppy hop)
                //add button to restart game
            //else
                //Display losing message
                //add an animation or some other effect (ex, darken background, make a sad hoppy?)
                //add button to restart game
/*                
TODO: Make the game more difficult
    
    -*DONE*Game speed increases as sticks are collected

*/     

var Beaver = function(x, y) {
    this.x = x;
    this.y = y;
    this.img = getImage("creatures/Hopper-Happy");
    this.sticks = 0;
    this.difficulty = 1;
};

Beaver.prototype.draw = function() {
    fill(255, 0, 0);
    this.y = constrain(this.y, 0, height-50);
    image(this.img, this.x, this.y, 40, 40);
};

Beaver.prototype.hop = function() {
    this.img = getImage("creatures/Hopper-Jumping");
    this.y -= 5;
};

/* For future implementation
Beaver.prototype.celebrate = function() {
   //beaver jumping up and down login here
};
*/

Beaver.prototype.fall = function() {
    this.img = getImage("creatures/Hopper-Happy");
    this.y += 5;
};

//Point accumulation && difficulty adjustment
Beaver.prototype.checkForStickGrab = function(stick) {
    if ((stick.x >= this.x && stick.x <= (this.x + 40)) &&
        (stick.y >= this.y && stick.y <= (this.y + 40))) {
        stick.y = -400;
        this.sticks++;
        //increases difficulty
        this.difficulty +=0.3;
    }
};

var Stick = function(x, y) {
    this.x = x;
    this.y = y;
};

Stick.prototype.draw = function() {
    fill(89, 71, 0);
    rectMode(CENTER);
    rect(this.x, this.y, 5, 40);
};

var beaver = new Beaver(200, 300);

var sticks = [];
for (var i = 0; i < 40; i++) {  
    sticks.push(new Stick(i * 40 + 300, random(20, 260)));
}

var grassXs = [];
for (var i = 0; i < 25; i++) { 
    grassXs.push(i*20);
}
//bool to track level state
var challengeFinish = false;

draw = function() {
    
    // static
    background(227, 254, 255);
    fill(130, 79, 43);
    rectMode(CORNER);
    rect(0, height*0.90, width, height*0.10);
    
    for (var i = 0; i < grassXs.length; i++) {
        image(getImage("cute/GrassBlock"), grassXs[i], height*0.85, 20, 20);
        
        //scroll grass as long as the level/challenge is not finished
        if(!challengeFinish){  
            grassXs[i] -= 1;
            if (grassXs[i] <= -20) {
                grassXs[i] = width;
             }
        }
    }
    

    for (var i = 0; i < sticks.length; i++) {
        sticks[i].draw();
        beaver.checkForStickGrab(sticks[i]);
        //rate at which the sticks scroll based
        sticks[i].x -= beaver.difficulty;
    }
    //end of level check
    if(sticks[sticks.length - 1].x < -20){
        challengeFinish = true;
        textSize(36);
        
        //check score and display appropriate message
        if (beaver.sticks/sticks.length >= 0.50) {
            text("YOU WIN!!!!", 100, 200);
        }else{
            text("YOU LOSE!!!!", 100, 200);
        }
    }
    
    //Displaying score    
    textSize(18);
    text("Score: " + beaver.sticks, 20, 30);
    
    //player movement
    if (keyIsPressed && keyCode === 0) {
        beaver.hop();
    } else {
        beaver.fall();
    }
    
    beaver.draw();
};

