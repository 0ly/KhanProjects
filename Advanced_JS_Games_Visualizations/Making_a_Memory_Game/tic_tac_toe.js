/*For this challenge you are going to create the game of Tic-Tac-Toe. Here's a review of the rules:
- The game is played on a 3 by 3 grid of squares.
- One player is assigned the symbol "X" and the other player is assigned the symbol "O".
- Players take turns. On a player's turn they must put their symbol in an empty square.
- If a player has three of their symbol in a row, column or diagonal, they win the game.
- If no empty squares remain, and no player has won, then the game is declared a tie.*/


//Step 1: Creating the game board
/*For this step, you will need to create and assign values to the following variables:
- NUM_ROWS and NUM_COLS for the number of rows and columns of tiles required to represent the grid of squares.
- SYMBOLS for the symbols assigned to each player. For this challenge, the first symbol in the array should be the symbol for the player who moves first.
- playerTurn to keep track of whose turn it is. It should hold the index for the symbol in the SYMBOLS array for whose turn it is.*/

//Step 2: Detecting mouse clicks
/*For this step of the challenge you will complete Tile's handleMouseClick method.

The handleMouseClick method has two parameters: x and y which represent the coordinates of where the user clicked the mouse. When a user clicks inside a tile, that tile's handleMouseClick method should call that tile's onClick method.

To check if the mouse click is inside of the tile, you will need an if statement that checks if:
- the mouse click is on, or right of, the left edge of the tile
- the mouse click is on, or left of, the right edge of the tile
- the mouse click is on, or below, the upper edge of the tile
- the mouse click is on, or above, the lower edge of the tile */

var playerTurn = 0;
var NUM_COLS = 3;
var NUM_ROWS = 3;
var SYMBOLS = ["X", "O"];

var tiles = [];

var checkWin = function() {
    
};

var Tile = function(x, y) {
    this.x = x;
    this.y = y;
    this.size = width/NUM_COLS;
    this.label = "";
};

Tile.prototype.draw = function() {
    fill(214, 247, 202);
    strokeWeight(2);
    rect(this.x, this.y, this.size, this.size, 10);
    textSize(100);
    textAlign(CENTER, CENTER);
    fill(0, 0, 0);
    text(this.label, this.x+this.size/2, this.y+this.size/2);
};

Tile.prototype.empty = function() {
    return this.label === "";
};

Tile.prototype.onClick = function() {
    // If the tile is not empty, exit the function
    
    // Put the player's symbol on the tile
    
    // Change the turn
};

Tile.prototype.handleMouseClick = function(x, y) {
     // Check for mouse clicks inside the tile
    if( x >= this.x && x <= this.x + this.size &&
        y >= this.y && y <=this.y  + this.size )
    {
        this.onClick();
    }
};

for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        tiles.push(new Tile(i * (width/NUM_COLS-1), j * (height/NUM_ROWS-1)));
    }
}

var drawTiles = function() {
    for (var i in tiles) {
        tiles[i].draw();
    }
};

mouseReleased = function() {
    for (var i in tiles) {
        tiles[i].handleMouseClick(mouseX, mouseY);
    }
};

draw = function() {
    background(143, 143, 143);
    drawTiles();
};
