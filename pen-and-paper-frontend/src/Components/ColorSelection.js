import React, { useState } from "react";
import {
	FormControl,
	FormHelperText,
	Select,
	MenuItem,
	Grid,
	Typography,
	Button,
} from "@material-ui/core";
import useColorStyles from "../CSS-JSX/Css_ColorSelection";

const colorNames = [
	["#ff0080", "Rose"],
	["#35e2f2", "Picton Blue"],
	["#34DC42", "Malachite Green"],
	["#8c13fb", "Electric Violet"],
	["#f6df0e", "Ripe Lemon"],
	["#ff47c1", "Razzle Dazzle Pink"],
];

export default function ColorSelection({ colorSelect }) {
	const [color1, setColor1] = useState(0);
	const [color2, setColor2] = useState(1);
	const classes = useColorStyles();

	const handleSubmit = () => {
		if (color1 === color2) {
			window.alert("Please Select different color for each player");
			return;
		}
		colorSelect(colorNames[color1][0], colorNames[color2][0]);
	};
	const handleColorChange = (e, playerName) => {
		if (playerName === "player1") {
			setColor1(parseInt(e.target.value, 10));
		} else {
			setColor2(parseInt(e.target.value, 10));
		}
	};
	const optionsJSX = [];
	for (let i = 1; i < 3; i++) {
		optionsJSX.push(
			<Grid key={i} item xs={6}>
				<FormControl variant="outlined" className={classes.formControl}>
					<Select
						labelId="demo-simple-select-outlined-label"
						id="demo-simple-select-outlined"
						value={eval(`color${i}`)}
						onChange={(e) => {
							handleColorChange(e, `player${i}`);
						}}
						lable="player"
					>
						{colorNames.map((element, index) => {
							return (
								<MenuItem value={index} key={index}>
									<Typography variant="h5">{element[1]}</Typography>
								</MenuItem>
							);
						})}
					</Select>
					<FormHelperText style={{ fontSize: "1.5rem" }}>
						Player {i}
					</FormHelperText>
				</FormControl>
			</Grid>
		);
	}
	return (
		<Grid
			container
			justify="center"
			align="center"
			className={classes.fullHeight}
		>
			<Grid
				container
				item
				xs={12}
				justify="center"
				alignContent="center"
				className={classes.halfHeight}
			>
				<Typography className="hide" variant="h3" gutterBottom>
					Select the Color of Choice For Each Player
				</Typography>
			</Grid>
			<Grid
				container
				item
				xs={12}
				justify="space-around"
				spacing={5}
				className={classes.halfHeight}
			>
				{optionsJSX}
				<Grid item xs={12}>
					<Button
						color="primary"
						variant="contained"
						size="large"
						onClick={() => handleSubmit()}
					>
						<Typography variant="h5" style={{ padding: 5 }}>
							Play
						</Typography>
					</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}
