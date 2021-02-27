import * as actionTypes from "../actions/actionTypes";

const football_leagues = [
	{ name: "UEFA Championship", id: 2 },
	{ name: "Premier league", id: 39 },
	{ name: "English Championship", id: 40 },
	{ name: "ligue 1", id: 61 },
	{ name: "Bundesliga 1", id: 78 },
	{ name: "Eredivisie", id: 88 },
	{ name: "Italian Serie A", id: 135 },
];

const basketball_leagues = [{ name: "NBA", id: 12 }];

const initialState = {
	sports: ["football", "basketball"],
	sport: "football",
	leagues: football_leagues,
	league: football_leagues[0],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SELECT_SPORT:
			const leag = {
				leagues: null,
				league: null,
			};
			if (action.sport === "football") {
				leag.leagues = football_leagues;
				leag.league = football_leagues[0];
			}
			if (action.sport === "basketball") {
				leag.leagues = basketball_leagues;
				leag.league = basketball_leagues[0];
			}

			return {
				...state,
				sport: action.sport,
				...leag,
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
