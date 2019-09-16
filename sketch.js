var angle;

var slider;

function setup() {
  // put setup code here
  createCanvas(600, 600);
  slider = createSlider(0, TWO_PI, PI/4, 0.01);


}

function draw() {
  // put drawing code here
  background(50);
  angle = slider.value();
  stroke(255);
  translate(300, height);
  branch(100);
}

function branch(length){
line(0, 0, 0, -length);
translate(0, -length);
  if (length > 3) {
    push();
    rotate(angle);
    branch(length * 0.7);
    pop();
    push();
    rotate(-angle);
    branch(length * 0.7);
    pop();
  }
}
