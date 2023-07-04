import React, { useState } from 'react';

import './App.css';

import { Board } from './components/Board';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [playing, setPlaying] = useState(true);

  const boxCheck = (boxIdx) =>{
    const updatedBoard = board.map((value, idx) =>{
      if(idx === boxIdx){
        return playing === true ? "X": "O";
      }else{
        return value;
      }
    })

    setBoard(updatedBoard);
    setPlaying(!playing)
  }

  return (
    <div className="App">
      <Board board = {board} onClick={boxCheck}/>
    </div>
  );
}

export default App;
