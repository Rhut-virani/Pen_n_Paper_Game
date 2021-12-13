import React, { useState, useEffect, useReducer } from "react";
import ColorSelection from "./Components/ColorSelection";
import InformationScreen from "./Components/InformationScreen";
import Game from "./Components/Game";
import {
	getFromStorage,
	saveToStorage,
	clearStorage,
} from "./Functions/LocalStorage";
import Api from "./Functions/Api";
import reducer from "./Functions/Reducer";
import fullscreen from "./Functions/Fulscreen";
import BackgroundAnimation from "./Components/BackgroundAnimation";
import { Grid, Typography, CircularProgress } from "@material-ui/core";

const initialState = {
	player1: { color: getFromStorage("player1") || false, score: 0 },
	player2: { color: getFromStorage("player2") || false, score: 0 },
	isCurrentPlayer1: true,
	box: [{ class: "" }],
	instructions: getFromStorage("instructions") || false,
	date: Date.now() + 31000,
};

export default function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { player1, player2, isCurrentPlayer1, box, instructions, date } = state;
	const [isLoading, setIsLoading] = useState(true);
	const [isLandscape, setIsLandscape] = useState(true);

	useEffect(() => {
		function handleResize() {
			setIsLandscape(window.innerWidth > window.innerHeight);
		}
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});
	useEffect(() => {
		Api().then((results) => {
			dispatch({ type: "LOAD_DATA", payload: results });
			setIsLoading(false);
		});
	}, []);

	const onTick = (time) => {
		if (time < 2) {
			dispatch({ type: "CHANGE_PLAYER" });
		}
	};
	const colorSelect = (color1, color2) => {
		dispatch({ type: "COLOR_SELECT", payload: { color1, color2 } });
		saveToStorage("player1", color1);
		saveToStorage("player2", color2);
		fullscreen();
	};
	const readInstructions = (e) => {
		e.preventDefault();
		dispatch({ type: "READ" });
		saveToStorage("instructions", true);
	};
	const turn = (id, side, name) => {
		dispatch({ type: "TURN", payload: { id, side, name } });
		dispatch({ type: "CHANGE_PLAYER" });
	};
	const handleWinner = (id) => {
		dispatch({ type: "WINNER", payload: id });
	};
	const resetGame = () => {
		clearStorage();
		window.location.reload();
	};
	if (isLoading) {
		return (
			<Grid
				container
				justify="center"
				alignContent="center"
				style={{ height: "100vh" }}
			>
				<CircularProgress />
			</Grid>
		);
	} else if (!isLandscape) {
		return (
			<BackgroundAnimation>
				<Grid container item xs={12} alignItems="center" justify="center">
					<Typography variant="h4" align="center">
						Please Set The Device In Landscape
					</Typography>
				</Grid>
			</BackgroundAnimation>
		);
	} else if (!player1.color && !player2.color) {
		return (
			<ColorSelection
				player1={player1}
				player2={player2}
				colorSelect={colorSelect}
			/>
		);
	} else if (!instructions) {
		const text =
			"Join the dots & make a line by clicking between 2 dots. \n\n Player to close the box with their line wins the box and gets 1 point. \n\n There is a timer of 30 sec, after which you lose your current chance \n\n Player to score 25 first, wins the game";
		return (
			<InformationScreen
				handleClick={readInstructions}
				text={text}
				buttonName={"Play"}
			/>
		);
	} else if (!isLoading) {
		return (
			<Game
				boxData={box}
				player1={player1}
				player2={player2}
				isCurrentPlayer1={isCurrentPlayer1}
				turn={turn}
				handleWinner={handleWinner}
				resetGame={resetGame}
				onTick={onTick}
				date={date}
			/>
		);
	}
}
