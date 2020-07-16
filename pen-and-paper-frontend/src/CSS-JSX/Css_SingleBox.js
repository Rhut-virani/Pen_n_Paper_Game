import { makeStyles } from "@material-ui/core/styles";

const useSingleBoxStyles = makeStyles((theme) => ({
	singleBox: (box) => ({
		backgroundColor: box.winnercolor || "#F4F4F4",
		height: "calc(45vw/10)",
		width: "calc(45vw/10)",
		display: "inline-block",
		position: "relative",
	}),
	border: (box) => ({
		borderWidth: "4px",
		borderStyle: "solid",
		borderRightWidth: box.side2 ? "4px" : 0,
		borderBottomWidth: box.side3 ? "4px" : 0,
		borderTopColor: box.side1.color || "#f4f4f4",
		borderRightColor: (box.side2 && box.side2.color) || "#f4f4f4",
		borderBottomColor: (box.side3 && box.side3.color) || "#f4f4f4",
		borderLeftColor: box.side4.color || "#f4f4f4",
	}),
}));

export default useSingleBoxStyles;
