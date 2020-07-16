const reducer = (state, { type, payload }) => {
	switch (type) {
		case "LOAD_DATA":
			return {
				...state,
				box: payload,
			};
		case "CHANGE_PLAYER":
			return {
				...state,
				isCurrentPlayer1: !state.isCurrentPlayer1,
				date: Date.now() + 31000,
			};
		case "TURN":
			return {
				...state,
				box: state.box.map((b) =>
					b.id === payload.id
						? {
								...b,
								[payload.side]: {
									clicked: true,
									color: state.isCurrentPlayer1
										? state.player1.color
										: state.player2.color,
								},
						  }
						: b
				),
			};
		case "WINNER":
			let winner = () => {
				return {
					player2: { ...state.player2, score: state.player2.score + 1 },
				};
			};
			if (!state.isCurrentPlayer1) {
				winner = () => {
					return {
						player1: { ...state.player1, score: state.player1.score + 1 },
					};
				};
			}
			const result = winner();
			return {
				...state,
				...result,
				box: state.box.map((b) =>
					b.id === payload
						? {
								...b,
								winnercolor: state.isCurrentPlayer1
									? state.player2.color
									: state.player1.color,
						  }
						: b
				),
			};
		case "READ":
			return {
				...state,
				instructions: true,
				date: Date.now() + 31000,
			};
		case "COLOR_SELECT":
			return {
				...state,
				player1: { ...state.player1, color: payload.color1 },
				player2: { ...state.player2, color: payload.color2 },
				isCurrentPlayer1: payload.color1,
				previousPlayer: payload.color2,
			};
		default:
			return state;
	}
};

export default reducer;
