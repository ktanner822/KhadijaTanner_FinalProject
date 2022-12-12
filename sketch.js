//Final is Alien Abduction Narrative Scene. Will work on adding multiple scenes, making the narrative have more depth. 

let color1;
let color2;
let c;
let stars = [];// this sets the variable stars to an empty array in order for it hold and store multiple values when ran. 
let sky = 0;
let y1 = 90;
let y2 = 100;
let fly;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //color gradient for night sky
    color1= color(7, 4, 117);
    color2= color(4, 2, 71);

// this for loop iterates through the array or list of the stars variable as a new star gets added to it from the 'Star' class.
  for (let i = 0; i < 1000; i++) {
    stars[i] = new Star(random(width), random(height), random(255))
  }
  
  fly = 1; 
   
  
}

function draw() {
  //sky
  circle(mouseX, mouseY, 20);
  for(let y=0; y<height; y++){
    n = map(y,0,height,0,1);
    let sky = lerpColor(color1, color2, n); //lerpColor blends two colors to find a third color somewhere between them. I thought using a gradient for the sky would make it less flat 
    stroke(sky);
    line(0,y,width, y);
  }
  //this for loop is for the stars to be displayed, if commented out, no error is found, stars just do not show up.
  //stars.length is the length of the stars array
    for (let i = 0; i < stars.length; i++) {
    stars[i].showStar();
    }
  houseSceneOne();
  
  
  if(frameCount > 250){
    spaceshipBeamSceneThree();
  }
  
  if (frameCount > 200){
  spaceshipSceneTwo(); 
  }
  while (y1 != 90 & y2 != 100){
    y1 += fly; 
    y2 += fly; 
  }
  
  if(frameCount > 500){
    background(3, 15, 82);
    spaceshipSceneFour();
    
  }
  
    
}





function houseSceneOne(){
    //House
  stroke(0);
  fill(38, 29, 24);
  rect(500,400,500,500);
  //windows
  stroke(3);
  fill(1, 3, 28);
  rect(550,550, 80,130);
  rect(870,550, 80,130);
  fill(38, 29, 24);
  rect(585,550,10,130)
  rect(905,550,10,130)
  rect(550,600,80,10);
  rect(870,600,80,10);
  //door
  fill(23, 19, 17);
  rect(670,530,160,250);
  fill(237, 228, 47);
  ellipse(810,660,20,20);
  fill(1, 3, 28);
  ellipse(750,600,60,60);
  fill(64, 64, 66);
  rect(710,700,80,20);
  //bushes
  fill(22, 48, 14);
  ellipse(595,740,120,80);
  ellipse(900,740,80,70);
  ellipse(950,740,80,70);
  //roof
  triangle(412,426,1077,422,744,80);
  fill(237, 205, 64)
  arc(750, 460, 80, 80, 0, PI)
  noStroke();
  fill(252, 252, 131, 50);
  //triangle(715,550,786,550,749,488);
  //tree
  stroke(0);
  strokeWeight(2);
  fill(43, 34, 29)
  rect(150,460,100,300);
  fill(1, 36, 9);
  ellipse(200,400,200,150);
  ellipse(200,540,300,200);
  //glow porch light
  noStroke();
  fill(255,255,100,4);
  for(i = 0; i < 70; i++){
    ellipse(750,495, i);
  }
  //attic window
  stroke(3);
  fill(1, 3, 28);
  ellipse(750,300,100,100);
  fill(38, 29, 24);
  rect(745,250,10,100)
  rect(700,300,100,10)
}


function spaceshipSceneTwo(){
  fill(168, 237, 236);
  ellipse(750,y1,150,150);
  fill(89, 87, 87);
  arc(750, y2, 200, 200, 0, PI);
  
}

function spaceshipBeamSceneThree(){
  fill(168, 237, 236,150);
  triangle(650,400,857,400,750,167);
}


