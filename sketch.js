
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ground1,ground2,mainGround;
var shooter,attach1;
var stoneImage,stone;
var gameState;

function preload()
{
	stoneImage = loadImage("stone.png");
}

function setup() {
	createCanvas(1200, 500);
    
	gameState = "onSling";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(475,335,200,20);
	ground2=new Ground(900,250,200,20);
	mainGround=new Ground(width/2,490,width,20);
    
	//Bottom Layer-1st set
	box1 = new Box(400,300,50,50);
	box2 = new Box(450,300,50,50);
	box3 = new Box(500,300,50,50);
	box4 = new Box(550,300,50,50);

	//Second Layer-1st set
	box5 = new Box(425,250,50,50);
	box6 = new Box(475,250,50,50);
	box7 = new Box(525,250,50,50);

	//Third Layer-1st set
	box8 = new Box(450,200,50,50);
	box9 = new Box(500,200,50,50);

	//Top Layer-1st set
	box10 = new Box(475,150,50,50);

	//Bottom Layer-2nd set
	box11 = new Box(825,215,50,50);
	box12 = new Box(875,215,50,50);
	box13 = new Box(925,215,50,50);
	box14 = new Box(975,215,50,50);

	//Second Layer-2nd set
	box15 = new Box(850,165,50,50);
	box16 = new Box(900,165,50,50);
	box17 = new Box(950,165,50,50);

	//Third Layer-2nd set
	box18 = new Box(875,115,50,50);
	box19 = new Box(925,115,50,50);

	//Top Layer-2nd set
	box20 = new Box(900,65,50,50)

	polygon = new Polygon(100,400,30,30);
	attach1 = new Attach(polygon.body,{x : 100, y : 400});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  textSize(40);
  fill("White");
  text("Press SPACE to get one more throw.",100,50);
  
  ground1.display();
  ground2.display();
  mainGround.display();
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();

  polygon.display();

  attach1.display();
  
  drawSprites();
 
}

function mouseDragged(){
	if(gameState === "onSling"){
    Matter.Body.setPosition(polygon.body, {x : mouseX, y : mouseY});
	}
}

function mouseReleased(){
    attach1.detach();
	gameState = "offSling";
}

function keyPressed(){
	if(keyCode===32){
	Matter.Body.setPosition(polygon.body,{x : 100, y : 400});
	attach1.attachBody(polygon.body);
	gameState = "onSling";
	}
}