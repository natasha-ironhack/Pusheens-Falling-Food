# Pusheens-Falling-Food

Pusheen's Falling Food

Description:
Pusheen's Falling Food is a game where the player has to move Pusheen
the cat, left and right, and catch the falling foods that appear from
the top of the screen. The game ends when Pusheen catches low-fat cat food three times.

MVP (DOM - CANVAS):
-game has one cat that moves horizontally
-food drops randomly from the top of the screen
-cat catches the falling food items
-catching three low-fat cat food items will end the game

Backlog:
-add scoreboard

Data Structure:
--Main.js:
-buildSplashScreen () {}
-buildGameScreen () {}
-buildGameOverScreen () {}

--Game.js
-Game () {}
-gameLoop () {}
-checkCollisions () {}
-generateFood () {}
-clearCanvas () {}
-(updateCanvas () {})
-drawCanvas () {}
-GameOver () {}

--Pusheen.js
-Pusheen () { this.x; this.y; this.direction; this.size }
-draw () {}
-moveLeft () {}
-moveRight () {}
-pusheenCollision () {}

--Food.js
-food () { this.x; this.y; this.direction; this.size }
-draw () {}
-move () {}
-pusheenCollision () {}

States y States Transitions:
Definition of the different states and their transition (transition functions)
-splashScreen
-gameScreen
-gameOverScreen

Task:
main - buildDom
main - buildSplashScreen
main - addEventListener
main - buildGameScreen
main - buildGameOverScreen
game - startLoop
game - buildCanvas
game - updateCanvas
game - drawCanvas
food - draw
food - move / drop randomly
game - drop food
pusheen - draw
pusheen - move
game - addPusheen
game - checkCollision
game - GameOver
game - addEventListener

Links:

Git URL: https://github.com/natasha-ironhack/Pusheens-Falling-Food

Slides:
URls for the project presentation (slides): https://docs.google.com/presentation/d/1y3iBkcu26QkSKb1SdIbaYLDDciBPyAkj5na3P1k5aAY/edit#slide=id.ge3471791df_0_530
