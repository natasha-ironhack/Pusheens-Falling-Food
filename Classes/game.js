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
    this.music.src = "./Audio/monkeysSpinning.mp3";
    this.music.volume = 0.3;
    this.catch.volume = 0.1;
    this.gameoverMusic = new Audio();
    this.gameoverMusic.src = "./Audio/gameover.wav";
    this.gameoverMusic.volume = 0.1;
    this.frame = 0;
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
      let food = new Food(
        randomPos,
        "./Images/burger.png",
        false,
        true,
        false,
        false,
        false
      );
      this.foodArr.push(food);

      //generate more of the same food
      let randomPos2 = Math.floor(Math.random() * canvas.width);
      let food2 = new Food(
        randomPos2,
        "./Images/fries.png",
        false,
        false,
        true,
        false,
        false
      );
      this.foodArr.push(food2);

      let randomPos3 = Math.floor(Math.random() * canvas.width);
      let food3 = new Food(
        randomPos3,
        "./Images/nachos.png",
        false,
        false,
        false,
        true,
        false
      );
      this.foodArr.push(food3);

      let randomPos4 = Math.floor(Math.random() * canvas.width);
      let food4 = new Food(
        randomPos4,
        "./Images/cake-slice.png",
        false,
        false,
        false,
        false,
        true
      );
      this.foodArr.push(food4);

      let randomPos5 = Math.floor(Math.random() * canvas.width);
      let food5 = new Food(
        randomPos5,
        "./Images/lowfat-catfood.png",
        true,
        false,
        false,
        false,
        false
      );
      this.foodArr.push(food5);
    }
  };

  //COLLISION / SCOREBOARD (adds certain # of point if player collides with certain foods)
  scoreBoard = () => {
    this.foodArr.forEach((food, index) => {
      if (
        this.pusheen.pusheenFoodCollision(food) &&
        food.isLowfatFood == false &&
        food.isBurger == true
      ) {
        this.catch.play();
        //as soon as it collides w/ array, need to remove element from array
        this.foodArr.splice(index, 1);
        score += 1;
      } else if (
        this.pusheen.pusheenFoodCollision(food) &&
        food.isLowfatFood == false &&
        food.isFries == true
      ) {
        this.catch.play();
        this.foodArr.splice(index, 1);
        score += 2;
      } else if (
        this.pusheen.pusheenFoodCollision(food) &&
        food.isLowfatFood == false &&
        food.isNachos == true
      ) {
        this.catch.play();
        this.foodArr.splice(index, 1);
        score += 3;
      } else if (
        this.pusheen.pusheenFoodCollision(food) &&
        food.isLowfatFood == false &&
        food.isCakeSlice == true
      ) {
        this.catch.play();
        this.foodArr.splice(index, 1);
        score += 10;
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
        score = 0;
        //stop music from running
        this.music.pause();
        this.music.currentTime = 0;
        //play game over music
        this.gameoverMusic.play();
        //this.scoreBoard();
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

    //animated pusheen
    this.frame++;
    this.pusheen.drawPusheen();

    if (this.frame % 10 === 0 && this.pusheen.currentImage.numberImg === 1) {
      // here you need to change the image. And it will depend on the previous one.
      this.pusheen.currentImage = this.pusheen.image2;
    } else if (
      this.frame % 10 === 0 &&
      this.pusheen.currentImage.numberImg === 2
    ) {
      this.pusheen.currentImage = this.pusheen.image3;
    } else if (
      this.frame % 10 === 0 &&
      this.pusheen.currentImage.numberImg === 3
    ) {
      this.pusheen.currentImage = this.pusheen.image4;
    } else if (
      this.frame % 10 === 0 &&
      this.pusheen.currentImage.numberImg === 4
    ) {
      this.pusheen.currentImage = this.pusheen.image;
    }

    //ORIGINAL METHOD
    /*
    else if (this.frame >= 60 && this.frame < 120) {
      this.pusheen.currentImage = this.pusheen.image2;
    } else if (this.frame >= 120 && this.frame < 180) {
      this.pusheen.currentImage = this.pusheen.image3;
    } else if (this.frame >= 180 && this.frame < 240) {
      this.pusheen.currentImage = this.pusheen.image4;
    }
    */
    // say instead if number is divisiable by 60 then change the value

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
