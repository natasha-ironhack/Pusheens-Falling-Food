class Game {
  constructor() {
    // arguments are used to personalize the objects
    this.bg = new Image();
    this.bg.src = "../Images/cafebg.png";
    this.pusheen = new Pusheen();
    //this.foods = [];
    //this.isGameOn = true;
  }

  //movement of falling objects
  //generateFood;
  //use Math.floor(Math.random())

  //gameover screen if player lost
  //if conditional

  //stop game from running

  //remove canvas

  //display the gameover screen

  //gameLoop (what keeps the game running/playing)
  gameLoop = () => {
    //1. clearing canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //2. movement of elements (food, Pusheen, gameover screen, etc) or
    //other actions
   // this.pusheen.moveLeft();
    //this.pusheen.moveRight();
    //this.generateFood();
    //this.gameOverCheck();

    //3. drawing elements
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);

    this.pusheen.drawPusheen();

    //4. request animation
    //if (this.isGameOn) {
    requestAnimationFrame(this.gameLoop);
  };
}
//}
