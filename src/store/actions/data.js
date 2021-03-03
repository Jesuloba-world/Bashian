import * as actionTypes from "./actionTypes";

export const initialize = () => {
	return {
		type: actionTypes.INITIALIZE,
	};
};

export const getData = () => {
	return {
		type: actionTypes.GET_DATA,
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
