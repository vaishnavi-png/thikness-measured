class Car{
    constructor(weight,speed){
        this.x = 50;
        this.y =200;
        this.sprite = createSprite(this.x,this.y,50,50);
        this.weight = weight;
        this.speed = speed;
        
        this.sprite.velocityX = speed;
        this.sprite.shapeColor = (225);
    }
}