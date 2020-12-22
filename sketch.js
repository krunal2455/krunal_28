
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     boy = new Boy(200,350,15,15);
	// boy = createSprite(50,450,18,10);
	



    
    // groundSprite=createSprite(width/2, height-35, width,10);
	// groundSprite.shapeColor=color("grey");
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update;

   boy.display();
  
//  drawSprites();
}



