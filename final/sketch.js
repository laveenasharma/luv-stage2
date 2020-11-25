var gameState,bg;
var platform,platform1,platform2;
var doorOpen,openingSwitch,doorLocked;
var lP1;
var run, jump,dead, shoot,slide;

function preload(){
  bg=loadImage("bg.jpg");
  platform=loadImage("Tiles.png");
  platform1=loadImage("Tiles1.png");
  platform2=loadImage("Tiles2.png");
  doorOpen=loadImage("DoorOpen.png");
  openingSwitch=loadImage("greenSwitch.png");
  doorLocked=loadImage("DoorLocked.png");
  
  
  run=loadAnimation("Run1.png","Run2.png","Run3.png","Run4.png","Run5.png","Run6.png","Run7.png","Run8.png");
  
  // jump=loadAnimation("Jump1.png","Jump2.png","Jump3.png","Jump4.png","Jump5.png","Jump6.png","Jump7.png","Jump8.png","Jump9.png","Jump10.png");
  
  //dead=loadAnimation("Dead1.png","Dead2.png","Dead3.png","Dead4.png","Dead5.png","Dead6.png","Dead7.png","Dead8.png","Dead9.png","Dead10.png");
  
  //slide=loadAnimation("Slide1.png","Slide2.png","Slide3.png","Slide4.png","Slide5.png","Slide6.png","Slide7.png","Slide8.png");
  
  //shoot=loadAnimation("Shoot1.png","Shoot2.png","Shoot3.png","Shoot4.png");
  
  //bullet=loadAnimation("Bullet1.png","Bullet2.png","Bullet3.png");
  
  //runShoot=loadAnimation("RunShoot1.png","RunShoot2.png","RunShoot3.png","RunShoot4.png","RunShoot5.png","RunShoot6.png","RunShoot7.png","RunShoot8.png","RunShoot9.png");
  
  //idle=loadAnimation("Idle1.png","Idle2.png","Idle3.png","Idle4.png","Idle5.png","Idle6.png","Idle7.png","Idle8.png","Idle9.png","Idle10.png");
}


function setup() {
  createCanvas(600, 600);
  gameState="page1";
  edges=createEdgeSprites();
  movingPlatforms();
  staticPlatform();
  InvisibleBoundries();
 
  robot=createSprite(25,500,10,50);
  robot.addAnimation("running",run);
robot.visible=false;
robot.scale=0.12;

  Door=createSprite(560,180,20,20);
  Door.addImage(doorLocked);
  Door.scale=0.2;

  greenSwitch=createSprite(500,200,20,20);
  greenSwitch.addImage(openingSwitch);
  greenSwitch.scale=0.2;
}

function draw() {
  background(bg);
  Shuffle();
//Robot();



//robotColliding();
   
  if (gameState==="start"){
   instructions();
   
  }
  
  if (gameState==="page1"){
  Page1();
  
  } 
  
  if(gameState==="page2"){
    Page2();
    
   
  
    
  }
   if(gameState==="page3"){
    Page3();
    
    
  }

  if(gameState==="page4"){
    Page4();
    
  
  }

// robotColliding();
  
  drawSprites();  
}

function up(){
  if(keyDown("space")){
    robot.velocityY=-10;
    console.log("check");
   }
   robot.velocityY+=0.5;
}

function right(){
  if(keyDown("right")){
    robot.x+=2;
   }
}

function left(){
  if(keyDown("left")){
    robot.x-=2;
 }
}
function instructions(){
  textSize(30);
  fill("red");
  text("Robot Run",280,100);
  
  textSize(20);
  fill("blue");
  text("Press Space to start",350,450);
  if (keyDown("Space")){
    gameState="page1";
  }
}

function Robot(){

}

