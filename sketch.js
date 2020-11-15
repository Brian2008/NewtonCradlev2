
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var ground
var chain1,chain2,chain3,chain4,chain5

function setup() {
	createCanvas(1000, 1000);


	engine = Engine.create();
	world = engine.world;
	ball1=new Ball(180,50);
	ball2=new Ball(210,50);
	ball3=new Ball(240,50);
	ball4=new Ball(270,50);
	ball5=new Ball(300,50);
	ground=new Ground(500,100,1000,10);
	chain1=new Chain(ball1.body,ground.body,-60,10);
	chain2=new Chain(ball2.body,ground.body,10,10);
	chain3=new Chain(ball3.body,ground.body,10,10);
	chain4=new Chain(ball4.body,ground.body,10,10);
	chain5=new Chain(ball5.body,ground.body,10,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  ground.display();

 
}
function keyPressed() {
	if(keyCode === UP_ARROW){
  
	  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:150,y:300})
	}
  }
  
  
  



