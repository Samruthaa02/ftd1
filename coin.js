class coin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.image=loadImage("coin.png");
        this.body=createSprite(this.x,this.y,this.image)
    }
display(){
    imageMode(CENTER);
    image(this.image,this.x,this.y,75,75)
}
    
}