// frequency / mod => x and y
let fX, fY, mX, mY;

function setup() {
  createCanvas(window.innerWidth - 25, window.innerHeight - 150).parent("canvas").mouseClicked(rand);
  colorMode(RGB)
  noFill()
  frameRate(30)  
}
 
function rand() {
  fX = floor(random(1, 100))
  fY = floor(random(1, 100))
  mX = floor(random(1, 100))
  mY = floor(random(1, 100))
}

function addVert(i) {
  curveVertex(
    sin(i * fX + radians(frameCount * 3)) * cos(i * mX) * width / 2,
    sin(i * fY) * cos(i * mY) * height / 2
  )
}

function draw() {
  background(0);
  let i = 0;
  clear()

  translate(width / 2, height / 2)
  beginShape()
  fill(255)
  addVert(i)
  for (i; i < TWO_PI; i += TWO_PI / 180) {
    addVert(i)
  }
  addVert(i)
  endShape()
}