const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4;
var pig1, pig2;
var log1, log2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(300,380,70,70);
    box2 = new Box(520,320,70,70);
    box3 = new Box(300,240,70,70);
    box4 = new Box(520,240,70,70);

    pig1 = new Pig(410,350);
    pig2 = new Pig(410,220);

    log1 = new Log(410,260,300, PI );
    log2 = new Log(410,180,300, PI);
    log3 = new Log(360,120,150, PI/4);
    log4 = new Log(470,120,150, PI/7 );

    bird = new Bird(100,100);
  ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();

    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();

    bird.display();
}