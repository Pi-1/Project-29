var ground;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground();
}

function draw() {
  background(255,255,255);  
  ground.draw();
  drawSprites();
}