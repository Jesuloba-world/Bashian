import * as actionTypes from "../actions/actionTypes";

const football_leagues = [
	{ name: "UEFA Championship league", id: 2 },
	{ name: "Premier league", id: 39 },
	{ name: "English Championship League", id: 40 },
	{ name: "Bundesliga 1", id: 78 },
	{ name: "Eredivisie", id: 88 },
	{ name: "Italian Serie A", id: 135 },
];

const initialState = {
	sports: ["football", "basketball"],
	sport: "football",
	leagues: football_leagues,
	league: football_leagues[0],
};

const reducer = (state = initialState, action) => {
	switch (action.Type) {
		case actionTypes.SELECT_SPORT:
			return {
				...state,
				sport: action.sport,
			};
		case actionTypes.SELECT_LEAGUE:
			return {
				...state,
				league: action.league,
			};
		default:
			return state;
	}
};

export default reducer;
