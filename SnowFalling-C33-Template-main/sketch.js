const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var Background
var Snow1
var SnowImg
var Snowparticle=[];
function preload(){
Background = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  
  
  

}

function draw() {
  background(Background);  
  Engine.update(engine);
  if(frameCount%20===0){
    Snowparticle.push(new Snowflake(random(100, 700), -50,10));

  }

  for (var j = 0; j < Snowparticle.length; j++) {
   
    Snowparticle[j].display();
  }
 
  drawSprites();
}