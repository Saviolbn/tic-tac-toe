import React from "react";

import "./Box.css"

export const Box = ({ value, onClick, className }) => {
	const style = value === "X" ? "box x " : "box o "
	return (
		<button
			className ={style + className}
			onClick={onClick}
		>
			{value}
		</button>
	)
}