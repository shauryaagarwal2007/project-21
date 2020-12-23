var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=rgb(80,80,80);

  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
}

function draw() {
  background(0);  

  if(hasCollided(bullet,wall)){
     
   bullet.velocityX=0
     
     var damage = (0.5 * weight * speed * speed) / (thickness*thickness*thickness);
     
     if(damage >= 10){
        wall.shapeColor=rgb(255,0,0);
     }
     if(damage < 10){
        wall.shapeColor=rgb(0,255,0);
     }
  }
  
  drawSprites();
}

function hasCollided(a,b){
if (b.x - a.x < (a.width/2+b.width/2)){
   return true
}
else {return false}
}
