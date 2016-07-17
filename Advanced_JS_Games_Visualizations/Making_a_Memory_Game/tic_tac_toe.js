/*For this challenge you are going to create the game of Tic-Tac-Toe. Here's a review of the rules:
- The game is played on a 3 by 3 grid of squares.
- One player is assigned the symbol "X" and the other player is assigned the symbol "O".
- Players take turns. On a player's turn they must put their symbol in an empty square.
- If a player has three of their symbol in a row, column or diagonal, they win the game.
- If no empty squares remain, and no player has won, then the game is declared a tie.*/

var playerTurn;
var NUM_COLS;
var NUM_ROWS;
var SYMBOLS;

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