function spaceshipSceneFour(){
  
    //planet 1 
  fill(209, 94, 209);
  ellipse(300,250,200,200);
  
  fill(199, 127, 219)
  ellipse(300,250,180,180);
  
  fill(209, 94, 209);
  ellipse(300,250,140,140);
  
//planet 2
  fill(173, 184, 15);
  ellipse(1200,250,150,150);
  
  fill(175, 219, 127)
  ellipse(1200,250,100,100);
  
  //moon
  fill(155, 156, 163)
  ellipse(750,250,500,500);
  noStroke();
  fill(129, 130, 133);
  ellipse(650,250,50,100);
  ellipse(600,350,30,20);
  ellipse(750,150,40,40);
  ellipse(800,400,60,70);
  //spaceship window
  fill(168, 237, 236, 150);
  rect(0,0,1500,400);
  fill(141, 141, 143);
  rect(0,400,1500,400);
  fill(73, 73, 74)
  rect(0,700,1500,200);
  //motherboard
  rect(600,400,280,240);
  
  //red
  
  fill(232, 19, 19)
  rect(600,400,40,40);
  rect(600,560,40,40);
  rect(760,400,40,40);
  rect(640,440,40,40);
  rect(800,440,40,40);
  rect(680,480,40,40);
  rect(840,480,40,40);
  rect(720,520,40,40);
  rect(760,560,40,40);
  rect(640,600,40,40);
  rect(800,600,40,40);
  
  //blue
  fill(19, 37, 232)
  rect(600,440,40,40);
  rect(600,600,40,40);
  rect(720,400,40,40);
  rect(760,440,40,40);
  rect(640,480,40,40);
  rect(800,480,40,40);
  rect(680,520,40,40);
  rect(840,520,40,40);
  rect(720,560,40,40);
  rect(760,600,40,40);
  
  //green
  fill(17, 237, 9)
  rect(600,480,40,40);
  rect(640,400,40,40);
  rect(800,400,40,40);
  rect(680,440,40,40);
  rect(840,440,40,40);
  rect(720,480,40,40);
  rect(640,520,40,40);
  rect(760,520,40,40);
  rect(680,560,40,40);
  rect(800,560,40,40);
  rect(720,600,40,40);
  rect(840,600,40,40);

  //purple
  fill(165, 9, 237);
  rect(600,520,40,40);
  rect(680,400,40,40);
  rect(840,400,40,40);
  rect(720,440,40,40);
  rect(760,480,40,40);
  rect(800,520,40,40);
  rect(640,560,40,40);
  rect(840,560,40,40);
  rect(680,600,40,40);
  
  //buttons 
  fill(64, 2, 94)
  ellipse(300,520,40,40);
  fill(165, 9, 237);
  ellipse(300,520,30,30);
  
  fill(189, 139, 11)
  ellipse(350,600, 40,40);
  fill(237, 176, 21)
  ellipse(350,600, 30,30);
  
  fill(5, 176, 159)
  ellipse(200,500,40,40)
  fill(10, 245, 221)
  ellipse(200,500,30,30)
  
  fill(150, 5, 138);
  ellipse(420,520,40,40);
  fill(232, 9, 214);
  ellipse(420,520,30,30);
  
  //handle
  fill(61, 60, 61);
  rect(520,500,30,80);
  fill(209, 207, 209)
  rect(532,470,5,60);
  fill(0);
  ellipse(534,470,20,20);
  //Big Red Button
  rect(1025,500,80,100);
  fill(255,0,0);
  ellipse(1065,550,50,50);
  fill(255,75)
  rect(1015,490,100,120);
  
  
}


//this is the Star class, reference https://editor.p5js.org/rios/sketches/60mJWGaWi 
class Star {
  constructor(starX, starY, starC) {
    this.x = starX;
    this.y = starY;
    this.c = starC;
  }
  showStar() {
    stroke(this.c);
    point(this.x, this.y);
  }
}





  







