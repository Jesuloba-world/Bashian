import * as actionTypes from "../actions/actionTypes";

const initialState = {
	loading: false,
	error: null,
	data: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_DATA_START:
			return {
				...state,
				loading: true,
			};
		case actionTypes.GET_DATA_SUCCESS:
			return {
				...state,
				loading: false,
				data: action.mainData,
			};
		case actionTypes.GET_DATA_FAIL:
			return {
				...state,
				loading: false,
				error: action.error,
			};
		default:
			return state;
	}
};

export default reducer;
