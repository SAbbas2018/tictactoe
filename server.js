const express = require("express");
const colors = require("colors");
const cors = require("cors");
//Set up Express
const app = express();

//Set up middleware
app.use(express.json());
app.use(cors());

//Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server has started on Port: ${PORT}`.blue.bold)
);

//Set up Routes for TicTacToe
app.use("/tictactoe", require("./routes/tictactoeRouter"));
app.use("/ai", require("./routes/aiTicTacToeRouter"));
