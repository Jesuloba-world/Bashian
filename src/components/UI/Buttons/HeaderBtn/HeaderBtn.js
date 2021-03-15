import classes from "./HeaderBtn.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
	selectSport,
	selectLeague,
	getData,
} from "../../../../store/actions/index";

const HeaderBtn = (props) => {
	const active = useSelector((state) => {
		if (!state.gen.league) {
			return state.gen.sport === props.title;
		}
		return (
			state.gen.sport === props.title ||
			state.gen.league.name === props.title
		);
	});

	const dispatch = useDispatch();

	const btnClass = [classes.HeaderBtn];

	if (active) {
		btnClass.push(classes.active);
	}
	if (props.league) {
		btnClass.push(classes.league);
	}

	const headBtnClickHandler = () => {
		if (props.sport) {
			dispatch(selectSport(props.title));
		}
		if (props.league) {
			dispatch(selectLeague({ name: props.title, id: props.id }));
			dispatch(
				getData({
					sport: props.name,
					league: { name: props.title, id: props.id },
				})
			);
		}
	};

	return (
		<button className={btnClass.join(" ")} onClick={headBtnClickHandler}>
			{props.title}
		</button>
	);
};

export default HeaderBtn;
