var legs1, legs2, legs3, legs4;
var eyes1, eyes2, eyes3, eyes4;

var show = 0;
var legChoice, eyeChoice;

function preload() {
  legs1 = loadImage("legs/1.png");
  legs2 = loadImage("legs/2.png");
  legs3 = loadImage("legs/3.png");
  legs4 = loadImage("legs/4.png");

  eyes1 = loadImage("eyes/1.png");
  eyes2 = loadImage("eyes/2.png");
  eyes3 = loadImage("eyes/3.png");
  eyes4 = loadImage("eyes/4.png");
}

function setup() {
  createCanvas(800, 600);

}

function draw() {
  background(100);

  if (show == 1) {
    creature(100, 50, legChoice, eyeChoice);
  }

}

function mouseReleased() {
  legChoice = int(random(4));
  eyeChoice = int(random(4));
  show = 1;
}

function creature(size, head, leg, eye) {
  print(leg);

  noStroke();
  circle(width / 2, height / 2, size);
  circle(width / 2, (height / 2) - 50, head);

  if (leg == 0) {
    image(legs1, (width / 2) - 60, (height / 2) + 20);
  }

  if (leg == 1) {
    image(legs2, (width / 2) - 60, (height / 2) + 20);
  }

  if (leg == 2) {
    image(legs3, (width / 2) - 60, (height / 2) + 20);
  }

  if (leg == 3) {
    image(legs4, (width / 2) - 60, (height / 2) + 20);
  }

  if (eye == 0) {
    image(eyes1, (width / 2) - 150, (height / 2) - 150);
  }

  if (eye == 1) {
    image(eyes2, (width / 2) - 150, (height / 2) - 150);
  }

  if (eye == 2) {
    image(eyes3, (width / 2) - 150, (height / 2) - 150);
  }

  if (eye == 3) {
    image(eyes4, (width / 2) - 150, (height / 2) - 150);
  }

}