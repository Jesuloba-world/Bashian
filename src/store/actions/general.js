import * as actionTypes from "./actionTypes";

export const selectSport = (sport) => {
	return {
		type: actionTypes.SELECT_SPORT,
		sport: sport,
	};
};

export const selectLeague = (league) => {
	return {
		type: actionTypes.SELECT_LEAGUE,
		league: league,
	};
};
