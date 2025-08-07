var box1;
var box2;
var edges;

function setup(){

  box1=createSprite(100,100,20,20);
  box1.shapeColor="aqua";

  box2=createSprite(200,200,20,20);
  box2.shapeColor="violet";

  edges=createEdgeSprites();
}



function draw(){
  
  background("black");

  if(keyDown(UP_ARROW)){
    box1.velocityY = -5;
    box2.velocityY= -5
  }
 
  if(keyDown(DOWN_ARROW)){
    box1.velocityY = 5;
    box2.velocityY = 5;
  }
  

  if(keyDown(RIGHT_ARROW)){
    box1.velocityX= 5;
    box2.velocityX = 5;
  }

  if(keyDown(LEFT_ARROW)){
    box1.velocityX= -5;
    box2.velocityX= -5;
  }

  box1.bounceOff(edges);
  box2.bounceOff(edges);


  drawSprites();
}