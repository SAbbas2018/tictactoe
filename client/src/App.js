import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TicTacToe from "./components/TicTacToe";
import TicTacToeAI from "./components/TicTacToeAI";
import TicTacToeSocket from "./components/TicTacToeSocket";
import TicTacToeHost from "./components/TicTacToeHost";
import JoinGame from "./components/JoinGame";
import Home from "./components/Home";
import "./App.css";
import Header from "./components/Header";
import { SocketContext, socket } from "./context/socket";
function App() {
  return (
    <BrowserRouter>
      <SocketContext.Provider value={socket}>
        <section className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/tictactoe" component={TicTacToe} />
            <Route exact path="/tictactoe/ai" component={TicTacToeAI} />
            <Route exact path="/tictactoe/socket" component={TicTacToeSocket} />
            <Route
              exact
              path="/tictactoe/host-game"
              component={TicTacToeHost}
            />
            <Route path="/tictactoe/join-game/:gameCode" component={JoinGame} />
          </Switch>
        </section>
      </SocketContext.Provider>
    </BrowserRouter>
  );
}

export default App;
