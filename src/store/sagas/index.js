import { all, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actions/actionTypes";
import { getDataSaga } from "./data";

export function* watchDataGet() {
	yield all([takeLatest(actionTypes.GET_DATA, getDataSaga)]);
}
