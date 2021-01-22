const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var particles=[];
var particle;


function setup() {
  
  var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    
 }

function draw() {
  background("black"); 
  Engine.update(engine); 
 
  if(frameCount%1===0){
    particles.push(new Particle(random(0,1200),2,2));
   
  }
 

  for(var j=0; j<particles.length;j++){
     particles[j].display();
  }
}
