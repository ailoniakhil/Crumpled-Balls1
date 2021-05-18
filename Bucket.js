class Bucket{
    constructor(x,y,width,height, angle){
        this.width = width;
        this.height = height;
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,this.width,this.height, options);
        Body.setAngle(this.body, angle)
        World.add(world,this.body);
        
    }
    display(){
        rectMode(CENTER);  
        push()
        fill("Blue")
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        rect(0,0, this.width, this.height)
        pop()
      }
     
}