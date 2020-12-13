class block
{
    constructor(x, y, width, height,)  {
        var options = {
            'restitution':0.8,
            'friction':0.1
           
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height; 
        this.Visibility = 255; 
        World.add(world, this.body);
      }
      display()
      {
      if(this.body.speed<3)
        {
          var angle = this.body.angle;
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0, 0, this.width, this.height);
          pop();
          
        }
        else
        {
         // var pos = this.body.position;
          World.remove(world,this.body);
          push();
          this.Visibility = this.Visibility-2;
          tint(255,this.Visibility);
          rect(0,0,this.width,this.height);
          pop();    
        }
      }

      score()
      {
        if(this.Visiblity<0&&this.Visiblity>-105)
        {
          score++
        }
      }
}