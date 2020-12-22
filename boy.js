class Boy{
 constructor(x,y,width,hight){
     var options = {
         isStatic:true,
        }
    this.image = loadImage("Plucking mangoes/boy.png");
    this.body = Bodies.rectangle(x,y,width,hight,options);
    this.width=width;
    this.hight=hight;
    World.add(world,this.body);

 }
 display(){ 
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    strokeWeight(4);
    image(this.image,0,0,this.width,this.height);
    pop();
}
}