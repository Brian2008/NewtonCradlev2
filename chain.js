class Chain{
    constructor(body1,body2,offsetX,offsetY)
    {
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            bodyA: body1,
            bodyB: body2,
            stiffness: 0.04,
            length:10,
            pointB: {x:this.offsetX, y:this.offsetY}
            
                                                        
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    display()
{
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position;

    strokeWeight(2);
    stroke("red")
    var Anchor1X=pointA.X
    var Anchor1Y=pointA.Y

    var Anchor2X=pointB.x+this.offsetX
    var Anchor2Y=pointB.y+this.offsetY

    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
}
}
