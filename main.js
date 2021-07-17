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
let finalScore = document.querySelector("#finalScore");
let splashScreen = document.querySelector("#splash-screen");
let startButton = document.querySelector("#start-btn");
let restartButton = document.querySelector("#restart-btn");

// main game global variable
let gameObj; //=> will have all properties of class Game

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
  //gameObj.score = 0;

  gameObj.gameLoop();
});
