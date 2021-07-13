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
main - buildDom / create 3 states overall (splashscreen, canvas, gameOver) DONE
main - buildSplashScreen (via HTML, CSS and main.js) DONE
main - addEventListener (so when button clicked, goes to game screen) DONE
main - buildGameScreen (refers to class game in game.js) DONE(basics at least)
game - startLoop (to get game going) DONE
game - buildCanvas DONE
game - drawCanvas DONE
pusheen - draw DONE
game - addPusheen DONE
pusheen - move increase, decrease x posiiton of player DONE
pusheen - add event listener to keyboard (in ponggame) DONE
game - add Pusheen's movement DONE
food - draw DONE
food - move / drop randomly DONE
game - add food DONE
game - move / drop food DONE
game - add PusheenFoodCollision DONE
game - add scoreboard DONE
game - tie PusheenFood Collision w/ scoreboard DONE
main - buildGameOverScreen (via HTML, CSS and main.js) partially DONE
game - tie lowfat cat food with end of game DONE
game - GameOver DONE
game - addEventListener DONE
game. - fix bugs!!!!!
pusheen or game - animate pusheen as a gif
food - make low fat cat food picture bigger
game - add gameover music  DONE
game - add music  DONE
game - add sound effects DONE

      //BUG!!!! Scoreboard doesn't add one point with reg. food, but a LOT
      of points.

      //ERROR: Deployment not fully functional. Broken logo and game not working.

Links:

Git URL: https://github.com/natasha-ironhack/Pusheens-Falling-Food

Slides:
URls for the project presentation (slides): https://docs.google.com/presentation/d/1y3iBkcu26QkSKb1SdIbaYLDDciBPyAkj5na3P1k5aAY/edit#slide=id.ge3471791df_0_530

Music Credits:
Monkeys Spinning Monkeys Kevin MacLeod (incompetech.com)
Licensed under Creative Commons: By Attribution 3.0 License
http://creativecommons.org/licenses/by/3.0/
Music promoted by https://www.chosic.com/

Sad Game Over Trombone (mixkit.co)

Picture Credits:
