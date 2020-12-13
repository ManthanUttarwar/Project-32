class polygon{
      constructor(x,y,radius){
        var options ={
          friction : 0.1
        }
        
        this.radius = radius
        this.body = Bodies.circle(x,y,radius,options);
        this.image = loadImage("polygon.png");
        World.add(world,this.body);   
      }
      
      display(){
        var pos =this.body.position;           
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
}