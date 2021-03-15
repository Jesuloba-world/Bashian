import classes from "./Main.module.css";
import { useSelector } from "react-redux";

const Main = (props) => {
	const league = useSelector((state) => state.gen.league);

	return (
		<div>
			{!league ? (
				<h1 className={classes.pick}>Select a League</h1>
			) : (
				<h1>You picked {league.name}</h1>
			)}
		</div>
	);
};

export default Main;
