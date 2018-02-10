# ReactJS_ClickGame

A game built using ReactJS. Try to click all the available zombies without repeating a character. Oh! they change on every turn. See how far you can make it.

## See it live on: https://jpdevspace.github.io/ReactJS_ClickGame/

![alt text][screenshot]

[screenshot]: https://github.com/jpdevspace/ReactJS_ClickGame/blob/master/src/imgs/screenshot.png "Screenshot of game"

## Getting started

1. Clone this repo in your project folder 

2. To access the newly created folder `cd ReactJS_ClickGame`

3. Run app with `npm start` or `yarn start`

4. If you're not redirected automatically, try opening your browser and check `http://localhost:3000`

5. Enjoy

## Comments
This app was created using ReactJS, it has 4 components the App, Board, Card and Scoreboard. Everytime a zombie is clicked the cards are shuffled using the Durstenfeld shuffle algorithm, to win the game you must click every zombie once without repeating. If you click the same zombie twice you lose and you have to start again. The game keeps track of the highest score achieved.

## Built With

* [React](https://reactjs.org)
