let polygon = {
  theta: 0,
  goal: 0,
  zeta: 0,
  zetaGoal: 0,
  length: 350,
  xMid: 0,
  x1: 0,
  x2: 0,
  depth: 0,
  theta: 0,

  initialize: function() {
    this.length= windowHeight;
    this.xMid= this.length / 2;
    this.x1= this.length / 3;
    this.x2= 2 * this.length / 3;
    this.depth= this.length / 8;
    this.theta= Math.random(10);
  },

  newGoals: function() {
    if (counter == 0) {
      this.zetaGoal = random(50) + 10;
    }
    this.goal += random(2);
  },

  display: function() {

    if (counter < 4) { //0-3 solid
      if (this.zeta > 0) {
        this.zeta -= .0005;
      }
    }
    if (counter > 3) { //4-6 broken
      if (this.zeta < this.zetaGoal) {
        this.zeta += .0005;
      }
    }
    if (this.theta < this.goal) {
      this.theta += .001;
    }

    rotateX(this.theta + frameCount * 0.001);
    rotateY(this.theta + frameCount * 0.001);
    rotateZ(this.theta + frameCount * 0.001);
    beginShape();
    vertex(0, 0, 0); //a
    vertex(this.x1, -this.depth, this.depth); //b
    vertex(this.x2, this.depth, this.depth); //c
    vertex(this.x2, this.depth, -this.depth); //d
    endShape(CLOSE);
    rotateX(this.zeta);
    beginShape();
    vertex(0, 0, 0); //a
    vertex(this.x2, this.depth, -this.depth); //d
    vertex(this.x1, -this.depth, -this.depth); //e
    vertex(this.x1, -this.depth, this.depth); //b
    endShape(CLOSE);
    rotateY(this.zeta * 2);
    beginShape();
    vertex(this.length, 0, 0); //f
    vertex(this.x1, -this.depth, this.depth); //b
    vertex(this.x2, this.depth, this.depth); //c
    vertex(this.x2, this.depth, -this.depth); //d
    endShape(CLOSE);
    rotateZ(this.zeta);
    beginShape();
    vertex(this.length, 0, 0);
    vertex(this.x2, this.depth, -this.depth); //d
    vertex(this.x1, -this.depth, -this.depth); //e
    vertex(this.x1, -this.depth, this.depth); //b
    endShape(CLOSE);
  }
}
