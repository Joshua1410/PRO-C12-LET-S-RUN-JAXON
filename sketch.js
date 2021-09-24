var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var coin,coin_Image,bomb,bomb_Image,energyDrink,energyDrink_Image,power,power_Image;;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coin_Image = loadImage("coin.png")
  bomb_Image = loadImage("bomb.png")
  energyDrink_Image = loadImage("energyDrink.png")
  power_Image = loadImage("power.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);

coin=createSprite(200,200,80,90);
coin.addImage(coin_Image);
coin.scale=0.4;
coin.velocityY = 4;
if (coin.isTouching(boy)) {
  coin.destroy();
}

coin=createSprite(100,200,80,90);
coin.addImage(coin_Image);
coin.scale=0.4;
coin.velocityY = 4;
if (coin.isTouching(boy)) {
  coin.destroy();
}

coin=createSprite(300,200,80,90);
coin.addImage(coin_Image);
coin.scale=0.4;
coin.velocityY = 4;
if (coin.isTouching(boy)) {
  coin.destroy();
}
  

leftBoundary=createSprite(0,0,100,800);

// leftBoundary.invisible = false;
// leftBoundary.visible = true;
// leftBoundary.invisible = true;
// leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}


function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  /*if(path.y > 400 ){
    path.y = height/2;
  }

  if(path.y > 400 ){
   
  path.y = height/2;
  }

if(path.y > 400 ){
  path.y = height/2;}*/

if(path.y > 400 ){
  path.y = height/2
}
  
  
  drawSprites();
}
