var ball;
var ground;
var b1;
var b2;
var b3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    

	engine = Engine.create();
	world = engine.world;
	
    
	//Create the Bodies Here.
    ball = new Paper(200, 400, 50);
    ground = new Ground(400, 700, 800, 10);
	Engine.run(engine);
    
	b1 = new Bucket(600, 680, 150, 10);
  b2 = new Bucket(525, 655, 10, 150);
  b3 = new Bucket(675, 655, 10, 150);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display()
  ground.display()
  b1.display()
  b2.display()
  b3.display()
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW)
	Matter.Body.applyForce(ball.body, ball.body.position, {x:100, y:-100});
}



