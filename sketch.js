var bg , bgI
var player ,  playerI
var bulletGroup , bI
var spaceShipGroup, ssgi
var score = 0

function preload(){
  
  bgI= loadImage("bg.png")
  ssgi=loadImage("Enemy_SpaceShip-removebg-preview.png")
playerI=loadImage("SpaceShip-removebg-preview.png")
  bI=loadImage("bullet-removebg-preview.png")


}


function setup(){
  
  bg = createSprite(200,200,20,20)
  bg.addImage(bgI)
  bg.scale=2
  
  player= createSprite(200,380,20,20)
  player.addImage(playerI)
  player.scale=0.5
  
  bulletGroup = new Group();
  spaceShipGroup= new Group();
  
}

function draw(){
  background(0);
  bg.velocityY=3
  if (bg.y> 300){
    bg.y= bg.height/2
  }
  //console.log(bg.y)
  spawnSpaceShips();
  if(keyWentDown("s")){
    createBullets();
  }
  
  if(bulletGroup.isTouching(spaceShipGroup)){
    bulletGroup.destroyEach();
    spaceShipGroup.destroyEach();
    score= score+1
  }
  
  
  
  player.x=mouseX
  drawSprites();
  
  fill( 250)
  text("Score ="+score,300,50)
  
}

function spawnSpaceShips(){
  if(frameCount % 80 === 0){
  var spaceShip=createSprite(Math.round(random(20,320)),20,20,20)
  spaceShip.addImage(ssgi)
    spaceShip .scale=0.1
  spaceShip.velocityY=3
  spaceShip.lifetime=130;
    spaceShipGroup.add(spaceShip)
  
  } 
}

function createBullets(){
  
    var bullet = createSprite(player.x,370,10,20)
    bullet.addImage(bI)
    bullet.scale=0.3
    bullet.velocityY=-5
    bullet.lifetime=130;
    bullet.shapeColor="red";
    bulletGroup.add(bullet)
  }
