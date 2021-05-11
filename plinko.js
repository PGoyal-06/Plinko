class Plinko{
constructor(x,y,w,h) {
var options = {
isStatic: true   
}

this.body = Bodies.circle(x,y,this.r,options)
this.color = color(random(0,255),random(0,255),random(0,255));
World.add(world,this.body);
}

display(){

var pos = this.body.position;
ellipse(0,0,this.r,this.r);
};
}