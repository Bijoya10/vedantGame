var board = [];
var pwhite = [], pblack = [];
var token=0
var elephantB, elephantW, elephatb1, elephantW1;
var knightb1, knightb2, knightw1, knightw2;
var bishopb1, bishopb2, bishopw1, bishopw2;
var bking, wking, bqueen, wqueen;
var wqueenim, bqueenim, bkingim, wkingim, elephantbim, elephantwim, knightbim, knightwim, bishopbim, bishopwim, pwhiteing, pblackimg;

function preload() {
  wqueenim = loadImage("im2/QUEEN.png");
  bqueenim = loadImage("im2/tiger.png");
  bkingim = loadImage("im2/lion2.png");
  wkingim = loadImage("im2/king.png");
  elephantbim = loadImage("im2/elephant.png");
  elephantwim = loadImage("im2/human.png");
  knightbim = loadImage("im2/horse.gif");
  knightwim = loadImage("im2/mad-scientist.png");
  bishopbim = loadImage("im2/rino.png");
  bishopwim = loadImage("im2/ninga.png");
}

function setup() {
  createCanvas(400, 400);
  createBoard();
  createPieces();
 
}

function draw() {
  background(255, 255, 255);
  drawSprites();
  if(mouseIsPressed){
    for (let i = 0; i < pblack.length; i++) {
      pblack[i].projection()
      if(pblack[i].x >= (mouseX - 25) && pblack[i].x <= (mouseX + 25) 
      && pblack[i].y >= (mouseY - 25) && pblack[i] .y<= (mouseY + 25)) {
        token="pawnBlack"+i
      }

      pwhite[i].projection()
      if(pwhite[i].x >= (mouseX - 25) && pwhite[i].x <= (mouseX + 25) 
      && pwhite[i].y >= (mouseY - 25) && pwhite[i] .y<= (mouseY + 25)) {
        token="pawnWhite"+i
      }
    }
  }
}

function mouseDragged() {
  for (let i = 0; i < pwhite.length; i++) {
    pwhite[i].movement()
  }
}

function mouseReleased(){
  for (let i = 0; i < pwhite.length; i++) {
    pwhite[i].restriction()
  }
}