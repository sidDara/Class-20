var fixedBall, movingBall;





function setup() {
  createCanvas(800,400);
  fixedBall = createSprite(400, 200, 50, 50);
  movingBall = createSprite(400, 200, 50, 50);
 
  movingBall.shapeColor = "green"
  fixedBall.shapeColor = "blue"

}

function draw() {
  background(0);
  movingBall.x = World.mouseX
  movingBall.y = World.mouseY

  var maxDistanceBetween = (fixedBall.width + movingBall.width)/2
  var distanceBetweenLeft = (movingBall.x - fixedBall.x); 
  var distanceBetweenRight = (fixedBall.x - movingBall.x) ;
  
  var maxDistanceBetween2 = (fixedBall.height + movingBall.height)/2
  var distanceBetweenTop = (movingBall.y - fixedBall.y); 
  var distanceBetweenBottom = (fixedBall.y - movingBall.y) ;
  
  if ((distanceBetweenLeft < maxDistanceBetween) && (distanceBetweenRight < maxDistanceBetween) && (distanceBetweenTop < maxDistanceBetween2)&&(distanceBetweenBottom < maxDistanceBetween2)){
    movingBall.shapeColor = "red"
    fixedBall.shapeColor = "red"
  } 
  else{
    movingBall.shapeColor = "green"
    fixedBall.shapeColor = "blue"
  }
  

  


  drawSprites();
}