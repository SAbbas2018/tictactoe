// const router = require("express").Router();
// const Axios = require("axios");
// const { makeid } = require("./utils");
// const TicTacToe = require("../game models/TicTacToe");
// /*
//     ReqType: GET URL: /socket/host
//     Access: Public
//     Desc: Host a new tic tac toe game 
// */
// router.get("/getGame", async (req, res) => {
//   try {
//     const gameBoard = new TicTacToe().getGameBoard();
//     res.status(200).json({ message: "success", gameBoard });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

const io = require("socket.io")();

io.on("connection", (client) => {
    client.on("host", handleHost);
    const handleHost = () => {
        client.emit("init", "hi");  
    };  

};

io.listen(process.env.PORT || 5000);