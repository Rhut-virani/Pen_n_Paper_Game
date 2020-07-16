import { makeStyles } from "@material-ui/core/styles";

const useColorStyles = makeStyles((theme) => ({
	fullHeight: {
		maxHeight: "90vh",
		height: "90vh",
	},
	halfHeight: {
		height: "50%",
	},
	formControl: {
		minWidth: "50%",
		margin: theme.spacing(1),
		fontSize: "2rem",
	},
}));

export default useColorStyles;
