var go1, movingRect,go2,go3,go4,fixedRect;

function setup() {
  createCanvas(1200,800);
  go1 = createSprite(100, 100, 50, 50);
  go1.shapeColor = "green";
  go1.debug = true;
  movingRect = createSprite(400,100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  go2 = createSprite(200, 100, 50, 50);
  go2.shapeColor = "green";
  go3 = createSprite(300, 100, 50, 50);
  go3.shapeColor = "green";
  go4 = createSprite(400, 100, 50, 80);
  go4.shapeColor = "green";
  fixedRect = createSprite(400, 300, 50, 80);
  fixedRect.shapeColor = "green"; 
  fixedRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,go1)){
    
    movingRect.shapeColor = "blue";
    go1.shapeColor = "blue";
  }
  else {
    movingRect.shapeColor = "green";
    go1.shapeColor = "green";
  }
  

  
bounceOff(movingRect,fixedRect);

  drawSprites();

  

}

function bounceOff(o1,o2){
 
  if (o1.x - o2.x < o2.width/2 + o1.width/2
    && o2.x - o1.x < o2.width/2 + o1.width/2)
    {
  o1.velocityX = -o1.velocityX;
  o2.velocityX = -o2.velocityX;
}
if(  o1.y - o2.y < o2.height/2 + o1.height/2
  && o2.y - o1.y <o2.height/2 + o1.height/2 ) {
    o1.velocityY = -o1.velocityY;
    o2.velocityY = -o2.velocityY;
}



}








