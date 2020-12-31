const express = require("express");
const colors = require("colors");
const path = require("path");
const cors = require("cors");
const { makeid } = require("./utils");

// socket io imports for game model
const TicTacToe = require("./game models/TicTacToe");
const { P1, P2 } = require("./game models/constants");
//Set up Express
const app = express();

//Set up middleware
app.use(express.json());
app.use(cors());

//Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () =>
  console.log(`Server has started on Port: ${PORT}`.blue.bold)
);

//Set up socket.io to work with express server
const options = {
  path: "/socket",
  cors: {
    origin: "https://tictactoe-sa.herokuapp.com/",
    methods: ["GET", "POST"],
  },
};
//https://tictactoe-sa.herokuapp.com/
const io = require("socket.io")(server, options);

// clientRooms object for game rooms and state object for storing state in the game room
const clientRooms = {};
const state = {};

io.on("connection", (client) => {
  client.on("host", handleHost);
  client.on("makeMove", handleMakeMove);
  client.on("joinGame", handleJoinGame);
  client.on("restartGame", handleRestart);
  client.on("disconnect", handleDisconnect);
  client.on("disconnecting", handleDisconnection);

  // Handler Functions
  function handleHost() {
    let roomCode = makeid(5);
    clientRooms[client.id] = roomCode;
    client.join(roomCode);
    client.number = 1;
    client.emit("player", P1);
    client.emit("gameCode", roomCode);

    const gameState = new TicTacToe();
    state[roomCode] = gameState;
    const currentPlayer = gameState.whoseTurn;
    const board = gameState.getGameBoard();
    const winner = gameState.tictactoeBoard.checkWinner();
    const endGame = winner === "" ? "" : "show";
    const props = { currentPlayer, board, winner, endGame };
    client.emit("gameState", props);
  }

  function handleMakeMove(index, player) {
    try {
      const room = clientRooms[client.id];
      if (room === undefined) {
        console.log("Unkown Code, no such socket exists");
        client.emit("unkownCode", "Unkown Code, no such socket exists");
        return;
      }
      if (player !== state[room].whoseTurn) {
        return;
      }

      state[room].makeMove(index);

      const currentPlayer = state[room].whoseTurn;
      const board = state[room].getGameBoard();
      let winner = state[room].tictactoeBoard.checkWinner();
      const endGame = winner === "" ? "" : "show";
      if (winner === "X") {
        winner = "X wins!";
      } else if (winner === "O") {
        winner = "O wins!";
      }
      const props = { currentPlayer, board, winner, endGame };

      io.in(room).emit("gameState", props);
    } catch (error) {
      console.log(error);
      return;
    }
  }

  function handleJoinGame(code) {
    // Check if room with the code exists
    const socketRoom = io.sockets.adapter.rooms.get(code);
    if (socketRoom === undefined) {
      console.log("Unkown Code");
      return;
    }
    // Check if the room has space for player 2
    const socketRoomSize = socketRoom.size;
    if (socketRoomSize > 1) {
      console.log("Game Room is Full");
      return;
    }
    clientRooms[client.id] = code;

    client.join(code);
    client.number = 2;
    client.emit("player", P2);
    io.in(code).emit("p2Online");
    const currentPlayer = state[code].whoseTurn;
    const board = state[code].getGameBoard();
    const winner = state[code].tictactoeBoard.checkWinner();
    const endGame = winner === "" ? "" : "show";
    const props = { currentPlayer, board, winner, endGame };
    io.in(code).emit("gameState", props);
  }

  function handleRestart(roomCode) {
    const gameState = new TicTacToe();
    state[roomCode] = gameState;
    const currentPlayer = gameState.whoseTurn;
    const board = gameState.getGameBoard();
    const winner = gameState.tictactoeBoard.checkWinner();
    const endGame = winner === "" ? "" : "show";
    const props = { currentPlayer, board, winner, endGame };
    io.in(roomCode).emit("gameState", props);
  }

  function handleDisconnection() {
    const rooms = client.rooms;
    rooms.forEach((room) => {
      io.to(room).emit("playerDisconnect", "Other Player Disconnected.");
    });
  }
  function handleDisconnect(reason) {
    console.log("Client:", client.id, "has disconnected.");
    return;
  }
});
//Set up Routes for TicTacToe
app.use("/tictactoe", require("./routes/tictactoeRouter"));
app.use("/ai", require("./routes/aiTicTacToeRouter"));

// Serve Static assets
// Serve static assets
if (process.env.NODE_ENV === "production") {
  // set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
