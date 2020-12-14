class PP{
constructor(bodyA,bodyB,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsetY=offsetY

 var options={
bodyA:bodyA,
bodyB:bodyB,
pointB:{x:this.offsetX,y:this.offsetY}

 }


    this.rope=constraint.create(options)
    World.add(world,this.rope)



}




display(){
var posA =this.body.bodyA.position
var posB=this.body.bodyB.position
strokeWeight(5)
line(posA.x,posA.y,posB.x,posB.y)
}

}