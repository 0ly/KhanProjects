
/*Your task is to save baby Winston from the enemy bugs by blocking their paths with rocks.
*/

//Step 1: Move Rock #1

/*Use the translate, pushMatrix, and popMatrix commands to move rock #1 to the right, to block the path of the bug in the upper left.*/

//Step 2: Move Rock #2
/*Use the translate, pushMatrix, and popMatrix commands to move rock #2 to the left, to block the path of the bug in the upper right.*/


var drawLevel = function(){
    var babyWinston =getImage("creatures/BabyWinston");
    var enemybug = getImage("cute/EnemyBug");
    noStroke();
    var roomMatrix = [[1,2,1,1,1,2,1,1],
                      [0,0,1,1,1,0,0,0],
                      [1,0,1,1,1,0,1,1],
                      [1,0,0,0,0,0,1,1],
                      [1,1,0,0,0,0,1,1],
                      [2,0,0,0,0,0,0,0],
                      [1,0,1,1,1,0,1,0],
                      [1,0,1,1,1,0,0,2]];
    for(var row=0; row<roomMatrix.length; row++) {
        for(var col=0; col<roomMatrix[row].length; col++) {
            var id = roomMatrix[row][col];
            switch(id) {
                case 0:
                    fill(100, 150, 175);
                    rect(col*50,row*50,50,50);
                    break;
                case 1:
                    fill(100,100, 100);
                    rect(col*50,row*50,50,50);
                    break;
                case 2:
                    fill(100, 150,175);
                    rect(col*50,row*50,50,50);
                    pushMatrix();
                    scale(0.5);
                    image(enemybug,col*2*50,-55+row*2*50);
                    popMatrix();
                    break;
            }
        }
    }
    
    pushMatrix();
    scale(0.75);
    image(babyWinston,150,250);
    popMatrix();
};

var drawRock1 = function(){
    var rock = getImage("cute/Rock");
    var numberone = getImage("space/1");
    pushMatrix();
    scale(0.5);
    image(rock,0,40);
    popMatrix();
    pushMatrix();
    scale(0.25);
    image(numberone,60,240);
    popMatrix();
};

var drawRock2 = function(){
    var rock = getImage("cute/Rock");
    var numbertwo = getImage("space/2");
    pushMatrix();
    scale(0.5);
    image(rock,700,40);
    popMatrix();
    pushMatrix();
    scale(0.25);
    image(numbertwo,1460,240);
    popMatrix();
};

var drawRock3 = function(){
    var rock = getImage("cute/Rock");
    var numberthree = getImage("space/3");
    pushMatrix();
    scale(0.5);
    image(rock,100,640);
    popMatrix();
    pushMatrix();
    scale(0.25);
    image(numberthree,260,1440);
    popMatrix();
};

var drawRock4 = function(){
    var rock = getImage("cute/Rock");
    var numberfour = getImage("space/4");
    pushMatrix();
    scale(0.5);
    image(rock,400,240);
    popMatrix();
    pushMatrix();
    scale(0.25);
    image(numberfour,860,640);
    popMatrix();
};

// Draw Level
drawLevel();
    
// Draw Rock #1
pushMatrix();
translate(50,0);
drawRock1();
popMatrix();

// Draw Rock #2
pushMatrix();
translate(-100,0);
drawRock2();
popMatrix();

// Draw Rock #3
drawRock3();

// Draw Rock #4
drawRock4();

