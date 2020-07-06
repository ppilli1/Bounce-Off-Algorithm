var ball,paddle;

function setup() {
  createCanvas(800,800);
  ball = createSprite(400, 100, 50, 100);
  ball.shapeColor = "blue";
  ball.debug = true;
  paddle = createSprite(400,800,100,50);
  paddle.shapeColor = "green";
  paddle.debug = true;
  ball.velocityY = 5;
  paddle.velocityY = -5; 
}

function draw() {
  background("black");  
  bounceOff(ball,paddle);
  drawSprites();
}