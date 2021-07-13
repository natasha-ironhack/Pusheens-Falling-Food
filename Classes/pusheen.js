class Pusheen {
  //construct player properties
  constructor() {
    this.x = 300;
    this.y = 565;
    this.width = 100;
    this.height = 70;
    this.image = new Image();
    this.image.src = "./Images/Pusheen-still.png";
    this.speed = 8;
    this.gameOver = false;
    this.score = 0;
  }

  // draw player into canvas using constructed properties above
  drawPusheen = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  //construct movement of player (or put it into main.js)

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
