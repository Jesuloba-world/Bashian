import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import genReducer from "./store/reducers/general";
import dataReducer from "./store/reducers/data";
// saga
import createSagaMiddleware from "redux-saga";

const composeEnhancers =
	(process.env.NODE_ENV !== "production"
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: null) || compose;

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
	gen: genReducer,
	data: dataReducer,
});

const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(sagaMiddleware))
);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
