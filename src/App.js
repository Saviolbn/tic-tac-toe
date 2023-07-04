import React, { useState } from 'react';

import './App.css';

import { Board } from './components/Board';

function App() {

  const winner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  const [board, setBoard] = useState(Array(9).fill(null));
  const [playing, setPlaying] = useState(true);

  const boxCheck = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return playing === true ? "X" : "O";
      } else {
        return value;
      }
    })

    checkWinner(updatedBoard);
    setBoard(updatedBoard);
    setPlaying(!playing);
  }
  const checkWinner = (board) => {
    for (let i = 0; i < winner.length; i++) {
      const[x,y,z] = winner[i];
      
      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        alert (board[x])
        return board[x];
      }
    }
  }
  return (
    <div className="App">
      <Board board={board} onClick={boxCheck} />
    </div>
  );
}



export default App;
