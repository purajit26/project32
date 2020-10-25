
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block22,block23,block24,block25
var option={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
function preload(){
	block1=createSprite(330,235,25,35);
	block2=createSprite(360,235,25,35);
	block3=createSprite(390,235,25,35);
	block4=createSprite(420,235,25,35);
	block5=createSprite(450,235,25,35);
	block6=createSprite(360,195,25,35);
	block7=createSprite(390,195,25,35);
	block8=createSprite(420,195,25,35);
	block9=createSprite(390,195,25,35);
	block10=createSprite(390,155,25,35);
	block11=createSprite(390,255,150,10);
}
function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
//fill(value);
  //rect(25, 25, 50, 50);                                                                                                  
Engine.run(engine);
}

function draw() {
rectMode(CENTER);
background(0);
drawSprites();
polygon=Bodies.circle(50,200,20);
  World.add(world,polygon)
  slingShot=new SlingShot(this.polygon,{x:100,y:200})
  //ImageMode(CENTER)  
  //Image(polygon_png,polygon,position.x,polygon,position.y,40,40)
  ellipse(0, 50, 33, 33); 

push(); 
translate(50, 0);
strokeWeight(10);
fill(204, 153, 0);
ellipse(0, 50, 33, 33); 
pop(); 
ellipse(100, 50, 33, 33); 
buttons
copy
reset
edit
ellipse(0, 50, 33, 33); 
push(); 
strokeWeight(10);
fill(204, 153, 0);
ellipse(33, 50, 33, 33); 

push(); 
stroke(0, 102, 153);
ellipse(66, 50, 33, 33); 
pop();

pop(); 

ellipse(100, 50, 33, 33); 
}

function mousePressed(event) {
	console.log(event);
  }
  function mousePressed() {
	ellipse(mouseX, mouseY, 5, 5);
	// prevent default
	return false;
  }
  function mousePressed() {
	if (value === 0) {
	  value = 255;
	} else {
	  value = 0;
	}
  }
  function mouseDragged() {
	value = value + 5;
	if (value > 255) {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
		
	  value = 0;
	}
  }
  function mouseDragged() {
	ellipse(mouseX, mouseY, 5, 5);
	// prevent default
	return false;
  }
