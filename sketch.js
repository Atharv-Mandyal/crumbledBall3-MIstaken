
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload() {
  backgroundImg = loadImage("bg.jpg");
}

function setup() {
var canvas =	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,1200,20)
	ball = new Ball(100,200,20,20)
	dustbinline1 = new Dustbin(865,350,10,90)
	dustbinline2= new Dustbin (755,350,10,90)
	dustbinline3= new Dustbin (810,380,100,20)

  Slingshot = new SlingShot(ball.body,{x:200, y:100});
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);
  ground.display();
  ball.display();
  dustbinline1.display();
  dustbinline2.display();
  dustbinline3.display();
  Slingshot.display()
  
  drawSprites();
 
}


function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32)
  slingshot.attach(bird.body);
}



