import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";
import BackgroundAnimation from "./BackgroundAnimation";

export default function InformationScreen({ handleClick, text, buttonName }) {
	return (
		<BackgroundAnimation>
			<Grid container item xs={12} alignItems="flex-end" justify="center">
				<Typography
					variant="h4"
					align="center"
					style={{ whiteSpace: "pre-line" }}
				>
					{text}
				</Typography>
			</Grid>
			<Grid container item xs={12} alignItems="center" justify="center">
				<Button
					color="primary"
					variant="contained"
					size="large"
					onClick={(e) => handleClick(e)}
				>
					<Typography variant="h5" style={{ padding: 5 }}>
						{buttonName}
					</Typography>
				</Button>
			</Grid>
		</BackgroundAnimation>
	);
}
