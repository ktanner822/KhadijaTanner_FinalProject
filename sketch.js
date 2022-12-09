//Final is Alien Abduction Narrative Scene. Will work on adding multiple scenes, making the narrative have more depth. 

let color1;
let color2;
let c;
let stars = [];// this sets the variable stars to an empty array in order for it hold and store multiple values when ran. 
let sky = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  //color gradient for night sky
    color1= color(7, 4, 117);
    color2= color(4, 2, 71);

// this for loop iterates through the array or list of the stars variable as a new star gets added to it from the 'Star' class.
  for (let i = 0; i < 1000; i++) {
    stars[i] = new Star(random(width), random(height), random(255))
  }
   
  
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
  fill(252, 252, 131)
  arc(750, 460, 80, 80, 0, PI)
  //tree
  fill(43, 34, 29)
  rect(150,460,100,300);
  fill(22, 48, 14);
  ellipse(200,400,200,150);
  ellipse(200,540,300,200);
  
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





  







