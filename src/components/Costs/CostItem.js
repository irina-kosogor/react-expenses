import { CostDate } from "./CostDate";
import { Card } from "../UI/Card";
import "./CostItem.scss";

export const CostItem = ({ data }) => {
	const { date, name, sum } = data;

	return (
		<Card className="cost-item">
			<CostDate fullDate={date} />
			<div className="cost-item__description">
				<h2 className="cost-item__title">{name}</h2>
				<div className="cost-item__price">${sum}</div>
			</div>
		</Card>
	);
};
