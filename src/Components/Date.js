import {
	useEffect,
	useState,
} from "react";
import "../Styles/Date.css";

const Date = () => {
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const [date, setDate] = useState(
		new window.Date()
	);

	useEffect(() => {
		let timer = setInterval(
			() => setDate(new window.Date()),
			1000
		);
		return () => clearInterval(timer);
	}, []);

	return (
		<div>
			<h2>
				{monthNames[date.getMonth()]},
				{date.getDate()},
				{date.getFullYear()}
			</h2>
		</div>
	);
};

export default Date;
