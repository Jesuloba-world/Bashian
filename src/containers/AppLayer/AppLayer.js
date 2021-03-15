import classes from "./AppLayer.module.css";
import Header from "../../layout/Header/Header";
import Main from "../../layout/Main/Main";

const AppLayer = (props) => (
	<div className={classes.AppLayer}>
		<Header />
		<Main />
	</div>
);

export default AppLayer;
