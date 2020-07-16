import React from "react";
import SingleBox from "./SingleBox";
import { Grid } from "@material-ui/core";

export default function BoxGrids({ turn, boxData, handleWinner }) {
	const boxJSX = [];
	for (let i = 1; i <= 100; i++) {
		boxJSX.push(
			<SingleBox
				key={boxData[i].id}
				id={i}
				turn={turn}
				box={boxData[i]}
				side1={boxData[i].side1}
				side4={boxData[i].side4}
				nextBox={boxData[i].side2 || boxData[i + 1].side4}
				tenthBox={boxData[i].side3 || boxData[i + 10].side1}
				handleWinner={handleWinner}
			/>
		);
	}
	return (
		<Grid container item justify="center">
			{boxJSX}
		</Grid>
	);
}
