/*Practice using the static functions on PVector. */

/*Step 1: Multply!*/
/*Start by creating a new vector u that's equal to v multiplied by 2.*/
/*Step 2: Subtract */
/*Now, make a new vector that is equal to v minus u.*/
/*Step 3: Divide!*/
/*Finally, divide the last vector you created by 3 - changing the vector itself.*/



var v = new PVector(1,5);
var u = PVector.mult(v,2);
var w = PVector.sub(v,u);
w.div(3);
