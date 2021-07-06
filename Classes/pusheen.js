class Pusheen {
  constructor() {
    this.x = canvas.width / 2;
    this.y = 550;
    this.width = 100;
    this.height = 100;
    this.image = new Image();
    this.image.src = "../Images/Pusheen-still.png";
    this.speed = 1;
    this.gameOver = false;
    this.score = 0;
  }

  // drawing of player
  drawPusheen = () => {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  };

  //construct movement of player
  /*
    this.moveLeft = function () {
      if (this.x > 0) {
        this.x -= this.speed;
        //or this.imageSpeed?
      }
    };
    */
  //Moves the player right
  moveRight = function () {
    if (this.x < canvas.width - this.width) {
      this.x += this.speed;
    }
  };

  pusheenFoodCollision = (food) => {
    // food is gonna be an obj with all food properties

    //   if (this.x < food.x + food.width &&
    //     this.x + this.width > food.x &&
    //     this.y < food.y + food.height &&
    //     this.y + this.height > food.y) {
    //      // collision detected!
    //      return true
    //  }

    return;
    /*
        this.x < ƒood.x + food.width &&
        this.x + this.width > food.x &&
        this.y < food.y + food.height &&
        this.y + this.height > food.y
        */
  };
}
