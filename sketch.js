function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);
}

var particles = [];
var plinkos = [];
var divisions = [];
var divisionheight = 300;

function draw() {
  background(255,255,255); 
  
  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new divisions(k, height - divisionheight/2,10,divisionheight));
    }
    
    for(var j = 40; j <=width; j = j + 50){
    plinkos.push(new plinko(j,75));
    }
    
    for(var j = 15; j <=width - 10; j = j + 50){
      plinkos.push(new plinko(j,175));
      }
    
      for(var j = 10; j <=width - 10; j = j + 50){
        plinkos.push(new plinko(j,275));
        }
    
        for(var j = 5; j <=width - 10; j = j + 50){
          plinkos.push(new plinko(j,375));
          }
    
      for(var l = 0; l <particles.length; l++){
        particles[l].display;
      }
    
      for(var m = 0; m <divisions.length; m++){
        divisions[m].display;
      }
    
      for(var n = 0; n <plinkos.length; n++){
        plinkos[n].display;
      }
    
      if(frameCount%60===0){
     particles.push(new particle(random(width/2-10, width/2+10), 10,10));
      }

  drawSprites();
}
