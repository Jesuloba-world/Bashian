import classes from "./AppLayer.module.css";
import Header from "../Header/Header";

const AppLayer = (props) => (
	<div className={classes.AppLayer}>
		<Header />
		{props.children}
	</div>
);

export default AppLayer;
