class Mango {
    constructor(x,y,radius) {
        var options ={
        isStatic:true,
        restitution:0,
        friction:1,
        density:1.2
        }
    }
    display() {
        var pos =this.body.pos;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}
