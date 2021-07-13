class Game {
  constructor() {
    // arguments are used to personalize the objects
    this.bg = new Image();
    this.bg.src = "./Images/bg.jpg";
    this.pusheen = new Pusheen();
    this.foodArr = [];
    this.isGameOn = true;
    this.catch = new Audio();
    this.catch.src = "./Audio/catch.mp3";
    this.music = new Audio();
    //this.musicOn = true;
    this.music.src = "./Audio/monkeysSpinning.mp3";
    this.music.volume = 0.1;
    this.catch.volume = 0.1;
    this.gameoverMusic = new Audio();
    this.gameoverMusic.src = "./Audio/gameover.wav";
    this.gameoverMusic.volume = 0.1;
    //this.score = 0;
  }

  //movement of falling objects
  generateFood = () => {
    //if array is empty
    if (
      !this.foodArr.length ||
      this.foodArr[this.foodArr.length - 1].y > canvas.height / 2
    ) {
      //TO CREATE FIRST FOOD
      //create a random position for food
      let randomPos = Math.floor(Math.random() * canvas.width);

      //create first food object
      let food = new Food(randomPos, "./Images/burger.png", false);
      //this.foodScore = 1;
      this.foodArr.push(food);
      //generate more of the same food

      let randomPos2 = Math.floor(Math.random() * canvas.width);
      let food2 = new Food(randomPos2, "./Images/fries.png", false);
      //this.foodScore = 1;
      this.foodArr.push(food2);

      let randomPos3 = Math.floor(Math.random() * canvas.width);
      let food3 = new Food(randomPos3, "./Images/nachos.png", false);
      //this.foodScore = 1;
      this.foodArr.push(food3);

      let randomPos4 = Math.floor(Math.random() * canvas.width);
      let food4 = new Food(randomPos4, "./Images/cake-slice.png", false);
      //this.foodScore = 1;
      this.foodArr.push(food4);

      let randomPos5 = Math.floor(Math.random() * canvas.width);
      let food5 = new Food(randomPos5, "./Images/lowfat-catfood.png", true);
      //this.foodScore = -1;
      this.foodArr.push(food5);
    }
  };

  //COLLISION / SCOREBOARD (adds 1 point if player collides with reg food)
  scoreBoard = () => {
    this.foodArr.forEach((food, index) => {
      if (
        this.pusheen.pusheenFoodCollision(food) &&
        food.isLowfatFood == false
      ) {
        this.catch.play();
        //as soon as it collides w/ array, need to remove element from array
        //(.slice (pass(i and amnt of elements)))
        //.remove blanks out the screen
        this.foodArr.splice(index, 1);
        //food[i].y += 1
        score += 1;
      }
    });
  };

  //COLLISION / GAMEOVER screen if player catches lowfat food
  gameOverCheck = () => {
    this.foodArr.forEach((food) => {
      // this is to check the end of game trigger
      if (
        this.pusheen.pusheenFoodCollision(food) &&
        food.isLowfatFood === true
      ) {
        // stop the game from running
        this.isGameOn = false;
        // remove the canvas
        canvas.style.display = "none";
        // display the gameover screen
        gameoverScreen.style.display = "flex";
        //stop music from running
        score = 0;
        //this.musicOn = false;
        this.music.pause();
        this.music.currentTime = 0;
        this.gameoverMusic.play();
      }
    });
  };

  //GAMELOOP (what keeps the game running/playing)
  gameLoop = () => {
    //1. clearing canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //2. movement of elements (food, Pusheen, gameover screen, etc) or
    //other actions
    this.generateFood();
    this.foodArr.forEach((food) => {
      food.foodMove();
    });
    this.scoreBoard();

    //3. drawing elements
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

    //pusheen
    this.pusheen.drawPusheen();

    //food
    this.foodArr.forEach((food) => {
      food.drawFood();
    });

    //score
    ctx.font = "30px comic-sans MS";
    ctx.fillStyle = "pink";
    ctx.fillText("SCORE: " + score, 580, 40);

    this.gameOverCheck();
    //4. request animation
    if (this.isGameOn) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
