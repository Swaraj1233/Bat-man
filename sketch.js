const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var drops = [];
var maxDrops = 100;
function preload(){
    
}

function setup(){
   createCanvas(500,700);
   engine = Engine.create();
   world = engine.world;
   if(frameCount%150 === 0){
   for(var i = 0;i<maxDrops;i++){
       drops.push(new Drp(random(0,500),random(0,700)))
   }
}
}

function draw(){
    Engine.update(engine);
    background("black");
   for(var i = 0;i<maxDrops;i++){
       drops[i].showDrop();
       drops[i].updateY();

   }
   drawSprite();
}   

