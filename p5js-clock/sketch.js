let sc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  clocksize = windowHeight/1.5;

}

function draw() {
  sc = second();
  background(0);
  translate(width/2,height/2);
  rotate(-90);
  let mn = minute() + (sc / 60);
  let hr = hour() + (mn / 60);


  strokeWeight(clocksize/50);
  noFill();

  //hours
  stroke(255,0,255);
  let hand3 = map (hr % 12 , 0, 12, 0, 360);
  arc(0,0, clocksize-(clocksize/10), clocksize-(clocksize/10), 0, hand3);

  push();
  rotate(hand3);
  line(0,0,clocksize-(clocksize/1.3),0);
  pop();

  //mins
  stroke(0,255,120);
  let hand2 = map (mn, 0, 60, 0, 360);
  arc(0,0, clocksize-(clocksize/20), clocksize-(clocksize/20), 0, hand2);

  push();
  rotate(hand2);
  line(0,0,clocksize-(clocksize/1.4),0);
  pop();
  
  //seconds
  stroke(255,0,120);
  let hand1 = map (sc, 0, 60, 0, 360);
  arc(0,0, clocksize, clocksize, 0, hand1);

  push();
  rotate(hand1);
  line(0,0,clocksize-(clocksize/1.5),0);
  pop();



  // fill(255);
  // noStroke();
  // text(hr + ':' + mn + ':' + sc, 10, 200);
}
