import { makeStyles } from "@material-ui/core/styles";

const useGameStyles = makeStyles((theme) => ({
	score: {
		boxShadow: "6px 12px 24px 1px #2f2f2f96",
		height: "20%",
		margin: "5% 0%",
	},
	score1: ({ player1 }) => ({
		backgroundColor: player1.color,
	}),
	score2: ({ player2 }) => ({
		backgroundColor: player2.color,
	}),
	timer: ({ isCurrentPlayer1, player1, player2 }) => ({
		boxShadow: "6px 12px 24px 1px #2f2f2f96",
		height: "45%",
		backgroundColor: isCurrentPlayer1 ? player1.color : player2.color,
	}),
	gameContainer: {
		height: "100vh",
		backgroundColor: "#F4f4f4",
	},
	resetButton: {
		position: "absolute",
		height: "10%",
	},
	scoreBoard: {
		height: "100%",
	},
	gridWrapper: {
		padding: 0,
		lineHeight: 0,
		height: "100vh",
		overflow: "hidden",
	},
}));

export default useGameStyles;
