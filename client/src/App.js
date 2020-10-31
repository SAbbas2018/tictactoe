import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TicTacToe from "./components/TicTacToe";
import TicTacToeAI from "./components/TicTacToeAI";
import Home from "./components/Home";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <section className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tictactoe" component={TicTacToe} />
          <Route exact path="/tictactoe/ai" component={TicTacToeAI} />
        </Switch>
      </section>
    </BrowserRouter>
  );
}

export default App;
