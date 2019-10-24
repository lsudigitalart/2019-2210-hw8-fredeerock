var show;

var legChoice, eyeChoice;

var legs = [];
var eyes = [];

function preload() {

  for (var l = 0; l < 4; l++) {
    legs[l] = loadImage("legs/" + l + ".png");
  }

  for (var e = 0; e < 4; e++) {
    eyes[e] = loadImage("eyes/" + e + ".png")
  }
}

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);

}

function draw() {
  background(100);

  if (show == 1) {
    creature(eyeChoice, legChoice);
  }

}

function mouseReleased() {
  eyeChoice = int(random(4));
  legChoice = int(random(4));
  show = 1;
}

function creature(eye, leg) {
  image(legs[leg], width / 2, height / 2);
  image(eyes[eye], width / 2, (height / 2) - 100);
}