function movingPlatforms(){
      mp1=createSprite(350,500,100,5);
      mp1.addImage(platform2);
      mp1.scale=0.2;
      mp1.velocityY=-4;
      mp1.velocityX=0;
      mp1.visible=false;
    
      mp2=createSprite(230,100,100,5);
      mp2.addImage(platform2);
      mp2.scale=0.2;
      mp2.velocityY=4;
      mp2.visible=false;
      mp2.bounceOff(edges);
  
      mp3=createSprite(200,400,100,5);
      mp3.addImage(platform2);
      mp3.scale=0.2;
      mp3.velocityX=2;
      mp3.visible=false;
  
      mp4=createSprite(200,400,100,5);
      mp4.addImage(platform2);
      mp4.scale=0.2;
      mp4.velocityX=2;
      mp4.visible=false;
}

function staticPlatform(){
      sp1=createSprite(50,550,200,10);
      sp1.scale=0.2;
      sp1.visible=false
        
      sp2=createSprite(300,400,200,10);
      sp2.scale=0.2; 
      sp2.visible=false

      sp3=createSprite(530,250,200,10);
      sp3.scale=0.2; 
      sp3.visible=false

      sp4=createSprite(530,250,200,10);
      sp4.scale=0.2; 
      sp4.visible=false
}

function InvisibleBoundries(){
      h1=createSprite(300,70,600,2);
      h2=createSprite(300,530,600,2);
      v1=createSprite(70,300,2,600);
      v2=createSprite(530,300,2,600);
      hm1=createSprite(300,220,600,2);
      hm2=createSprite(300,380,600,2);
      vm1=createSprite(220,300,2,600);
      vm2=createSprite(380,300,2,600);
}

function Shuffle(){
      mp1.bounceOff(h1);
      mp1.bounceOff(h2);
    
      mp2.bounceOff(h1);
      mp2.bounceOff(h2);
      
      mp3.bounceOff(v1);
      mp3.bounceOff(vm2);

      mp4.bounceOff(v1);
      mp4.bounceOff(vm2);
}

function Page1(){

  robot.visible=true;

  sp1.visible=true
sp1.addImage(platform);
sp1.scale=0.2;
    
sp2.visible=true
sp2.x=250
sp2.y=440
  sp2.addImage(platform2);
  sp2.scale=0.2; 
  
  sp3.visible=true
  sp3.x=580;
 sp3.addImage(platform);
 sp3.scale=0.2; 

 sp4.visible=true
sp4.x=350;
sp4.y=320;
 sp4.addImage(platform2);
 sp4.scale=0.2; 

 //
 robot.collide(sp1);
  robot.collide(sp2);
  robot.collide(sp3);
  robot.collide(sp4);
up();
right();
left();



  if (robot.isTouching(greenSwitch)){
    Door.addImage(doorOpen);
  }
  
 if (robot.isTouching(Door)){
    gameState="page2";
  }

}

function Page2(){
robot.visible=true;
robot.x=0;
robot.y=250;
left();
right();
up();

  sp1.visible=true
  sp1.x=65;
  sp1.y=350;
  sp1.addImage(platform1);
    
  
    sp2.visible=true;
    sp2.x=550;
    sp2.y=550;
    sp2.addImage(platform);

  sp3.visible=true;
  sp4.visible=true;
  mp1.visible=true;
  mp3.visible=true;
  mp4.visible=true;
 
    mp2.visible=true;
    mp2.addImage(platform1);

    robot.collide(sp1);
  robot.collide(sp2);
  robot.collide(mp2);
  

  Door.visible=false;

  greenSwitch.x=550;
  greenSwitch.y=500;

left();
right();
up();
  
        
}

function Page3(){
   var ground=createSprite(45,550,200,10);
    ground.addImage(platform1);
    ground.scale=0.2;
  
    lP3.visible=true;
  // lP1.visible=true;
  
   var ground1=createSprite(530,150,200,10);
    ground1.addImage(platform1);
    ground1.scale=0.2;
  
  var ground2=createSprite(400,250,200,10);
    ground2.addImage(platform1);
    ground2.scale=0.2;
}

function Page4(){
  lP1.x=200;
  lP1.visible=true;
 
}

function robotColliding(){
  robot.collide(sp1);
  robot.collide(sp2);
  robot.collide(sp3);
  robot.collide(sp4);
  

  robot.collide(mp1);
  robot.collide(mp2);
  robot.collide(mp3);
  robot.collide(mp4);
}