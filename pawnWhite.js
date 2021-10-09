class PawnWhite extends BaseClass {
  constructor(x, y,index) {
    super(x, y);
    this.initialX = x;
    this.initialY = y;
    this.image = loadImage("im2/hunter.png");
    this.body.addImage("pawn", this.image);
    this.body.scale = 0.08;
    this.token=index  
  }
  movement(){
    if(this.body.x >= (mouseX - 25) && this.body.x <= (mouseX + 25) 
    && this.body.y >= (mouseY - 25) && this.body.y <= (mouseY + 25) && token==this.token) {
        this.body.x = mouseX
        this.body.y = mouseY
    }
  }
  projection(){
    if(this.body.x >= (mouseX - 25) && this.body.x <= (mouseX + 25) 
    && this.body.y >= (mouseY - 25) && this.body.y <= (mouseY + 25) && token==this.token) {
        push()
        fill(rgb(0,0,100));
        rectMode(CENTER)
        rect(this.initialX+50,this.initialY+50,50,50)
        rect(this.initialX-50,this.initialY+50,50,50)
        rect(this.initialX,this.initialY+100,50,50)
        pop()
    }
  }
  restriction() {
    if(token==this.token){
      if(this.body.x>=this.initialX && this.body.y>this.initialY && this.body.y<this.initialY+75 ){
          this.body.x= this.initialX+50
          this.body.y=this.initialY+50
          console.log(this.body.x+","+this.body.y)
      }
      else if(this.body.x<=this.initialX && this.body.y>this.initialY && this.body.y<this.initialY+75){
          this.body.x= this.initialX-50
          this.body.y=this.initialY+50
          console.log(this.body.x+","+this.body.y)
      }else if(this.body.y>this.initialY+75){
          this.body.x=this.initialX
          this.body.y=this.initialY+100
      }else{
          this.body.x=this.initialX
          this.body.y=this.initialY
      }
    
      this.initialX=this.body.x
      this.initialY=this.body.y
    }else{
      this.body.x=this.initialX
      this.body.y=this.initialY
    }
  }
}
