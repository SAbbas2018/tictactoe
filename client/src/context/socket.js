import React from "react";
import { io } from "socket.io-client";

export const socket = io("/socket");
export const SocketContext = React.createContext();
