class Score {
  constructor() {
    this.score = 0;
    this.x = canvas.width - 50;
    this.y = 20;
    ctx.fillStyle = "black";
    ctx.font = "10px Verdana";
    ctx.fillText("Score: " + score, canvas.width - 50, 25);
  }

  //draw scoreboard into canvas
  drawScore = () => {
    ctx.drawImage(ctx.fillText, this.x, this.y);
  };
}
