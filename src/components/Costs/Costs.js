import { Card } from "../UI/Card";
import { CostItem } from "./CostItem";
import "./Costs.scss";

export const Costs = ({ data }) => {
	return (
		<Card className="costs">
			{data.map((item) => {
				return <CostItem data={item} key={item.id} />;
			})}
		</Card>
	);
};
