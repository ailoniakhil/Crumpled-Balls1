class Paper{
    constructor(x,y,r){
      var options = {
          isStatic: false,
          friction: 0.5,
          density: 1.2,
          restitution: 0.3
      }  
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(world,this.body)

        
    }
    display(){
      // this.body.position.x = mouseX
      // this.body.position.y = mouseY
        ellipseMode(CENTER)
        push()
        fill("yellow");
        translate(this.body.position.x, this.body.position.y)
        rotate(this.body.angle)
        ellipse(0,0, this.r, this.r);
        pop()
    }
}