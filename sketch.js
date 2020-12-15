
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, dustbin;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper=new Paper(150,300,70);
	dustbin=new Dustbin(320,300,20,20)
	ground=new Ground(400,390,800,20);
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper.display();
  ground.display();
  dustbin.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode===UP_ARROW){
		 
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



