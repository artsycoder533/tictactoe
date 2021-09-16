# Tic Tac Toe 

This is my solution to The Odin Project's [Project Tic Tac Toe](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript/lessons/tic-tac-toe).

[![wakatime](https://wakatime.com/badge/github/artsycoder533/tictactoe.svg)](https://wakatime.com/badge/github/artsycoder533/tictactoe)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful Resources](#useful-resources)
- [Author](#author)

## Overview

I am currently following The Odin Project's Full Stack Javascript Curriculum.   

### The challenge

We were tasked with implementing a Tic Tac Toe game with the following requirements:

- 1. Set up your project with a HTML, CSS and Javascript files and get the Git repo all set up.
- 2. You’re going to store the gameboard as an array inside of a Gameboard object, so start there! Your players are also going to be stored in objects… and you’re probably going to want an object to control the flow of the game itself.
    - 1. Your main goal here is to have as little global code as possible. Try tucking everything away inside of a module or factory. Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. If you need multiples of something (players!), create them with factories.
- 3.  Set up your HTML and write a JavaScript function that will render the contents of the gameboard array to the webpage (for now you can just manually fill in the array with "X"s and "O"s)
- 4.  Build the functions that allow players to add marks to a specific spot on the board, and then tie it to the DOM, letting players click on the gameboard to place their marker. Don’t forget the logic that keeps players from playing in spots that are already taken!
    - 1.  Think carefully about where each bit of logic should reside. Each little piece of functionality should be able to fit in the game, player or gameboard objects.. but take care to put them in “logical” places. Spending a little time brainstorming here can make your life much easier later!
- 5.  Build the logic that checks for when the game is over! Should check for 3-in-a-row and a tie.
- 6.  Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that congratulates the winning player!
- 7.  Optional - If you’re feeling ambitious create an AI so that a player can play against the computer!
    - 1.  Start by just getting the computer to make a random legal move.
    - 2.  Once you’ve gotten that, work on making the computer smart. It is possible to create an unbeatable AI using the minimax algorithm (read about it here, some googling will help you out with this one)
    - 3.  If you get this running definitely come show it off in the chatroom. It’s quite an accomplishment!

### Screenshot

- Mobile Screenshot [Mobile Screenshot](./assets/mobile2.png)
- Desktop Screenshot [Desktop Screenshot](./assets/desktop1.png)

### Links

- Solution URL: [https://github.com/artsycoder533/tictactoe.git](https://github.com/artsycoder533/tictactoe.git)
- Live Site URL: [https://artsycoder533.github.io/tictactoe/](https://artsycoder533.github.io/tictactoe/)

## My process

I started this project by making a list of 3 objects:  the player, the game, and the gameboard.  I brainstormed what actions each object would need to be able to do and then translated those into functions.  I decided that the game and gameboard objects needed to be implemented using a module because there are only one of each.  The player object needed to be a factory function because there are more than one player.  To dynamically render the gameboard is initialized an array of 9 empty spaces.  I used a ForEach loop on the gamebaord array to create 9 child elements.  To be able to keep track of which game space was clicked, I added a data-id that corresponded to an index in the gameboard array where the players marker is kept.  On paper I drew a Tic Tac Toe Board and numbered the spaces starting with 0 and wrote down all the possible winning combinations.  To simulate a computer player I used Math.random() to generate a random number from 0 to 9.  I added an if statement that triggered if the random number corresponds to a spot in the array thats already taken.  If so, a while loop is triggered and a new random number is created until it correspondings to an available spot.  After each player and computer move, I created a function to check for a winner.  To implement this check I use a series of if, else-if statements that check the player markers at the index of the winning combinations.  If it matches, the winners name is displayed on the gameboard.  To allow a user to replay the game I created a function to clear the board and the arrow and the gameboard array.  Once I finished the functionality of the website I went back and added CSS to give it a retro look.

### Built with

- HTML5
- CSS3
- Javascript
- OOP

### What I learned

After creating this project, I learned how to implement IIFE, Modules, and Factory Functions.  I learned how to implement a structure that doesnt use global variables and how to work with Modules so that functions are accessible with one another.  I was able to practice implementing modals and using javascript input validation.  I found this project to be quite challenging in the beginning as it was hard to wrap my head around how to be able to give a module access to a function inside another module.  I realized I was so used to using global variables, so whenever something wouldnt quite work id just make a global variable to get rid of the error.  Encapsulating everything in a factory function or module was definitely tough to get started, but in the end the organization made it that much easier to work with.

### Continued development

I want to learn about the Min-Max algorithm and how to implement it into my program, so that I can simulate a more challenging AI Computer Player.  I also would like to figure out a better way to match for winning combinations by using an array that holds these combinations.  I couldnt figure out how to implement this with a multi-dimensional array.

### Useful Resources

I found the following websites to be helpful in providing further understanding on topics I was not familiar with.

-  [JavascriptTutorial.net](https://www.javascripttutorial.net/web-apis/javascript-localstorage/)
    - Topic: Local Storage

-  [Stackoverflow.com](https://stackoverflow.com/questions/64141609/saving-objects-in-localstorage-which-has-a-method)
    - Topic:  Object methods and Local Storage

- [JavascriptTutorial.net](https://www.javascripttutorial.net/javascript-dom/javascript-page-load-events/)
    - Topic: DOM Load Event

- [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
    - Topic: Object.create()

## Author

- Personal Portfolio - []()
- 

