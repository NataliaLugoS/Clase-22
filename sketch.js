const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world; var object;
function setup() {
  var canvas = createCanvas(400, 200);

  engine = Engine.create();
  world = engine.world; object = Bodies.rectangle(200, 100, 50, 50);
  World.add(world, object);
  // console.log(object.position.y);
  // createSprite(400, 200, 50, 50); 
  console.log(object);

}
function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(100, 100, 20, 20);
  rect(object.position.x, object.position.y, 50, 50);
  drawSprites();
}