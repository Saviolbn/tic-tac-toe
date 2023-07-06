import React from "react";
import { Box } from "./Box";
import "./Board.css";

export const Board = ({board, onClick, playing}) => {
    return (
        <div className={`board ${playing}`}>
            {board.map((value, idx) => {
                return <Box key={idx} value={value}
                onClick={() => value === null && onClick(idx)} />
            })}
        </div>
    )
}