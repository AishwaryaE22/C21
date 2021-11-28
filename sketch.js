var fixedRect, moveRect
var car, wall, ball, ball1, ball2

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 30, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  moveRect = createSprite(400, 200, 40, 30);
  moveRect.shapeColor = "green";
  moveRect.debug = true;
  car = createSprite(20, 50, 30,30);
  car.shapeColor = "blue";
  car.velocityX = 6;
  wall = createSprite(600, 40, 20, 600);
  wall.shapeColor = "gray";
  ball = createSprite(300,100,40,50);
  ball.velocityX = 3;
  ball1 = createSprite(10,350,50,50);
  ball1.shapeColor = "pink";
  ball1.velocityX = 2;
  ball1.velocityY = 3;
  ball2 = createSprite(600,380,50,40);
  ball2.shapeColor = "purple";
  ball2.velocityX = -2;
  ball2.velocityY = -2;
}

function draw() {
  background(255,255,255);  
  moveRect.x = mouseX;
  moveRect.y = mouseY;
  console.log(moveRect.x - fixedRect.x);
  if(touch(moveRect, fixedRect)){
    moveRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    moveRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if(touch(car, wall)){
    car.velocityX = 0;
    car.shapeColor = "red";
  }

  if(touch(ball, wall)){
    ball.velocityX = ball.velocityX * -1;

  }
  Bounceoff(ball1, ball2);
drawSprites();
}


