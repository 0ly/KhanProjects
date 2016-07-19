/*You're going to tell the story of Leafers, who starts as a seed and grows to Leafer's ultimate form, using scenes.

We've provided you with, drawScene1, a scene drawing function for the first scene where Leafers is just a seed, and drawScene5, a scene drawing function for the fifth (and last) scene where Leafers is in ultimate form.*/

//Step 1: Make the story respond to mouse clicks

/*Your task for this step is to add logic to the mouseClicked function so that :
- If the first scene is displayed and you click the mouse, it will display the last scene
- If the last scene is displayed and you click the mouse, it will display the first scene*/

//Step 2: Add the rest of the story

/*Add the second, third and fourth scenes to fill in the rest of the story.

Each scene should:
- update the scene index, currentScene, to the scene number
- draw a unique background
- display the image of Leafers
- have text describing the scene

In the second scene Leafers should be a seedling, in the third scene Leafers should be a sapling, and in the fourth scene Leafers should be a tree.

Don't worry about adding logic to mouseClicked to display these scenes in this step. You will do that next step.*/

//Step 3: Add logic to tell the whole story

/*Modify the program so that clicking on the mouse shows the scenes in order.
Clicking the mouse on the last scene should still make the first scene appear.*/


fill(0, 0, 0);
textSize(20);
textAlign(CENTER);

//images of Leafers
var seed= getImage("avatars/leafers-seed");
var seedling= getImage("avatars/leafers-seedling");
var sapling= getImage("avatars/leafers-sapling");
var tree= getImage("avatars/leafers-tree");
var ultimate = getImage("avatars/leafers-ultimate");

var currentScene;

var drawScene1 =function(){
    currentScene = 1;
    background(200, 175, 175);
    image(seed, 50,200);
    text("Leafers started out as a seed",200,50);
};
var drawScene2 =function(){
    currentScene = 2;
    background(189, 53, 53);
    image(seedling, 50,200);
    text("Leafers then became a seedling",200,50);
};

var drawScene3 =function(){
    currentScene = 3;
    background(47, 158, 47);
    image(sapling, 50,200);
    text("From seedling,\nLeafers promptly grew into a sapling",200,50);
};

var drawScene4 =function(){
    currentScene = 4;
    background(166, 42, 166);
    image(tree, 50,200);
    text("He wouldnt stay sapling for long,\n he eventually became a tree!",200,50);
};

var drawScene5 =function(){
    currentScene = 5;
    background(150, 150, 175);
    image(ultimate, 200,200);
    text("In the end, Leafers became Ultimate Leafers",200,50);
};

drawScene1();

mouseClicked=function(){
    
    if(currentScene === 1 ){
        drawScene2();
    }
    else if(currentScene === 2){
        drawScene3();
    }
     else if(currentScene === 3){
        drawScene4();
    }
     else if(currentScene === 4){
        drawScene5();
    }
     else if(currentScene === 5){
        drawScene1();
    }
};

