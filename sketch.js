function setup() {
  createCanvas(1200,800);
 frect= createSprite(200, 200, 50, 80);
 frect.shapeColor="Green";
 mrect= createSprite(400, 200, 80, 30);
 mrect.shapeColor="Green";
}

function draw() {
  background(0,0,0);  
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;

  console.log(mrect.x - frect.x);

  mrect.debug=true;
  frect.debug=true;

  if(frect.x-mrect.x < mrect.width/2+frect.width/2 && mrect.x-frect.x < mrect.width/2+frect.width/2 
    && frect.y-mrect.y < mrect.width/2+frect.width/2 && mrect.y-frect.y < mrect.width/2+frect.width/2 ){
    mrect.shapeColor="red";
    frect.shapeColor="red";

  }
  else{
    mrect.shapeColor="green";
    frect.shapeColor="green";

  }
  drawSprites();
}