import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import BackgroundAnimation from "./BackgroundAnimation";

export default function Instructions({ readInstructions }) {
	return (
		<BackgroundAnimation>
			<Grid container item xs={12} alignItems="flex-end" justify="center">
				<Typography variant="h4" align="center">
					Join the dots by clicking between 2 dots. <br /> <br /> Player to
					close the sqaure on its chance gets the square and 1 point.
					<br />
					<br />
					Player to score 25 first wins the game
					<br />
				</Typography>
			</Grid>
			<Grid container item xs={12} alignItems="center" justify="center">
				<Button
					color="primary"
					variant="contained"
					size="large"
					onClick={(e) => readInstructions(e)}
				>
					<Typography variant="h5" style={{ padding: 5 }}>
						Play
					</Typography>
				</Button>
			</Grid>
		</BackgroundAnimation>
	);
}
