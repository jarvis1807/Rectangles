var movingRect,fixedRect;

var rect1,rect2,rect3,rect4;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 90, 50);
  movingRect.shapeColor = "blue";
  movingRect.velocityY = -5

  fixedRect = createSprite(150,200,50,80);
  //fixedRect.velocityX = 5
  fixedRect.shapeColor = "blue"

  rect1 = createSprite(100,100,50,50);
  rect1.shapeColor = "blue";
  rect1.velocityX = 2;


  rect2 = createSprite(200,100,50,50);
  rect2.shapeColor = "blue";
  rect2.velocityX = -3


  rect3 = createSprite(300,100,50,50);
  rect3.shapeColor = "blue";

  rect4 = createSprite(400,100,50,50);
  rect4.shapeColor = "blue";
  rect4.velocityY = 5

}

function draw() {
  background("black");  
 /* movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect,rect1))
  {
    movingRect.shapeColor = "pink";
    rect1.shapeColor = "pink";
  }
  else
  {
    movingRect.shapeColor = "blue";
    rect1.shapeColor = "blue";
  }*/

  bounceOff(rect1, rect2)

  bounceOff(movingRect, rect4) 

  
  
  console.log(movingRect.x - fixedRect.x);

  drawSprites();
}

