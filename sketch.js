// SeongHyeon Lee
// Draw A Panda Exercise
// CS099
// Spring 2020.4.1


function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(10,150,225,100);
  push()
  strokeWeight(40);
  strokeCap(ROUND);
  line(350,600,350,700);
  line(450,600,450,700);
  line(200,250,300,350);
  line(600,250,500,350);
  pop()
  ellipse(400,450,350,400);
  push()
  fill('black')
  circle(330,120,50);
  circle(470,120,50);
  pop()
  circle(400,200,200);
  push()
  strokeWeight(20);
  ellipse(360,180,40,40);
  ellipse(440,180,40,40);
  pop()
  push()
  fill('black')
  strokeJoin(ROUND);
  arc(400,230,30,20,0,PI,CHORD);
  circle(435,180,5);
  circle(365,180,5);
  pop()
  line(400,240,400,250);
  line(400,250,410,260);
  line(400,250,390,260);
   push()
  fill(0,255,0);
  noStroke();
  rect(100,300,10,500);
  rect(80,300,10,500);
  rect(60,300,10,500);
  rect(40,300,10,500);
  pop()
  push()
  fill(50);
  circle(100,800,100);
  circle(50,820,100);
  circle(0,840,100);
  pop()
  push()
  fill(10,10,100);
  ellipse(400,900,800,300);
  pop()
  push()
  fill(0,225);
  circle(400,550,20);
 pop()
  push()
  noFill()
  ellipse(400,900,400,150);
  ellipse(400,900,200,75);
  ellipse(400,900,100,38);
 pop()
  

 


  
}