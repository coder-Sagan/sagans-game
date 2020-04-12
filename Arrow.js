/*class Arrow {
    constructor(x,y) {
     var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
      }
      
      this.body = Bodies.rectangle(x,y,200,100,options);
      this.width = 200;
      this.height = 100;
      this.image=loadImage("images/arrow1.png");
      this.image.scale=1.0;
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
     imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();

     
  }
}*/
class Arrow extends BaseClass {
  constructor(x,y){
    super(x,y,200,100);
    this.image = loadImage("images/arrow1.png");
    //this.smokeImage = loadImage("sprites/smoke.png");
    //this.trajectory =[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    /*if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   
    
    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }*/
  }
}
  
