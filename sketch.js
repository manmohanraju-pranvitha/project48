
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var corona=[];
var vaccineobject,coronaobject;
var vaccine1;
var scientist,scienimg;
var sling;
var PLAY=1;
var END=0;
var time;
var k;
var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10;
var gamestate=PLAY;
maxcorona=50;
function preload()
{
	scienimg=loadImage("123456789.png");
}

function setup() {
	var canvas=createCanvas(windowWidth,windowHeight);

   time=minute();
	engine = Engine.create();
	world = engine.world;
scientist=createSprite(300,height/2+230,30,30);
scientist.addImage(scienimg);
   //Create the Bodies Here.
  
   c1=new Corona(width/2+500,height/2-300,50);
   c2=new Corona(width/2+550,height/2-300,50);
   c3=new Corona(width/2+450,height/2-300,50);
   c4=new Corona(width/2+400,height/2-300,50);
   c5=new Corona(width/2+350,height/2-300,50);
   c6=new Corona(width/2+300,height/2-300,50);
   c7=new Corona(width/2+250,height/2-300,50);
   c8=new Corona(width/2+200,height/2-300,50);
   c9=new Corona(width/2+150,height/2-300,50);
   c10=new Corona(width/2+100,height/2-300,50);
   c11=new Corona(width/2+500,height/2-200,50);
   c12=new Corona(width/2+550,height/2-200,50);
   c13=new Corona(width/2+450,height/2-200,50);
   c14=new Corona(width/2+400,height/2-200,50);
   c15=new Corona(width/2+350,height/2-200,50);
   c16=new Corona(width/2+300,height/2-200,50);
   c17=new Corona(width/2+250,height/2-200,50);
   c18=new Corona(width/2+200,height/2-200,50);
   c19=new Corona(width/2+150,height/2-200,50);
   c20=new Corona(width/2+100,height/2-200,50);

   
//	for (var j = 75; j <=width/2; j=j+30) 
  //  {
    
    //   corona.push(new Corona(j+400,165,40));
    //}
    //for (var j = 75; j <=width/2; j=j+40) 
    //{
    
      // corona.push(new Corona(j+400,205,40));
    //}

    //for (var j = 75; j <=width/2; j=j+50) 
    //{
    
      // corona.push(new Corona(j+400,365,40));
   // }

    //for (var j = 75; j <=width/2; j=j+60) 
    //{
    
    ///   corona.push(new Corona(j+400,505,40));
   // }
   // for (var j = 75; j <=width/2; j=j+70) 
   // {
    //
     //  corona.push(new Corona(j+400,465,40));
  //  }
	   
ground1= new Ground(width/2,height/2+350,width,18);

vaccine1=new Vaccine(250,height/2+200,60);
sling=new Slingshot(vaccine1.body,{x:250,y:height/2+200});
//invisible=createSprite(width/2,height/2,width,18);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

	
  ground1.display();
 
  textSize(20);
  fill("white");
text("time:",time,width/2-300,height/2-400);

//console.log(time);
  if(time<=time+3){
  // console.log(gamestate);
     gamestate=PLAY;
    // console.log(gamestate);
  }
  if(time>time+3){
     gamestate=END;
    // console.log(gamestate);
  }

  if(gamestate===PLAY){

  }
  drawSprites();
  vaccine1.display();
  sling.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
  c7.display();
  c8.display();
  c9.display();
  c10.display();
  c11.display();
  c12.display();
  c13.display();
  c14.display();
  c15.display();
  c16.display();
  c17.display();
  c18.display();
  c19.display();
  c20.display();
 detectcollision(vaccine1,c1);
 detectcollision(vaccine1,c2);
 detectcollision(vaccine1,c3);
 detectcollision(vaccine1,c4);
 detectcollision(vaccine1,c5);
 detectcollision(vaccine1,c6);
 detectcollision(vaccine1,c7);
 detectcollision(vaccine1,c8);
 detectcollision(vaccine1,c9);
 detectcollision(vaccine1,c10);
 detectcollision(vaccine1,c11);
 detectcollision(vaccine1,c12);
 detectcollision(vaccine1,c13);
 detectcollision(vaccine1,c14);
 detectcollision(vaccine1,c15);
 detectcollision(vaccine1,c16);
 detectcollision(vaccine1,c17);
 detectcollision(vaccine1,c18);
 detectcollision(vaccine1,c19);
 detectcollision(vaccine1,c20);
 
}
function mouseDragged(){
   Matter.Body.setPosition(vaccine1.body,{x:mouseX,y:mouseY});
 }
 function mouseReleased(){
   sling.fly();
 }
 function keyPressed(){
    if(keyCode===32){
       sling.attach(vaccine1.body)
    }
 }
 function detectcollision (vaccineobject,coronaobject){
   
	coronaBodyPosition=coronaobject.body.position 
	vaccineBodyPosition=vaccineobject.body.position
 
   var distance=dist(vaccineobject.body.position.x,vaccineobject.body.position.y,coronaobject.body.position.x,coronaobject.body.position.y);

   if(distance<=vaccineobject.r+coronaobject.r){
      Matter.Body.setStatic(coronaobject.body,false)
Corona.destroy(coronaobject.body);
console.log(coronaobject);
   }

  
	
}
 
 
 



