import axios from "axios";
import { put } from "redux-saga/effects";

import * as actions from "../actions/index";

const apiKey = "94c8572dfff7b06ffa1d7d82a1057128";

export function* getDataSaga(action) {
	yield put(actions.getDataStart());
	yield console.log("let us goan get data");
	yield console.log(action);
}
