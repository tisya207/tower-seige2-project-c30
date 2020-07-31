class Box extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/wood1.png");
    this.visibility = 255;

  }
display(){
  var pos = this.body.position;
if(this.body.speed<3){
  super.display()
}
else{
 World.remove(world,this.body)
 push()
 this.visibility = this.visibility-5
tint(255,this.visibility);
rect(this.body, pos.x, pos.y, 50,50);
pop()
}
  //console.log(this.body.speed)
  
}
};


/*class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  //  this.image = loadImage("sprites/wood1.png");
  
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("yellow");
    rect(pos.x, pos.y, this.width, this.height);
  }
};*/

