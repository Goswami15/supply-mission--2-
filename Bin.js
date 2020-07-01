class Bin{
    constructor(){
        var options={
            isStatic:true,
        };

        this.body=Bodies.rectangle(300,610,20,100,options);
        this.width1=20;
        this.height1=100;
        World.add(world,this.body);

        this.body2=Bodies.rectangle(390,650,200,20,options);
        this.width2=200;
        this.height2=20;
        World.add(world,this.body2);

        this.body3=Bodies.rectangle(500,610,20,100,options);
        this.width3=20;
        this.height3=100;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var pos2=this.body2.position;
        var pos3=this.body3.position;
        push();
        fill("red");
        strokeWeight(0);
rect(pos.x,pos.y,this.width1,this.height1);
rect(pos2.x,pos2.y,this.width2,this.height2);
rect(pos3.x,pos3.y,this.width3,this.height3);
pop();
    }
}