const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionheight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionheight/2,10,divisionheight));
    }
    
    for(var j = 40; j <=width; j = j + 50){
    plinkos.push(new Plinko(j,75,20));
    }
    
    for(var j = 15; j <=width - 20; j = j + 50){
      plinkos.push(new Plinko(j,175,10));
      }
    
      for(var j = 10; j <=width - 20; j = j + 50){
        plinkos.push(new Plinko(j,275,20));
        }
    
        for(var j = 5; j <=width - 10; j = j + 50){
          plinkos.push(new Plinko(j,375,20));
          }
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
for(var l = 0; l <particles.length; l++){
        particles[l].display();
      }
    
      for(var m = 0; m <divisions.length; m++){
        divisions[m].display();
      }
    
      for(var n = 0; n <plinkos.length; n++){
        plinkos[n].display();
      }
    
      if(frameCount%60===0){
     particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
      }

  drawSprites();
}
