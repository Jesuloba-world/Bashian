import axios from "axios";
import { put } from "redux-saga/effects";
import { config, apiKey, NBAteams } from "../../useful";

import * as actions from "../actions/index";

export function* getDataSaga(action) {
	yield put(actions.getDataStart());
	yield console.log("let us goan get data");
	yield console.log(action);
	try {
		let table = null;
		if (action.sport === "football") {
		} else if (action.sport === "basketball") {
			// const response = yield fetch(
			// 	`https://v1.basketball.api-sports.io/statistics?season=${}&team=139&league=12`,
			// 	{
			// 		method: "GET",
			// 		headers: {
			// 			"x-rapidapi-host": "v1.basketball.api-sports.io",
			// 			"x-rapidapi-key": apiKey,
			// 		},
			// 	}
			// );
			// yield console.log(response);

			table = yield NBAteams.map((team) => {
				// return fetch(
				// 	`https://v1.basketball.api-sports.io/statistics?season=${action.season}&team=${team.id}&league=${action.league.id}`,
				// 	{
				// 		method: "GET",
				// 		headers: {
				// 			"x-rapidapi-host": "v1.basketball.api-sports.io",
				// 			"x-rapidapi-key": apiKey,
				// 		},
				// 	}
				// );

				return axios.get(
					`https://v1.basketball.api-sports.io/statistics?season=${action.season}&team=${team.id}&league=${action.league.id}`,
					config
				);

				// return axios({
				// 	method: "GET",
				// 	url: `https://v1.basketball.api-sports.io/teams?id=${team.id}`,
				// 	headers: {
				// 		"content-type": "application/json",
				// 		"x-rapidapi-host": "v1.basketball.api-sports.io",
				// 		"x-rapidapi-key": apiKey,
				// 	},
				// 	// params: {
				// 	// 	search: "parameter",
				// 	// },
				// });
			});
		}
		yield console.log(table);
	} catch (error) {
		//console.log(error.message);
	}
}
