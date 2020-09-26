
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,690,800,20,ground_options);
    World.add(world,ground);


	crumpledBall1 = new Paper(75,660);
	trashSide1 = new TrashRects(508,635,15,100);
	trashSide2 = new TrashRects(692,635,15,100);
	trashFloor = new TrashRects(600,675,200,15);

	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
	background("purple");

	crumpledBall1.display();
	trashSide1.display();
	trashSide2.display();
	trashFloor.display();

	rectMode(CENTER);
	fill("white")
    rect(ground.position.x,ground.position.y,800,20);
  
  	drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledBall1.body,crumpledBall1.body.position,{x:40,y:-30});
	}
}


