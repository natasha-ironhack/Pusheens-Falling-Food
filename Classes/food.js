//MAKE THE CLASS
class Food {
  constructor(xPos, srcURL, isLowfatFood) {
    // isLowfatFood = ? true or false
    this.x = xPos;
    this.y = 0;
    //this.x = Math.random() * canvas.width;
    //this.y = Math.random() * (canvas.height / 3);
    this.foodScore = 0;
    this.foodNumber = Math.floor(Math.random() * 2)
    this.foodWidth = 50;
    this.foodHeight = 50;
    this.foodImage = new Image();
    this.foodImage.src = srcURL;
    this.foodSpeed = Math.floor(Math.random() * 4 + 1);
    this.isLowfatFood = isLowfatFood;
  }

  // DRAW FOOD into canvas using constructed properties above
  //method to draw the food
  drawFood = () => {
    ctx.drawImage(
      this.foodImage,
      this.x,
      this.y,
      this.foodWidth,
      this.foodHeight
    );
  };

  //method that moves the food
  foodMove = () => {
    this.y += this.foodSpeed;
  };
}
