/*This challenge is based on the classic computer game Pong (a table tennis simulator). You will program the paddle for Player 1 (the paddle on the left) to respond to the keyboard.
*/

//Step 1: Creating a movable player
/*For this step, add logic to the draw() function so that:
- When the UP arrow key is pressed, the paddle on the left moves up
- When the DOWN arrow key is pressed, the paddle on the left moves down
- When no key is pressed, the paddle on the left does not move*/

//Step 2: Keeping things in bound
/*In this step, you will make sure that the paddle for Player 1 stays on the canvas.

Use the constrain() function to keep the center of the left paddle between the top and bottom of the canvas.

It is okay and expected that part of the left paddle will be able to go off the canvas when the paddle approaches the top and bottom edges of the canvas. This is okay as long as the center of the paddle still remains on the canvas.*/


var player1Y = height/2;
var player2Y = height/2;
var player1Score = 0;
var player2Score = 0;
var ball;
var gameStarted = false;
var t = 0;

//Constants
var PAUSE_TIME = 60;
var PLAYER_MOVE_SPEED = 2;
var BALL_SPEED = 2.5;
var PADDLE_HEIGHT = 100;
var PADDLE_WIDTH = 20;

angleMode = "degrees";

var Ball = function(position, speed) {
    this.position = position;
    this.speed = speed || BALL_SPEED;
    
    this.radius = 12;
    
    this.resetVelocity = function() {
        this.theta = random(0, 360);
        this.velocity = new PVector(
        this.speed*cos(this.theta), -this.speed*sin(this.theta));
        player2Y = height/2;
    };
    this.resetVelocity();
    
    this.draw = function() {
        fill(255, 255, 255);
        noStroke();
        ellipse(this.position.x, this.position.y,
        this.radius*2, this.radius*2);
    };
    
    this.collideWithPaddle = function(x, y) {
        if (this.position.x - this.radius < x + PADDLE_WIDTH/2 &&
        this.position.x + this.radius > x - PADDLE_WIDTH/2) {
            if (dist(0, this.position.y, 0, y) <
            PADDLE_HEIGHT/2 + this.radius) {
                if (this.position.x > x) {
                    this.position.x = x + 
                    this.radius + PADDLE_WIDTH/2;
                }
                else if (this.position.x < x) {
                    this.position.x = x - 
                    this.radius - PADDLE_WIDTH/2;
                }
                this.velocity.mult(new PVector(-1, 1));
            }
        }
    };
    
    this.update = function() {
        //Handle wall collisions
        if (this.position.x < 0) {
            player2Score++;
            this.position = new PVector(width/2, height/2);
            gameStarted = false;
            this.resetVelocity();
        }
        else if (this.position.x > width) {
            player1Score++;
            this.position = new PVector(width/2, height/2);
            gameStarted = false;
            this.resetVelocity();
        }
        if (this.position.y < 0) {
            this.position.y = 0;
            this.velocity.mult(new PVector(1, -1));
        }
        else if (this.position.y > height) {
            this.position.y = height;
            this.velocity.mult(new PVector(1, -1));
        }
        
        //Handle paddle collisions
        this.collideWithPaddle(20, player1Y);
        this.collideWithPaddle(width-20, player2Y);
        
        this.position.add(this.velocity);
    };
};

ball = new Ball(new PVector(width/2, height/2));

var drawScores = function() {
    var s;
    
    fill(255, 255, 255);
    textSize(20);
    
    s = "Player 1: " + player1Score;
    text(s, width*0.25-textWidth(s)/2, 25);
    s = "Player 2: " + player2Score;
    text(s, width*0.75-textWidth(s)/2, 25);
};

var updatePlayer2 = function() {
    if (abs(player2Y-ball.position.y) < PLAYER_MOVE_SPEED){
        player2Y = ball.position.y;
    }
    else if (player2Y-ball.position.y >= PLAYER_MOVE_SPEED) {
        player2Y -= PLAYER_MOVE_SPEED;
    }
    else if (player2Y-ball.position.y <= PLAYER_MOVE_SPEED) {
        player2Y += PLAYER_MOVE_SPEED;
    }
    
};

//Move the player up
var movePlayerUp = function() {
    player1Y -= PLAYER_MOVE_SPEED;
};

//Move the player down
var movePlayerDown = function() {
    player1Y += PLAYER_MOVE_SPEED;
};

var drawPlayers = function() {
    //Constrain the player movement
     player1Y = constrain(player1Y, 0, height);
    
    
    rectMode(CENTER);
    fill(255, 255, 255);
    rect(20, player1Y, PADDLE_WIDTH, PADDLE_HEIGHT);
    rect(width-20, player2Y, PADDLE_WIDTH, PADDLE_HEIGHT);
};

draw = function() {
    //Control Player 1
    if(keyIsPressed){

        if(keyCode === UP){
            movePlayerUp();
        }

        else if(keyCode=== DOWN){
            movePlayerDown();
        }
    }

    //Draw the environment
    background(0, 0, 0);
    updatePlayer2();
    drawPlayers();
    drawScores();
    stroke(255, 255, 255);
    line(width/2, 0, width/2, height);
    
    //Draw the ball
    ball.draw();
    
    if (!gameStarted) {
        t++;
        if (t >= PAUSE_TIME) {
            t = 0;
            gameStarted = true;
        }
        return;
    }
    
    ball.update();
};
