import React, { useState } from 'react';

import './App.css';

import { Board } from './components/Board';
import { ScoreBoard } from './components/ScoreBoard';

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
  const [scores, setScore] = useState({ xScore: 0, oScore: 0 })
  const [gameOver, setGameOver] = useState(false)
  const [cellChecked ,setCellChecked] = useState(0);

  const boxCheck = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        setCellChecked(cellChecked + 1);
        return playing === true ? "X" : "O";
      } else {
        return value;
      }
    })

    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScore({ ...scores, oScore })
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScore({ ...scores, xScore })
      }
      console.log(scores)
    }

    setBoard(updatedBoard);
    setPlaying(!playing);
  }
  const checkWinner = (board) => {
    
    for (let i = 0; i < winner.length; i++) {
      const [x, y, z] = winner[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true)
        return board[x];
      }
    }
    if (cellChecked === 8) {
      setGameOver(true)
    }
  }

  const reset = () => {
    if (!gameOver) {
      return
    }
    setGameOver(false);
    setBoard(Array(9).fill(null))
  }

  return (
    <div className="App">
      <Board board={board} onClick={boxCheck} playing={playing} onReset={reset} />
      <ScoreBoard scores={scores} playing={playing} />
    </div>
  );
}



export default App;
