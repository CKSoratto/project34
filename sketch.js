
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine
var world
var sc
var sbg
var sci
var sct
var sb
var f//f apenas
var blocc1, blocc2, blocc3, blocc4, blocc5, blocc6, blocc7, blocc8
var blocc9, blocc10, blocc11, blocc12, blocc13, blocc14, blocc15
var pa

function preload(){

sbg = loadImage('bg.png');
sb = loadImage('blocc.png');
sc = loadAnimation('g.png', 'g.png', 'gw.png', 'gw.png');
sct = loadAnimation('gt.png', 'gt.png', 'gwt.png', 'gwt.png');

};

function setup() {

  createCanvas(600, 400);

  engine = Engine.create();
  world = engine.world;

  sci = createSprite(320, 200);  
  sci.addAnimation("raiden?", sc);
  sci.scale = 0.6;

  sci.addAnimation("oh raiden", sct);
  sci.scale = 0.6;

  f = Bodies.rectangle(60, 362, 100000, 5, {isStatic: true});
  World.add(world, f);

  blocc1 = new Tower(251, 340);
  blocc2 = new Tower(251, 300);
  blocc3 = new Tower(251, 259);
  blocc4 = new Tower(251, 219);
  blocc5 = new Tower(251, 170);
  blocc6 = new Tower(251, 130);
  blocc7 = new Tower(251, 100);
  blocc8 = new Tower(251, 60);

  blocc9 = new Tower(211, 340);
  blocc10 = new Tower(211, 300);
  blocc11 = new Tower(211, 259);
  blocc12 = new Tower(211, 219);
  blocc13 = new Tower(211, 170);
  blocc14 = new Tower(211, 130);
  blocc15 = new Tower(211, 100);
  blocc16 = new Tower(211, 60);

};

function draw() {

  background(sbg);
  Engine.update(engine);

  raiden();
  
  drawSprites();

  blocc1.display();
  blocc2.display();
  blocc3.display();
  blocc4.display();
  blocc5.display();
  blocc6.display();
  blocc7.display();
  blocc8.display();

  blocc9.display();
  blocc10.display();
  blocc11.display();
  blocc12.display();
  blocc13.display();
  blocc14.display();
  blocc15.display();
  blocc16.display();

};

function raiden() {

  if(mouseWentDown("leftButton")){

  sci.changeAnimation("oh raiden", sct);

  let paoptions = {density: 0.01, isStatic: true};
  pa = Bodies.circle(350, 100, 20, paoptions);
  World.add(world, pa);

  Body.applyForce(pa, {x: 0, y: 0}, {x: -1, y: 1});

  Body.setStatic(pa, false);



  }



  if(mouseWentUp("leftButton")){

  sci.changeAnimation("raiden?", sc);

  }

}






