import Background from "./layout/Background/Background";
import AppLayer from "./layout/AppLayer/AppLayer";

function App() {
	return (
		<Background>
			<AppLayer>
				<h1>Hello World</h1>
				<p>
					This is an app for predicting football and basketball
					outcomes
				</p>
			</AppLayer>
		</Background>
	);
}

export default App;
