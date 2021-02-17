const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,myworld
var ball1
var ball2
var ground
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  myworld=engine.world
var option1={
  restitution:1.1
}
  ball1=Bodies.circle(400,200,10,option1)
  World.add(myworld,ball1)
  var option2={
    restitution:0.5
  }
  ball2=Bodies.circle(300,200,10,option2)
  World.add(myworld,ball2)

  var option3={
    isStatic:true
  }
  ground=Bodies.rectangle(400,360,800,20,option3)
  World.add(myworld,ground)
}

function draw() {
  background(0);
  fill("red") 
  Engine.update(engine)
  ellipseMode(RADIUS)
  ellipse(ball1.position.x,ball1.position.y,10,10)
  fill("blue")
  ellipse(ball2.position.x,ball2.position.y,10,10)
  rectMode(CENTER)
  fill("grey")
  rect(ground.position.x,ground.position.y,800,20)
}