/*Consider a simulation of paint splatter drawn as a collection of colored dots. Most of the paint clusters around a central location, but some dots do splatter out towards the edges. In this project, use what you've learnt to draw the paint splatter:

Use a normal distribution of random numbers to generate the locations of the dots.
Bonus: use a normal distribution of random numbers to generate a color palette.*/



var generator = new Random(1);

//Draw paint splatter on click
mouseClicked = function(){
    
    
    //variables for initial point position
    var x = mouseX;
    var y = mouseY;

    
    //deviation for points
    var standardDeviationPoint = 5;
    
    //means for point
    var meanX = x;
    var meanY = y;
    
    strokeWeight(3);
    stroke(156, 40, 46);
    
    //draw initial point
    point(x,y);
    
    
    //loop to draw additional points
    for(var i = 0; i < 50; i++){
            var numX = generator.nextGaussian();
            var numY = generator.nextGaussian();
            
            point(standardDeviationPoint * numX + meanX, standardDeviationPoint * numY + meanY);
        }
    
    
};



