import { Card } from "../UI/Card";
import { CostItem } from "./CostItem";
import { CostsFilter } from "./CostsFilter";
import "./Costs.scss";
import { useState } from "react";

export const Costs = ({ data }) => {
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

	const yearChangeHandler = (year) => {
		setSelectedYear(year);
	};

	return (
		<Card className="costs">
			<CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
			{data.map((item) => {
				return <CostItem data={item} key={item.id} />;
			})}
		</Card>
	);
};
