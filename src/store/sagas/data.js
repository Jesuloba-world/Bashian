import axios from "axios";
import { put } from "redux-saga/effects";

import * as actions from "../actions/index";

export function* getDataSaga(action) {
	yield put(actions.getDataStart());
	yield console.log("let us goan get data");
}
