import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import InvisibleButtons from "./InvisibleButtons";
import Dots from "./Dots";
import useSingleBoxStyles from "../CSS-JSX/Css_SingleBox";

export default function SingleBox({
	id,
	turn,
	box,
	side1,
	side4,
	nextBox,
	tenthBox,
	handleWinner,
}) {
	const classes = useSingleBoxStyles(box);
	if (box) {
		useEffect(() => {
			if (
				!box.winnercolor &&
				side1.clicked &&
				side4.clicked &&
				nextBox.clicked &&
				tenthBox.clicked
			) {
				handleWinner(id);
			}
		});
		return (
			<Grid className={`${classes.singleBox} ${classes.border}`}>
				<InvisibleButtons turn={turn} box={box} id={id} />
				<Dots box={box} id={id} />
			</Grid>
		);
	} else {
		return <div></div>;
	}
}
