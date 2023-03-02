class Tower {

constructor(x, y){

  this.body = Bodies.rectangle(x, y, 40, 40);
  World.add(world, this.body);

}

display(){

  rect(this.body.position.x, this.body.position.y, 40, 40);
    
  console.log(this.body.position.x + this.body.position.y);

}








































}