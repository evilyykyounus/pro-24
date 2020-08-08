

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,Base, leftWall, rightWall,paper;
var engine, world;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;
    
	Base = new Ground(900,650,200,20);

	
	leftWall = new Ground(800,610,20,100);
	
	
	rightWall = new Ground(1000,610,20,100);
	 
	
	ground = new Ground(800,665,1600,20);

	
	paper = new Paper(100,600);

	Engine.run(engine);
	
}


function draw() {

  background(0);
  fill("brown");
  ground.display();
  fill("white");
  paper.display();
  fill("blue");
  Base.display();
  leftWall.display();
  rightWall.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 30,y : -30})
	}
}








