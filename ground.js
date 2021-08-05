class Ground {
    constructor(x,y,width,height) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }
    display() {
        var pos = this.body.position;
        rectMode(CENTER)
        fill("green");
        strokeWeight(2);
        stroke("red");
        rect(pos.x,pos.y,this.width,this.height);
    }
}