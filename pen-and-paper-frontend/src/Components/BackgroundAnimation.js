import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
	animateBackground: {
		animation: "$bgcolorchange 50s infinite",
	},
	"@keyframes bgcolorchange": {
		"0%": {
			backgroundColor: "#ff0080",
		},
		"25%": {
			backgroundColor: "#35e2f2",
		},
		"50%": {
			backgroundColor: "#34dc42",
		},
		"75%": {
			backgroundColor: "#8c13fb",
		},
		"100%": {
			backgroundColor: "#f6df0e",
		},
	},
});
export default function BackgroundAnimation({ children }) {
	const classes = useStyles();
	return (
		<Grid
			container
			style={{ width: "100vw", height: "100vh" }}
			className={classes.animateBackground}
		>
			{children}
		</Grid>
	);
}
