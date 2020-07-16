import React from "react";
import BackgroundAnimation from "./BackgroundAnimation";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	resetButton: {
		position: "absolute",
		height: "10%",
	},
}));
export default function Winner({ resetGame, playerName }) {
	const classes = useStyles();
	return (
		<BackgroundAnimation>
			{/* <div className="winningonly"> */}
			{/* <div className="reset-button hide"> */}
			<Grid>
				<Grid
					container
					item
					xs={12}
					justify="center"
					alignItems="flex-end"
					className={classes.resetButton}
				>
					<Button
						variant="contained"
						color="primary"
						size="large"
						onClick={() => resetGame()}
					>
						<Typography variant="h5" style={{ padding: 5 }}>
							Reset Game
						</Typography>
					</Button>
				</Grid>
				{/* </div> */}
				{/* <h1 className="winningh1 animated zoomInDown hide">
					{playerName} has Won the game
					</h1>
					<h1 className="portraith1">Please Set The Device In Landscape Mode</h1>
				</div> */}
			</Grid>
		</BackgroundAnimation>
	);
}
