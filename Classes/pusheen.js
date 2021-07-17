class Pusheen {
  //construct player properties
  constructor() {
    this.x = 300;
    this.y = 557;
    this.width = 135;
    this.height = 80;
    //original non-animated method:
    //this.image = new Image();
    //this.image.src = "./Images/Pusheen-still.png";
    this.image = new Image();
    this.image.src = "./Images/pusheen-gif-frame-1.png";
    this.image.numberImg = 1;
    this.image2 = new Image();
    this.image2.src = "./Images/pusheen-gif-frame-2.png";
    this.image2.numberImg = 2;
    this.image3 = new Image();
    this.image3.src = "./Images/pusheen-gif-frame-3.png";
    this.image3.numberImg = 3;
    this.image4 = new Image();
    this.image4.src = "./Images/pusheen-gif-frame-4.png";
    this.image4.numberImg = 4;
    this.currentImage = this.image; // this saves the reference of another image here
    this.speed = 30;
    this.gameOver = false;
    this.score = 0;
  }

  drawPusheen = () => {
    ctx.drawImage(this.currentImage, this.x, this.y, this.width, this.height);
  };

  pusheenFoodCollision = (food) => {
    //food is gonna be an obj w/ all food properties
    if (
      food.x < this.x + this.width &&
      food.x + food.foodWidth > this.x &&
      food.y < this.y + this.height &&
      food.y + food.foodHeight > this.y
    ) {
      // collision detected!
      return true;
    }
    return;
  };
}
