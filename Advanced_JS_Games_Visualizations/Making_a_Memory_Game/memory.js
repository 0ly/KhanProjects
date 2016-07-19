/*You've seen how to make a basic "Memory" game, but there's lots more you could do with it. Extend the game, using your own ideas or some of ours below:

Add a hover state to the tiles, so that they change color when your mouse is over them.
Add a timer to the game, so that part of the score is how long it took the player.
Make a way cooler win state - maybe something like all the tiles cascading down the screen?
Allow the player to start a new game with a button, instead of having to click Restart.
Give the player an option to choose their board size.
Implement a two-player mode - either where the second player is programmatically controlled (the program randomly or smartly picking tiles), or manually controlled (if there are two players in front of same computer).
*/

//Modfied with highlight effect on tiles

//Modified to change tile color when the mouse if hovered over them

var Tile = function(x, y, face) {
    this.x = x;
    this.y = y;
    this.face = face;
    this.width = 70;
    
    //added the following properties for highlighting functionality
    this.defaultColor = color(214, 247, 202);
    this.highlightColor = color(235, 89, 136);
};

//added a parameter to the function to be used for highlighting when mouse hovers over the tile
Tile.prototype.drawFaceDown = function(highlight) {
    fill(highlight || this.defaultColor);
    strokeWeight(2);
    rect(this.x, this.y, this.width, this.width, 10);
    image(getImage("avatars/leaf-green"), this.x, this.y, this.width, this.width);
    this.isFaceUp = false;
};

//modfied to use highlight color for faceup tiles
Tile.prototype.drawFaceUp = function() {
    fill(this.highlightColor);
    strokeWeight(2);
    rect(this.x, this.y, this.width, this.width, 10);
    image(this.face, this.x, this.y, this.width, this.width);
    this.isFaceUp = true;
};

Tile.prototype.isUnderMouse = function(x, y) {
    return x >= this.x && x <= this.x + this.width  &&
        y >= this.y && y <= this.y + this.width;
};

// Global config
var NUM_COLS = 5;
var NUM_ROWS = 4;

// Declare an array of all possible faces
var faces = [
    getImage("avatars/leafers-seed"),
    getImage("avatars/leafers-seedling"),
    getImage("avatars/leafers-sapling"),
    getImage("avatars/leafers-tree"),
    getImage("avatars/leafers-ultimate"),
    getImage("avatars/marcimus"),
    getImage("avatars/mr-pants"),
    getImage("avatars/mr-pink"),
    getImage("avatars/old-spice-man"),
    getImage("avatars/robot_female_1")
];

// Make an array which has 2 of each, then randomize it
var possibleFaces = faces.slice(0);
var selected = [];
for (var i = 0; i < (NUM_COLS * NUM_ROWS) / 2; i++) {
    // Randomly pick one from the array of remaining faces
    var randomInd = floor(random(possibleFaces.length));
    var face = possibleFaces[randomInd];
    // Push twice onto array
    selected.push(face);
    selected.push(face);
    // Remove from array
    possibleFaces.splice(randomInd, 1);
}

// Now we need to randomize the array
selected.sort(function() {
    return 0.5 - Math.random();
});

// Create the tiles
var tiles = [];
for (var i = 0; i < NUM_COLS; i++) {
    for (var j = 0; j < NUM_ROWS; j++) {
        tiles.push(new Tile(i * 78 + 10, j * 78 + 40, selected.pop()));
    }
}

background(255, 255, 255);

// Now draw them face up
for (var i = 0; i < tiles.length; i++) {
    tiles[i].drawFaceDown();
}

var flippedTiles = [];
var delayStartFC = null;
var numTries = 0;

mouseClicked = function() {
    for (var i = 0; i < tiles.length; i++) {
        if (tiles[i].isUnderMouse(mouseX, mouseY)) {
            if (flippedTiles.length < 2 && !tiles[i].isFaceUp) {
                tiles[i].drawFaceUp();
                flippedTiles.push(tiles[i]);
                if (flippedTiles.length === 2) {
                    numTries++;
                    if (flippedTiles[0].face === flippedTiles[1].face) {
                        flippedTiles[0].isMatch = true;
                        flippedTiles[1].isMatch = true;
                    }
                    delayStartFC = frameCount;
                    loop();
                }
            } 
        }
    }
    
    var foundAllMatches = true;
    for (var i = 0; i < tiles.length; i++) {
        foundAllMatches = foundAllMatches && tiles[i].isMatch;
    }
    if (foundAllMatches) {
        fill(0, 0, 0);
        textSize(20);
        text("You found them all in " + numTries + " tries!", 20, 375);
    }
};

//when mouse is moved, check the tiles and if the tile is under the mouse and not flipped up, redraw it with highlight color, else redraw it as normal.
mouseMoved = function(){
    for (var i = 0; i < tiles.length; i++) {
        if (tiles[i].isUnderMouse(mouseX, mouseY)) {
            
            if (flippedTiles.length < 2 && !tiles[i].isFaceUp){
                tiles[i].drawFaceDown(tiles[i].highlightColor);
            }
        }else{
            if (flippedTiles.length < 2 && !tiles[i].isFaceUp){
                tiles[i].drawFaceDown();
            }
        }
    }
};
    
draw = function() {
    if (delayStartFC && (frameCount - delayStartFC) > 30) {
        for (var i = 0; i < tiles.length; i++) {
            if (!tiles[i].isMatch) {
                tiles[i].drawFaceDown();
            }
        }
        flippedTiles = [];
        delayStartFC = null;
        noLoop();
    }
};

//just for title
    fill(214, 247, 202);
    rect(108,4,212,30);
    fill(0, 0, 0);
    textSize(22);
    text("Color changing tiles", 116,25);