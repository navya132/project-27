
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(290,40,500,40);

	
	bob1 = new Bob(100,220,30)
	bob2 = new Bob(150,220,30)
	bob3 = new Bob(200,220,30)
	bob4 = new Bob(250,220,30)
	bob5 = new Bob(300,220,30)

	rope1 = new Rope(bob1.body,roof.body,-100,20)
	rope2 = new Rope(bob2.body,roof.body,-40,20)
	 rope3 = new Rope(bob3.body,roof.body,20,20)
	 rope4 = new Rope(bob4.body,roof.body,80,20)
	 rope5 = new Rope(bob5.body,roof.body,140,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  text(mouseX+","+mouseY,10,40)

roof.display();

bob1.display();
bob2.display();
bob3.display();
bob4.display();
bob5.display();


rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();

  drawSprites();
 
}



