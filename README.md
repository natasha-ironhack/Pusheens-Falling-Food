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
-build SplashScreen () {}
-build GameScreen () {} (refers to game glass in game.js)
-build GameOverScreen () {}

--Game.js
-class Game () {}
-gameLoop () {}
-checkCollisions () {}
-generateFood () {}
-clearCanvas () {}
-(updateCanvas () {})
-drawCanvas () {}
-GameOver () {}

--Pusheen.js
-class Pusheen () { this.x; this.y; this.direction; this.size }
-draw () {}
-moveLeft () {}
-moveRight () {}
-pusheenFoodCollision () {}

--Food.js
-class Food () { this.x; this.y; this.direction; this.size }
-draw () {}
-move () {}
-pusheenFoodCollision () {}

States y States Transitions:
Definition of the different states and their transition (transition functions)
-splashScreen
-gameScreen
-gameOverScreen

Tasks:
main - buildDom DONE
main - buildSplashScreen (via HTML, CSS and main.js) DONE
main - addEventListener (so when button clicked, goes to game screen) DONE
main - buildGameScreen (refers to class game in game.js) DONE(basics at least)
main - buildGameOverScreen (via HTML, CSS and main.js) DONE
game - startLoop DONE
game - buildCanvas DONE
game - drawCanvas DONE
pusheen - draw DONE
game - addPusheen DONE
pusheen - move  
game - add Pusheen's movement
food - draw
food - move / drop randomly
game - add food
game - move / drop food
game - checkCollision
game - add scoreboard
game - GameOver
game - addEventListener
pusheen or game - animate pusheen
game - add music
game - add sound effects

Links:

Git URL: https://github.com/natasha-ironhack/Pusheens-Falling-Food

Slides:
URls for the project presentation (slides): https://docs.google.com/presentation/d/1y3iBkcu26QkSKb1SdIbaYLDDciBPyAkj5na3P1k5aAY/edit#slide=id.ge3471791df_0_530
