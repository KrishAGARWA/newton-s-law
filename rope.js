class Po{
constructor(body1,body2,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsetY=offsetY

 var options={
bodyA:bodyA,
bodyB:bodyB,
pointB={x:this.offsetX,y:this.offsetY},

 }


    this.body=constraint.create(options)
    World.add(world,this.body)





    
}
display(){
var posA =this.body.bodyA.position
var posB=this.body.bodyB.position
strokeWeight(5)
line(posA.x,posA.y,posB.x,posB.y)
}





}