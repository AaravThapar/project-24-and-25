
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,paper,bin;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper=new Paper(200,450,70);
	ground=new Ground(600,680,1200,20);


	boxL=createSprite(300,600,20,100);
boxR=createSprite(500,600,20,100);
boxB=createSprite(400,640,200,20);
boxL.shapeColor="red"
boxR.shapeColor="red"
boxB.shapeColor="red"

boxLeftBody=Bodies.rectangle(300,600,20,100,{isStatic:true})
World.add(world, boxLeftBody);

boxRightBody=Bodies.rectangle(500,600,20,100,{isStatic:true})
World.add(world, boxRightBody);

boxBottomBody=Bodies.rectangle(400,640,200,20,{isStatic:true})
World.add(world, boxBottomBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  paper.display();
 ground.display();
  drawSprites();
 
}

function keyPressed() {
	 if (keyCode === UP_ARROW) {
		  Matter.Body.applyForce(paper.body,paper.body.position,{x:300,y:-300});
		 } 
		}

