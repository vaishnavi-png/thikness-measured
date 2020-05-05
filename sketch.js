
var wall;
var c1, c2, c3;
var speed,weight,thikness,damage,bullet;

function setup() {
  createCanvas(1600, 400);

  speed = random(30, 51);
  console.log(speed);

  weight = random(223, 321);
  console.log(weight);

  thickness = random(22, 83);
  console.log(thickness);

  BULLET = createSprite(200, 200, 50, 25);
  BULLET.shapeColor = "white"
  BULLET.velocityX = 40;

  c1 = createSprite(BULLET.x, BULLET.y, 50, 50);
  c1.shapeColor = "red"
  c1.velocityX = 12;
  c1.visible = false;

  c2 = createSprite(BULLET.x, BULLET.y, 50, 50);
  c2.shapeColor = "orange"
  c2.velocityX = 12;
  c2.visible = false;

  c3 = createSprite(BULLET.x, BULLET.y, 50, 50);
  c3.shapeColor = "green"
  c3.velocityX = 12;
  c3.visible = false;

  wall = createSprite(1500,200,thickness,400);
}

function draw() {
  background(0, 0, 0);
  damaged();
  BULLET.collide(wall);

  drawSprites();
}

function damaged() {
  damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

  if (damage < 10 && BULLET.collide(wall)) {
    wall.shapeColor = "blue";
  }

   if (damage > 10 && BULLET.collide(wall)) {
    wall.shapeColor = "red";
  }
}