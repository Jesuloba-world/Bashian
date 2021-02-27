import classes from "./HeaderBtn.module.css";

const HeaderBtn = (props) => {
	const active = false;

	const btnClass = [classes.HeaderBtn];

	if (active) {
		btnClass.push(classes.active);
	}

	return <button className={btnClass.join(" ")}>{props.title}</button>;
};

export default HeaderBtn;
