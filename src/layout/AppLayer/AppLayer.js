import classes from "./AppLayer.module.css";

const AppLayer = (props) => (
	<div className={classes.AppLayer}>{props.children}</div>
);

export default AppLayer;
