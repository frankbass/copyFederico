let counter = 0;

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  cnv.style("z-index", "-1");
  polygon.initialize();
  stroke(0, 100);
  strokeWeight(1);
  pointLight(255, 255, 255, 0, 0, 0);
  specularMaterial(50, 250, 150, 100);
}

function draw() {
  // clear();
  background(100,100);
  push();
  polygon.display();
  pop();
  counting();
}

function mousePressed() {
  counter = 0;
}

function counting() {
  if (frameCount % 300 == 0) {
    polygon.newGoals();
    counter++;
    if (counter > 6) { // 0-5 6 counts long
      counter = 0;
    }
  }
}
