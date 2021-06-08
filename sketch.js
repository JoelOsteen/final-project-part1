var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8;
var canvas;

function setup() {
  canvas=createCanvas(displayWidth,displayHeight);
  

 
  wall1= createSprite(150, 150, 350, 5);
     wall1.shapeColor="white";
  wall2= createSprite(323,225,5,150);
     wall2.shapeColor="white";
  wall3= createSprite(595.5,300,550,5);
      wall3.shapeColor="white";
  wall4= createSprite(873,277.5,5,50);
      wall4.shapeColor="white";
  wall5= createSprite(920.5,250,100,5);
      wall5.shapeColor="white";
  wall6= createSprite(973,177.5,5,150);
      wall6.shapeColor="white";
  wall7= createSprite(1120.5,100,300,5);
      wall7.shapeColor="white";
  wall8= createSprite(1273,202.5,5,210);
      wall8.shapeColor="white";
  wall9= createSprite(620,550,1250,5);
      wall9.shapeColor="white";
  wall10= createSprite(620,825,1700,5);
      wall10.shapeColor="white";
}

function draw() {
  background(0,0,0);  
  edges= createEdgeSprites();

  
  
  

  drawSprites();
}