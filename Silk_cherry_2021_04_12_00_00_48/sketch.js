let planets = [];
class intro{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  render(){
    noFill();
    stroke(0);
    strokeCap(ROUND);
    strokeWeight(this.y/2);
    let angleMax = map(mouseX,0,windowWidth,0,360);
    let angle = map(this.x,0,windowWidth,0,angleMax);
    let xVar = map(sin(radians(angle)),0,1,0,15);
    bezier(this.x,0,this.x-xVar,windowHeight/2,this.x+xVar,windowHeight/2,this.x,windowHeight);
    bezier(this.x,0,this.x+xVar,windowHeight/2,this.x-xVar,windowHeight/2,this.x,windowHeight);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i= 0; i<windowWidth;i+=10){
    planets[i/10] = new intro(
    i,10)
  }
}

function draw() {
  background(255);
  for(let int of planets){
    int.render();
  }
}