
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint=Matter.Constraint


var bob1,bob2,bob3;
var ground;
var ro;
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;
bob1=new Pp(400,600)
bob2= new Pp(450,600)
	//Create the Bo-dies Here.
	bob3= new Pp(350,600)
ground=Bodies.rectangle(400,400,250,20,{isStatic:true})
World.add(world,ground)
ro=new PP(ground.body,bob1.body,{x:400,y:600})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  rect(ground.position.x,ground.position.y,250,20)
  bob1.display()
    bob2.display()
  bob3.display()
  ro.display()

  drawSprites();
 
}



