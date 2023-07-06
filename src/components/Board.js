import React from "react";
import { Box } from "./Box";
import "./Board.css";

export const Board = ({ board, onClick, playing, onReset }) => {
	return (
		<div onClick={onReset} className={"board"}>
			{board.map((value, idx) => {
				return <Box
					className= {playing}
					key={idx}
					value={value}
					onClick={() => value === null && onClick(idx)}
				/>
			})}
		</div>
	)
}