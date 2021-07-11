class Game {
  constructor() {
    // arguments are used to personalize the objects
    this.bg = new Image();
    this.bg.src = "../Images/bg.jpg";
    this.pusheen = new Pusheen();
    this.foodArr = [];
    this.isGameOn = true;
    this.score = new Score();
  }

  //movement of falling objects
  generateFood = () => {
    //if array is empty
    if (
      !this.foodArr.length ||
      this.foodArr[this.foodArr.length - 1].y > canvas.height / 2
    ) {
      //TO CREATe FIRST FOOD
      //create a random position for food
      let randomPos = Math.floor(Math.random() * canvas.width);

      //create first food object
      let food = new Food(randomPos, "../Images/burger.png", false);
      //identify food number
      //this.food.foodNumber = 0;
      //add food to the array
      this.foodScore = 1;
      this.foodArr.push(food);
      //generate more of the same food
      //this.foodArr[this.foodArr.length - 1].y += 1;

      let randomPos2 = Math.floor(Math.random() * canvas.width);
      let food2 = new Food(randomPos2, "../Images/fries.png", false);
      //this.food.foodNumber = 1;
      this.foodScore = 1;
      this.foodArr.push(food2);

      let randomPos3 = Math.floor(Math.random() * canvas.width);
      let food3 = new Food(randomPos3, "../Images/nachos.png", false);
      this.foodScore = 1;
      this.foodArr.push(food3);

      let randomPos4 = Math.floor(Math.random() * canvas.width);
      let food4 = new Food(randomPos4, "../Images/cake-slice.png", false);
      this.foodScore = 1;
      this.foodArr.push(food4);

      let randomPos5 = Math.floor(Math.random() * canvas.width);
      let food5 = new Food(randomPos5, "../Images/lowfat-catfood.png", true);
      this.foodScore = -1;
      this.foodArr.push(food5);

      //BUG!!!! if pusheen walks over the low-fat cat food area, it still ends the game

      //create condition where they will actually appear. first condition
      //is if the array is empty, then they will appear.
      //when one burger arrives half way through screen, another new one w/ appear
    }
  };

  //COLLISION / SCOREBOARD (adds 1 point if player collides with reg food)
  /*
  scoreBoard = () => {
    this.foodArr.forEach((food) => {
      if (this.pusheen.pusheenFoodCollision(food)) {
      }
    });
  };
  */

  //COLLISION / GAMEOVER screen if player catches lowfat food
  gameOverCheck = () => {
    this.foodArr.forEach((food) => {
      // this is to check the end of game trigger
      if (
        this.pusheen.pusheenFoodCollision(food) &&
        food.isLowfatFood === true
      ) {
        //&& food === this.foodArr[this.foodArr.length -1]
        // stop the game from running
        this.isGameOn = false;
        // remove the canvas
        canvas.style.display = "none";
        // display the gameover screen
        gameoverScreen.style.display = "flex";
      }
    });
  };

  //create function where pusheen colliding with fatty food increases score

  //GAMELOOP (what keeps the game running/playing)
  gameLoop = () => {
    //1. clearing canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //2. movement of elements (food, Pusheen, gameover screen, etc) or
    //other actions

    //this.pusheen.moveRight();
    this.generateFood();
    this.foodArr.forEach((food) => {
      food.foodMove();
    });
    this.gameOverCheck();

    //3. drawing elements
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

    this.pusheen.drawPusheen();

    //food
    this.foodArr.forEach((food) => {
      food.drawFood();
    });

    this.score.drawScore();

    //4. request animation
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
