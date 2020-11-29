class Tree {
    constructor(x,y) {
        this.image = 'Plucking+mangoes/tree.png'
    }
    display() {
        var pos =this.body.pos;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}