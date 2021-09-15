var spaceship,spaceshipImg;
var asteroid,asteroidImg;


function setup() {
  createCanvas(1000,600);
  spaceship = createSprite(100, 300, 100, 100);
  
}

function draw() {
  background("darkblue");  

  SpawnAsteroids();

  drawSprites();

  if (keyDown("UP_ARROW")){
    spaceship.y = spaceship.y-10;
  }

 if (keyDown("DOWN_ARROW")){
   spaceship.y = spaceship.y+10;
  }
  
}

function SpawnAsteroids (){
  if (frameCount%60 === 0){
  asteroid = createSprite(1000,400,50,50);
  asteroid.velocityX = -5
  asteroid.y = Math.round(random(40,370));
}
}