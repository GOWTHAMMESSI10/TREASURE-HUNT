var bg,bg2,form,system,code,security;
var score=0;

var textInput1, textInput2, textInput3;
var button1, button2, button3;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
  
  textInput1 = createInput('input')
  textInput2 = createInput('input')
  textInput3 = createInput('input')
  button1 = createButton('check')
  button2  = createButton('check')
  button3 = createButton('check')

  textInput1.position(200,100);
  button1.position(200,150);
  textInput2.position(200,400);
  button2.position(200,450);
  textInput3.position(700,250);
  button3.position(700,300);

}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen


  // Add code to display the end screen


  drawSprites()
}