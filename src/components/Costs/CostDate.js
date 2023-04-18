import "./CostDate.scss";

export const CostDate = ({ fullDate }) => {
	const month = new Date(fullDate).toLocaleString("en-US", {
		month: "long",
	});

	const year = new Date(fullDate).getFullYear();

	const date = new Date(fullDate).toLocaleString("en-US", {
		day: "2-digit",
	});
	return (
		<div className="cost-date">
			<span className="cost-date__month">{month}</span>
			<span className="cost-date__year">{year}</span>
			<span className="cost-date__day">{date}</span>
		</div>
	);
};
