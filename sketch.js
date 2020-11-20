
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("moveing",monkey_running)
  monkey.scale=0.1
  monkey.velocityY=0.8
  
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4
  
  

  
}


function draw() {
  createCanvas(700,450)
  
  console.log(monkey.y)
  
  
    monkey.collide(ground)
    if(keyDown("space")&&monkey.y>=310) {
  monkey.velocityY = -18;
  }
  monkey.velocityY=monkey. velocityY + 0.8
  if(ground.x=ground.width/2){
    ground.reset
    
  }
  
  stroke("white")
  textSize(20)
  fill("white")
  text("score"+ score,500,50)
  
  stroke("black")
  textSize(20)
  fill("white")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time"+survivalTime,100,50)
  
  
  stones()
  food1()
  
  
  
  
  drawSprites()

  
}
 
function stones(){
  if (frameCount%300===0){
     obstacle=createSprite(900,325,20,20)
    obstacle.velocityX=-4
    obstacle.addImage(obstaceImage)
    obstacle.lifeTime=250
    obstacle.scale=0.1
    
  }
}
function food1(){
 if (frameCount%80===0){
    food=createSprite(900,random(112,200),20,20)
    food.velocityX=-4
    food.addImage(bananaImage)
    food.lifeTime=250
    food.scale=0.1
   
}
  




}