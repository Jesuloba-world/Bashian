import * as actionTypes from "./actionTypes";

const currentSeasonBasketball = `${
	new Date().getFullYear() - 1
}-${new Date().getFullYear()}`;

const currentSeasonFootball = `${new Date().getFullYear() - 1}`;

export const initialize = () => {
	return {
		type: actionTypes.INITIALIZE,
	};
};

export const getData = (getStat) => {
	let season = 0;

	if (getStat.sport === "football") {
		season = currentSeasonFootball;
	} else {
		season = currentSeasonBasketball;
	}

	return {
		type: actionTypes.GET_DATA,
		sport: getStat.sport,
		league: getStat.league,
		season: season,
	};
};

export const getDataStart = () => {
	return {
		type: actionTypes.GET_DATA_START,
	};
};

export const getDataSuccess = (data) => {
	return {
		type: actionTypes.GET_DATA_SUCCESS,
		mainData: data,
	};
};

export const getDataFail = (error) => {
	return {
		type: actionTypes.GET_DATA_FAIL,
		error: error,
	};
};
