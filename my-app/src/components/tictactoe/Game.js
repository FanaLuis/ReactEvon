import React, { useReducer, useState } from "react";
import Board from "./Board";
import "./GameSytle.css";
import { caculateWinner } from "../heplers";

const initialState = {
  board: Array(9).fill(null),
  xIsNext: true,
};
// suwr dung useReducer
const gameReducer = (state, action) => {
  switch (action.type) {
    case "CLICK": {
      const { board, xIsNext } = state;
      const { index, winner } = action.payload;
      if (winner || board[index]) return state;
      const nextState = JSON.parse(JSON.stringify(state));
      // board[index] = state.xIsNext ? "X" : "O";
      nextState.board[index] = xIsNext ? "X" : "O";
      nextState.xIsNext = !xIsNext;
      return nextState;
    }
    case "RESET": {
      const nextState = JSON.parse(JSON.stringify(state));
      nextState.board = Array(9).fill(null);
      nextState.xIsNext = true;
      return nextState;
    }

    default:
      console.log("Error");
      break;
  }
  return state;
};
// suwr dung useState
const Game = () => {
  // const [board, setBoard] = useState(Array(9).fill(null));
  // const [xIsNext, setXIsNext] = useState(true);
  const [state, dispatch] = useReducer(gameReducer, initialState);
  //   const [state, setState] = useState({
  //     board: Array(9).fill(null),
  //     xIsNext: true,
  //     name: "Tic Tac Toe",
  //   });
  const winner = caculateWinner(state.board);
  const handleClick = (index) => {
    // const boardCopy = [...state.board];
    // if (winner || boardCopy[index]) return;
    dispatch({
      type: "CLICK",
      payload: {
        index,
        winner,
      },
    });
    // boardCopy[index] = state.xIsNext ? "X" : "O";
    // setBoard(boardCopy);
    // setXIsNext((xIsNext)=> !xIsNext);
    // setState({
    //   ...state,
    //   board: boardCopy,
    //   xIsNext: !state.xIsNext,
    // });
  };
  console.log(state);
  const handleResetgame = () => {
    dispatch({
        type: "RESET",
    });
    // setBoard(Array(9).fill(null));
  };
  return (
    <div>
      <Board cells={state.board} onClick={handleClick}></Board>
      {winner && <div className="game-winner">Winner Is: {winner}</div>}
      <button className="game-reset" onClick={handleResetgame}>
        Reset Game
      </button>
    </div>
  );
};
export default Game;
