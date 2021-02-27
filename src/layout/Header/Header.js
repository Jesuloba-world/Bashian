import classes from "./Header.module.css";
import HeaderBtn from "../../components/UI/Buttons/HeaderBtn/HeaderBtn";

const Header = (props) => (
	<header className={classes.Header}>
		{/* <div>LOGO is supposed to be here</div> */}
		<div className={classes.sport}>
			<HeaderBtn title="Football" />
			<HeaderBtn title="Basketball" />
		</div>
	</header>
);

export default Header;
