import { makeStyles } from "@material-ui/core/styles";

const useInvisibleButtonStyles = makeStyles(() => ({
	button: {
		border: "none",
		position: "absolute",
		margin: 0,
		opacity: 0,
		height: "20%",
		width: "100%",
		"&:hover": {
			backgroundColor: "green",
			opacity: 1,
			borderRadius: "25%",
		},
	},
	button1: {
		top: "-10%",
	},
	button2: {
		right: "-52%",
		bottom: "40%",
		transform: "rotate(90deg)",
	},
	button3: {
		bottom: "-10%",
	},
	button4: {
		left: "-52%",
		top: "43%",
		transform: "rotate(90deg)",
	},
}));

export default useInvisibleButtonStyles;
