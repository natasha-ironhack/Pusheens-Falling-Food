class Pusheen {
  //construct player properties
  constructor() {
    this.x = 300;
    this.y = 565;
    this.width = 100;
    this.height = 80;
    this.image = new Image();
    this.image.src = "../Images/Pusheen-still.png";
    this.speed = 1;
    this.score = 0;
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
      (
        food.y > this.y &&
        food.x > this.x &&
        food.x < this.x + this.width)
    ) {
      // collision detected!
      return true;
    }
    return;
  };
}
