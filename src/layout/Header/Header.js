import classes from "./Header.module.css";
import HeaderBtn from "../../components/UI/Buttons/HeaderBtn/HeaderBtn";
import { useSelector } from "react-redux";

const Header = (props) => {
	const sports = useSelector((state) => state.gen.sports);
	const leagues = useSelector((state) => state.gen.leagues);
	const sport = useSelector((state) => state.gen.sport);

	return (
		<header className={classes.Header}>
			{/* <div>LOGO is supposed to be here</div> */}
			<div className={classes.sport}>
				{sports.map((sport) => (
					<HeaderBtn title={sport} key={sport} name={sport} sport />
				))}
			</div>
			<div className={classes.league}>
				{leagues.map((league) => (
					<HeaderBtn
						title={league.name}
						name={sport}
						id={league.id}
						key={league.id}
						league
					/>
				))}
			</div>
		</header>
	);
};

export default Header;
