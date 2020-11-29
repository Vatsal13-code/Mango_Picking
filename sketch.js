
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree, ground, mango,boy,boyImg


function preload()
{
boyImg = loadImage('Plucking+mangoes/boy.png')	
}

function setup() {
	createCanvas(800, 700);

    boy.addImage(boy,boyImg)
	engine = Engine.create();
	world = engine.world;

	tree = new Tree(600,750)
	ground = new Ground(400.650,800,20)
	mango = new Mango(245,234.12)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  tree.display() 
  ground.display()
  mango.display()

  drawSprites();
 
}



