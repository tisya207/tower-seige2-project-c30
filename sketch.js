const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//top layer
var box1,box2,box3,box4;
var box5,box6,box7;
//second layer
var box8,box9,box10;
var box11,box12,box13;
//third layer
var box14,box15,box16;
var box17,box18;
//fourth layer
var box19,box20,box21,box22;
var backgroundImg,platform;
var hexagon, sling;
      
function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);

    hexagon = new Hexagon(100,100,50,50);

    sling = new SlingShot(hexagon.body,{x:200,y:200});

    platform = new Ground(700, 305, 350, 10);
    platform2 = new Ground(1000,200,300,10);

    //top layer
    
    box1 = new Box(610,280,30,40);
    box2 = new Box(640,280,30,40);
    box3 = new Box(670,280,30,40);
    box4 = new Box(700,280,30,40);
    box5 = new Box(730,280,30,40);
    box6 = new Box(760,280,30,40);
    box7 = new Box(790,280,30,40);
    //second layer
    box8 = new Box(640,240,30,40);
    box9 = new Box(670,240,30,40);
    box10 = new Box(700,240,30,40);
    box11 = new Box(730,240,30,40);
    box12 = new Box(760,240,30,40);
     //third layer
    box13 = new Box(670,200,30,40);
    box14 = new Box(700,200,30,40);
    box15 = new Box(730,200,30,40);
    //fourth layer
    box16 = new Box(700,160,30,40);

    //layer 1
    box17 = new Box(940,170,30,40);
    box18 = new Box(970,170,30,40);
    box19 = new Box(1000,170,30,40);
    box20 = new Box(1030,170,30,40);
    box21 = new Box(1060,170,30,40);
    //layer 2
    box22 = new Box(970,130,30,40);
    box23 = new Box(1000,130,30,40);
    box24 = new Box(1030,130,30,40);
    //layer 3
    box25 = new Box(1000,90,30,40);

}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(2);
  
    //top layer
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    //second layer
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    //third layer
    box14.display();
    box15.display();
    //fourth layer
    box16.display();

    //layer 1
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    //layer2
    box22.display();
    box23.display();
    box24.display();
    //layer 3
    box25.display();


    platform.display();
    platform2.display();
    hexagon.display();
    sling.display();    
    ground.display();


}

function mouseDragged(){
Matter.Body.setPosition(hexagon.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
    sling.fly()
}

function keyPressed(){
    if(keyCode===32)
    sling.attach(hexagon.body)
}