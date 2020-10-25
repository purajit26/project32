class blockClass{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
         World.add(world, this.body);
    
         block1=new Block(330,235,25,35);
         block2=new Block(360,235,25,35);
         block3=new Block(390,235,25,35);
         block4=new Block(420,235,25,35);
         block5=new Block(450,235,25,35);
         block6=new Block(360,195,25,35);
         block7=new Block(390,195,25,35);
         block8=new Block(420,195,25,35);
         block9=new Block(390,195,25,35);
         block10=new Block(390,155,25,35);
         block11 = new Block(390,255,150,10);
         
    
    }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
     
        block1.display();
        block2.display();
        block3.display();
        block4.display();
        block5.display();
        block6.display();
        block7.display();
        block8.display();
        block9.display();
        block10.display();
        block11.display();
        }
}