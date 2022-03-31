const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bottom
var left
var right
var topWall
var dustbinLeft
var dustbinRight
var ball
var radius = 40 


let engine
let world


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	rectMode(CENTER);
	

	bottom = new Ground(400,690,800,25);
    left = new Ground(10,300,20,800)
	right = new Ground(790,400,20,800)
	topWall = new Ground(400,10,800,20)
	dustbinLeft = new Ground(650,600,10,160)
	dustbinRight = new Ground(550,600,10,160)

	var ball_options={
		restitution:0.95,
	    density:1.2,
		friction:0,
		isStatic:false
	  }

     ball = Bodies.circle(260,100,radius/2,ball_options)
	 World.add(world,ball)

    ellipse(ball.position.x,ball.position.y,radius,radius)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bottom.show()
  left.show()
  right.show()
  topWall.show()
  dustbinLeft.show()
  dustbinRight.show()

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85});
	}
	}


