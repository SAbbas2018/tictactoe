# Tic Tac Toe

## 📁 Project Structure

```text
.
├── client
|   |── public                          # Public Directory for serving static assets
|   |   └── index.html
|   └── src                             # Source directory contains all the react code
|       |── assets                      # assets directory contains background image
|       |── components                  # Components directory
|       |   |── Display.js
|       |   |── DisplaySocket.js
|       |   |── Header.js
|       |   |── Home.js
|       |   |── JoinGame.js
|       |   |── TicTacToe.js
|       |   |── TicTacToeAI.js
|       |   |── TicTacToeHost.js
|       |   └── TicTacToeSocket.js
|       |── constants
|       |   └── constants.js
|       |── context
|       |   └── socket.js               # Contains the socket.io-client socket context code
|       |── App.css
|       |── App.js
|       |── index.css
|       └── index.js
├── game models                         # This directory contains the models for the tic tac toe game
|   |── strategies                      # Strategies directory contains computer strategies for Human vs Computer play
|   |   |── firstPossibleStrategy.js    # Easy strategy for the computer to use in Human vs Computer play
|   |   |── minmaxStrategy.js           # Minimax Strategy for the computer to use in Human vs Computer play [Impossible to beat :(]
|   |   └── randomStrategy.js           # Random Strategy
|   |── PlayerTwo.js                    # Describes PlayerTwo class for use as the ai player
|   |── TicTacToe.js                    # Describes the TicTacToe class which is the main game model
|   |── TicTacToeBoard.js               # Describes the TicTacToeBoard class which is used by the TicTacToe class as a property
|   └── constants.js                    # Constants used by the game models and server
├── routes                              # Routes directory
|   |── aiTicTacToeRouter.js            # Routes for tic tac toe against the computer
|   └── tictactoeRouter.js              # Routes for basic tic tac toe on one window
├── server.js                           # Code for the express server + socket.io here
└── README.md                           # You are here!
```

## Live App

Link to live app: https://tictactoe-sa.herokuapp.com/

### Game Modes

There are 3 game modes available to play.

1. Basic Tic Tac Toe for two players on one window (local 1v1)
2. Tic Tac Toe against a computer with three levels of difficulty.
3. Tic Tac Toe agains a friend in real time from anywhere.

## Technology

### Web Dev

1. React
2. NodeJS
3. Express
4. Socket.io
5. HTML/CSS

### Tools

1. Heroku
2. VSCode
3. Postman
4. Git & GitHub

## Notes

The app is still under construction and I will be doing my best to make improvements in the code base.
