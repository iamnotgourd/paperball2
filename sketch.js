
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
	

	ball = new Ball(300,300,24);
	ground = new Ground(600,height,1200,20);
	dustbinBottom = new Dustbin(990,685,200,10);
	dustbinLeft = new Dustbin(895,630,10,100);
	dustbinRight = new Dustbin(1085,630,10,100);



	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  background("white");
 
  ground.display()
  ball.display();
  dustbinBottom.display();
  dustbinLeft.display();
  dustbinRight.display();
  drawSprites();

}
function keyPressed(){
     if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	 }

}



