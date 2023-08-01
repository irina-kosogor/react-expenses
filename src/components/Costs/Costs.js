import { useState } from "react";
import { Card } from "../UI/Card";
import { CostsFilter } from "./CostsFilter";
import { CostsList } from "./CostsList";
import { CostsDiagram } from "./CostsDiagram";
import "./Costs.scss";

export const Costs = ({ data }) => {
	const [selectedYear, setSelectedYear] = useState(
		new Date().getFullYear().toString()
	);

	const yearChangeHandler = (year) => {
		setSelectedYear(year);
	};

	const filteredData = data.filter(
		(item) => new Date(item.date).getFullYear().toString() === selectedYear
	);

	return (
		<Card className="costs">
			<CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
			<CostsDiagram filteredData={filteredData} />
			<CostsList filteredData={filteredData} />
		</Card>
	);
};
