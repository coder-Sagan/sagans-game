const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var bow;
var arrow;
var backgroundImg;

function preload(){
backgroundImg= loadImage("images/background1.jpg");
}

function setup() {
  createCanvas(1600,750);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(800,740,1600,10);
  arrow=new Arrow(235,345);
  bow=new Bow(arrow.body,{x:235,y:345});
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
  ground.display();  
  bow.display();
  arrow.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  bow.fly();
 }

 


