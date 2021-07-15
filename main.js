//MAIN.JS. Managing DOM elements & event listeners

// GLOBAL VARIABLES
let score = 0;
//let animate = null;
//let count = 0;
//let isIdle = true;
//lc_gif_player('.example', false, '', ['move']);
//lc_gif_player('.example', false, '', ['fullscreen']);

// canvas setup
let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillStyle = "pink";
ctx.font = "18px sans-serif";
ctx.fillText("Score: " + score, 30, 50);

// DOM elements
let gameoverScreen = document.querySelector("#gameover-screen");
let splashScreen = document.querySelector("#splash-screen");
let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");

// main game global variable
let gameObj; //=> will have all properties of class Game

//other variables
//Pusheen's gif movements
/*
let pusheenIdle1 = new Image();
pusheenIdle1.src = "./Images/pusheen-gif-frame1.png"

let pusheenIdle2 = new Image();
pusheenIdle2.src = "./Images/pusheen-gif-frame2.png"

let pusheenIdle3 = new Image();
pusheenIdle3.src = "./Images/pusheen-gif-frame3.png"

let pusheenIdle4 = new Image();
pusheenIdle4.src = "./Images/pusheen-gif-frame4.png"
*/

//let pusheenIdle = [pusheenIdle1, pusheenIdle2, pusheenIdle3, pusheenIdle4]

/*
drawPusheenIdle1 = () => {
  ctx.drawImage(this.pusheenIdle1, this.x, this.y, this.width, this.height);
};

drawPusheenIdle2 = () => {
  ctx.drawImage(this.pusheenIdle2, this.x, this.y, this.width, this.height);
};

drawPusheenIdle3 = () => {
  ctx.drawImage(this.pusheenIdle3, this.x, this.y, this.width, this.height);
};

drawPusheenIdle4 = () => {
  ctx.drawImage(this.pusheenIdle4, this.x, this.y, this.width, this.height);
};
*/

// ADD EVENT LISTENERS
startButton.addEventListener("click", () => {
  // show the canvas DOM element
  canvas.style.display = "block";

  // hide the splash screen DOM element
  splashScreen.style.display = "none";

  // here we need to create the game
  //gameObj has all properties and & methods of Game class
  gameObj = new Game();
  gameObj.music.play();
  //lc_gif_player(".example", false, "", ["move"]);
  //lc_gif_player(".example", false, "", ["fullscreen"]);
  
  gameObj.gameLoop(); // => invoke method
  // here we need to start the game
});

window.addEventListener("keydown", (event) => {
  if (
    event.code === "ArrowRight" &&
    gameObj.pusheen.x + gameObj.pusheen.width < canvas.width
  ) {
    gameObj.pusheen.x += 30; //pusheen.x will increase by 10
  } else if (event.code === "ArrowLeft") {
    gameObj.pusheen.x -= 30;
  }
});

restartButton.addEventListener("click", () => {
  // show the canvas DOM element
  canvas.style.display = "block";
  // hide the splash screen DOM element
  gameoverScreen.style.display = "none";

  // here we need to create the game
  gameObj = new Game();

  gameObj.music.play();

  gameObj.gameLoop();
});
