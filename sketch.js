
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane;
var block;
var block2;
var rotator1;
var rotator2;
var rotator3;
var angle1=60;
var angle2=60;
var angle3=60;
var particle;
var particle2;
var particle3;
var particle4;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	var plane_options={
		isStatic:true
	};
	
	plane=Bodies.rectangle(500,700,20,20,plane_options);
	World.add(world,plane);

	var block_options={
		isStatic:true
	};

	block=Bodies.rectangle(600,450,20,20,block_options);
	World.add(world,block);

	var block2_options={
		isStatic:true
	};

	block2=Bodies.rectangle(200,450,20,20,block2_options);
	World.add(world,block2);

	var rotator1_options={
		isStatic:true
	};
	rotator1 = Bodies.rectangle(400,200,150,20,rotator1_options);
	World.add(world,rotator1);

	var rotator2_options={
		isStatic:true
	};
	rotator2 = Bodies.rectangle(400,200,150,20,rotator2_options);
	World.add(world,rotator2);

	var rotator3_options={
		isStatic:true
	};
	rotator3 = Bodies.rectangle(400,200,150,20,rotator3_options);
	World.add(world,rotator3);

	var particle_options={

		restitution:0.4,
		friction:0.02
	};
	particle=Bodies.circle(400,10,10,particle_options);
	World.add(world,particle);

	var particle2_options={

		restitution:0.4,
		friction:0.02
	};
	particle2=Bodies.circle(400,10,10,particle2_options);
	World.add(world,particle2);

	var particle3_options={

		restitution:0.4,
		friction:0.02
	};
	particle3=Bodies.circle(400,10,10,particle3_options);
	World.add(world,particle3);

	var particle4_options={

		restitution:0.4,
		friction:0.02
	};
	particle4=Bodies.circle(400,10,10,particle4_options);
	World.add(world,particle4);

	var particle5_options={

		restitution:0.4,
		friction:0.02
	};
	particle5=Bodies.circle(400,10,10,particle5_options);
	World.add(world,particle5);




	Engine.run(engine);
  
}


function draw() {
  background("blue");
  Engine.update(engine);

  rectMode(CENTER);
  fill("red");
  rect(plane.position.x,plane.position.y,1000,50);

  rectMode(CENTER);
  fill("red");
  rect(block.position.x,block.position.y,200,20);
// block 2
  rectMode(CENTER);
  fill("red");
  rect(block2.position.x,block2.position.y,200,20);

 
 Matter.Body.rotate(rotator1,angle1);
  push();
  translate(rotator1.position.x,rotator1.position.y);
  rotate(angle1);
  rect(0,0,150,20);
  pop();
  angle1 +=13.0;

  Matter.Body.rotate(rotator2,angle2);
  push();
  translate(rotator2.position.x,rotator2.position.y);
  rotate(angle2);
  rect(0,0,150,20);
  pop();
  angle2 +=17.0;

  Matter.Body.rotate(rotator3,angle3);
  push();
  translate(rotator3.position.x,rotator3.position.y);
  rotate(angle3);
  rect(0,0,150,20);
  pop();
  angle3 +=22.0;

  ellipseMode(CENTER);
  fill("green");
  ellipse(particle.position.x , particle.position.y , 20,20);

  ellipseMode(CENTER);
  fill("green");
  ellipse(particle2.position.x , particle2.position.y , 20,20);

  ellipseMode(CENTER);
  fill("green");
  ellipse(particle3.position.x , particle3.position.y , 20,20);

  ellipseMode(CENTER);
  fill("green");
  ellipse(particle4.position.x , particle4.position.y , 20,20);

  ellipseMode(CENTER);
  fill("green");
  ellipse(particle5.position.x , particle5.position.y , 20,20);

  drawSprites();
 
}



