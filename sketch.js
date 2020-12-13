const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var mainground,stand1,stand2;
var block1,block2,block3,block4,block5;
var block7,block8,block9,block10;
var slingshot,polygon1;

var score = 0;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  mainground = new Ground(400,395,910,21);
  stand1 = new Ground(350,350,180,10);
  
  block1 = new block(290,330,30,30);
  block2 = new block(325,330,30,30);
  block3 = new block(355,330,30,30);
  block4 = new block(380,330,30,30);
  block5 = new block(405,330,30,30);
  
  block7 = new block(320,290,30,30);
  block8 = new block(350,290,30,30);
  block9 = new block(380,290,30,30);

  block10 = new block(350,250,30,30);

  polygon1 = new polygon(100,200,30);

  slingshot = new SlingShot(polygon1.body,{x:100,y:200});

}


function draw() {
  background(0);  
  textSize(25)
  fill("white")  
  text("SCORE ="+ score,300,50)
  Engine.update(engine);
   
   mainground.display();
   stand1.display();
  
   //first layer
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();

   //second layer
  block7.display();
  block8.display();
  block9.display();

  //last layer
  block10.display();
  
  slingshot.display();

  polygon1.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
 
  block7.score();
  block8.score();
  block9.score();
  block10.score();

}

function mouseDragged(){
  Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon1.body);
  }
}

function mouseReleased(){
  slingshot.fly();
}

