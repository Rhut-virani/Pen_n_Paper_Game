import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	dot: {
		background: "#2f2f2f",
		height: "0.5em",
		width: "0.5em",
		borderRadius: "50%",
		margin: 0,
		position: "absolute",
	},
	dotTopLeft: { top: "-5px", left: "-5px" },
	dotTopRight: { top: "-5px", right: "-5px" },
	dotBottomRight: { bottom: "-5px", right: "-5px" },
	dotBottomLeft: { bottom: "-5px", left: "-5px" },
});
export default function Dots({ id, box }) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<div className={`${classes.dot} ${classes.dotTopLeft}`}></div>
			{box.side3 === null && box.side2 !== null && (
				<div className={`${classes.dot} ${classes.dotTopRight}`}></div>
			)}
			{box.side2 === null && box.side3 !== null && (
				<div className={`${classes.dot} ${classes.dotBottomLeft}`}></div>
			)}
			{id === 100 && (
				<React.Fragment>
					<div className={`${classes.dot} ${classes.dotBottomLeft}`}></div>
					<div className={`${classes.dot} ${classes.dotTopRight}`}></div>
					<div className={`${classes.dot} ${classes.dotBottomRight}`}></div>
				</React.Fragment>
			)}
		</React.Fragment>
	);
}
