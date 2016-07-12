/*You're going to tell the story of Leafers, who starts as a seed and grows to Leafer's ultimate form, using scenes.

We've provided you with, drawScene1, a scene drawing function for the first scene where Leafers is just a seed, and drawScene5, a scene drawing function for the fifth (and last) scene where Leafers is in ultimate form.*/

//Step 1: Make the story respond to mouse clicks

/*Your task for this step is to add logic to the mouseClicked function so that :
- If the first scene is displayed and you click the mouse, it will display the last scene
- If the last scene is displayed and you click the mouse, it will display the first scene*/

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

var drawScene5 =function(){
    currentScene = 5;
    background(150, 150, 175);
    image(ultimate, 200,200);
    text("In the end, Leafers became Ultimate Leafers",200,50);
};

drawScene1();

mouseClicked=function(){
    
    if(currentScene === 1 ){
        drawScene5();
    }else{
        drawScene1();
    } 
};

