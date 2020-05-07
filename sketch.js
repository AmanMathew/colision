var fixedRectangle,movingRectangle

function setup() {
  createCanvas(800,400);
  fixedRectangle=createSprite(400, 200, 50, 50);
  fixedRectangle.shapeColor="green";
  
  movingRectangle=createSprite(600,200,50,20);
  movingRectangle.shapeColor="green";

  movingRectangle.debug=true;
  fixedRectangle.debug=true;
}

function draw() {
  background(0);
    
 movingRectangle.x=World.mouseX;
 movingRectangle.y=World.mouseY; 
  
 if(movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2+movingRectangle.width/2&&
  fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2+movingRectangle.width/2&&
movingRectangle.y-fixedRectangle.y<fixedRectangle.height/2+movingRectangle.height/2&&
fixedRectangle.y-movingRectangle.y<fixedRectangle.height/2+movingRectangle.height/2){
  fixedRectangle.shapeColor="red";
  movingRectangle.shapeColor="red"; 
 } 
 else{
  fixedRectangle.shapeColor="green";
  movingRectangle.shapeColor="green";

 }
  
  drawSprites();


}