

var  mario;

var road;

var glitch;


function preload(){
  marioImage = loadAnimation("mario.gif");

  
  roadImage = loadAnimation("road.gif");
glitchImage = loadAnimation("glitch.gif");



  

  

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  
  mario = createSprite(50,160,20,50);
  mario.addAnimation("mario",marioImage);
  
  mario.scale =  0.5

  
  
  road = createSprite(200,180,windowWidth,windowHeight);
  road.addAnimation("road.gif",roadImage);
  
  
  glitch = createSprite(300,100);
  glitch.addAnimation(glitchImage);

  
}

function draw() {
  
  


  
 


  
  

  drawSprites();
}




