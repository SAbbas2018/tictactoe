import React from "react";
import { io } from "socket.io-client";

export const socket = io("https://tictactoe-sa.herokuapp.com/", {
  path: "/socket",
});
export const SocketContext = React.createContext();
