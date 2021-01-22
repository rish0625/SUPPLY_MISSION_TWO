class Box{
    constructor(x, y, width, height){
        var boxProp = {
            isStatic: true
        }

        this.body = Bodies.rectangle(x, y, width, height, boxProp);
        this.body.shapeColor=color("red");
        World.add(world, this.body);
        this.width = width;
        this.height = height;
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}