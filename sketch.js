var rexoc;
var playTime, loadTime;
var amp, level;
var bgcolor;
var fft;
//let myFont;

function preload() {
  rexoc = loadSound("rexoc.mp3");
  //myFont = loadFont('assets/inconsolata.otf');
}

function setup() {

  createCanvas(windowWidth,windowHeight,WEBGL);
  userStartAudio();
 
  //textFont(inconsolata);
  textSize(width / 3);
  if (rexoc.isLoaded()) {
    loadTime = millis();
    print(loadTime);
    rexoc.play();
  }

  amp = new p5.Amplitude();
  fft = new p5.FFT();
}

function draw() {
  background(0);
  noStroke();
  playTime = millis() - loadTime;
  // print(playTime);
  level = amp.getLevel();
  // print(level);

  mappedColor = map(level, 0, 1, 0, 255);

  cSize = map(level, 0, 1, 0, width);

  let lerping = lerpColor(color("red"), color("blue"), level)
  // fill(lerping);


  /*/ strokeWidth(10);
  if (playTime > 6000) {
    for (var i = 0; i < width; i++) {
      // grad1 = lerpColor(color("purple"), color("yellow"), map(i, 0, width, 0, 1));
      grad1 = lerpColor(color("green"), color("black"), level);
      stroke(grad1);
      line(i, 0, i, height);
    }
  }*/

  let time = millis();
  rotateX(time / 1000);
  rotateZ(time / 1234);
  text('Loving is Easy', 900, 600);



  var spectrum = fft.analyze();
  var trebleVol = fft.getEnergy("treble");
  var midVol = fft.getEnergy("mid");
  var bassVol = fft.getEnergy("bass");


  fill(255,140,0);
  circle(100,100, trebleVol);
  fill(255,69,0);
  circle(850,150, midVol);
  fill(255,165,0);
  circle(400,600, bassVol);


}