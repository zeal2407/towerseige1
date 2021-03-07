const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function setup() {
 createCanvas(800,400);
 engine = Engine.create();
   world = engine.world;
 

  ground1 = new Ground(600,150,200,10);
  ground2 = new Ground(300,250,200,10);
  ground3 = new Ground(750, 395, 1500, 10)

  block1 = new Box(600,132,25,25)
  block2 = new Box(575,132,25,25)
  block3 = new Box(550,132,25,25)
  block4 = new Box(525,132,25,25)
  block5 = new Box(625,132,25,25)
  block6 = new Box(650,132,25,25)
  block7 = new Box(675,132,25,25)
  block8 = new Box(615,106,25,25)
  block9 = new Box(640,106,25,25)
  block10 = new Box(665,106,25,25)
  block11 = new Box(590,106,25,25)
  block12 = new Box(565,106,25,25)
  block13 = new Box(540,106,25,25)
  block14 = new Box(555,80,25,25)
  block15 = new Box(580,80,25,25)
  block16 = new Box(605,80,25,25)
  block17 = new Box(630,80,25,25)
  block18 = new Box(655,80,25,25)
  block19 = new Box(573,55,25,25)
  block20 = new Box(599,55,25,25)
  block19 = new Box(573,55,25,25)
  block19 = new Box(573,55,25,25)
 

}

function draw() {
  background("grey"); 
  Engine.update(engine);
  ground1.display(); 
  ground2.display();
  ground3.display();
  fill("blue")
  block1.display()
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block19.display();
  block19.display();

  drawSprites();
  
}