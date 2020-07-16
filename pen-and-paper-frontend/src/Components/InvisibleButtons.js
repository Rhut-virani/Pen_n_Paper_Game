import React from "react";
import useInvisibleButtonStyles from "../CSS-JSX/Css_InvisibleButton";

export default function InvisibleButtons({ turn, box, id }) {
	const classes = useInvisibleButtonStyles();
	const buttonsJSX = [];
	
	for (let i = 1; i < 5; i++) {
		if (box[`side${i}`] !== null) {
			buttonsJSX.push(
				<button
					key={i}
					className={`${classes[`button${i}`]} ${classes.button}`}
					onClick={() => {
						turn(id, `side${i}`);
					}}
					disabled={!box[`side${i}`]}
				/>
			);
		}
	}
	return <div>{buttonsJSX}</div>;
}
