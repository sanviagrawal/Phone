var balls = []; 


function setup() {
  createCanvas(480, 240);
  balls.push(new Ball(150,0,40));
}

function draw() {
  background(0,191,255);
  
  for(var x = 0; x < balls.length; x ++ ) { 
    balls[x].update();
    balls[x].display();
  }
}

function mousePressed() {
  var b = new Ball(mouseX,mouseY,40);
  balls.push(b);
}
function keyPressed() {
  var b = new Ball(mouseX,mouseY,40);
  balls.pop(b);
}



