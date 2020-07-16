import React from "react";
import InformationScreen from "./InformationScreen";
import BoxGrids from "./BoxGrids";
import Countdown from "react-countdown";
import { Grid, Typography, Button } from "@material-ui/core";
import useGameStyles from "../CSS-JSX/Css_Game";

export default function Game({
	boxData,
	player1,
	player2,
	isCurrentPlayer1,
	turn,
	handleWinner,
	resetGame,
	onTick,
	date,
}) {
	const classes = useGameStyles({ isCurrentPlayer1, player1, player2 });
	let playerName = "Player 1 Has Won The Game";
	if (player1.score === 25 || player2.score === 25) {
		if (player2.score === 25) {
			playerName = "Player 2 Has Won The Game";
		}
		return (
			<InformationScreen
				handleClick={resetGame}
				text={playerName}
				buttonName={"Reset Game"}
			/>
		);
	} else {
		return (
			<Grid container className={classes.gameContainer}>
				<Grid container item xs={3} justify="center">
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
					<Grid
						container
						item
						xs={12}
						className={classes.scoreBoard}
						justify="center"
						alignContent="center"
					>
						<Grid
							container
							item
							xs={8}
							className={`${classes.score1} ${classes.score}`}
							justify="center"
							alignItems="center"
						>
							<Typography variant="h3">{player1.score}</Typography>
						</Grid>
						<Grid
							container
							item
							xs={8}
							className={`${classes.score2} ${classes.score}`}
							justify="center"
							alignItems="center"
						>
							<Typography variant="h3">{player2.score}</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid
					container
					item
					xs={6}
					className={classes.gridWrapper}
					justify="center"
					alignItems="center"
					spacing={1}
				>
					<BoxGrids
						turn={turn}
						boxData={boxData}
						current={isCurrentPlayer1}
						handleWinner={handleWinner}
					/>
				</Grid>
				<Grid container item xs={3} justify="center" alignItems="center">
					<Grid
						container
						item
						xs={8}
						justify="center"
						alignItems="center"
						className={classes.timer}
					>
						<Typography variant="h3">
							<Countdown
								date={date}
								intervalDelay={0}
								renderer={(props) => <div>{props.total / 1000 - 1}</div>}
								onTick={(props) => {
									onTick(props.total / 1000);
								}}
							/>
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		);
	}
}
