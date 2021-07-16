//MAKE THE CLASS
class Food {
  constructor(xPos, srcURL, isLowfatFood, isBurger, isFries, isNachos, isCakeSlice) {
    // isLowfatFood = ? true or false
    this.x = xPos;
    this.y = 0;
    this.foodScore = 0;
    this.foodNumber = Math.floor(Math.random() * 2);
    this.foodWidth = 50;
    this.foodHeight = 50;
    this.foodImage = new Image();
    this.foodImage.src = srcURL;
    this.foodSpeed = Math.floor(Math.random() * 5 + 1);
    this.isLowfatFood = isLowfatFood;
    this.isBurger = isBurger;
    this.isFries = isFries;
    this.isNachos = isNachos;
    this.isCakeSlice = isCakeSlice;
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
