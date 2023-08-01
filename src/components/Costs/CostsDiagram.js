import { Diagram } from "../Diagram/Diagram";

export const CostsDiagram = ({ filteredData }) => {
	const diagramDataSets = [
		{ label: "Jan", value: 0 },
		{ label: "Feb", value: 0 },
		{ label: "Mar", value: 0 },
		{ label: "Apr", value: 0 },
		{ label: "May", value: 0 },
		{ label: "Jun", value: 0 },
		{ label: "Jul", value: 0 },
		{ label: "Aug", value: 0 },
		{ label: "Sep", value: 0 },
		{ label: "Oct", value: 0 },
		{ label: "Nov", value: 0 },
		{ label: "Dec", value: 0 },
	];

	for (let cost of filteredData) {
		const costMonth = new Date(cost.date).getMonth();
		diagramDataSets[costMonth].value += cost.sum;
	}

	return <Diagram dataSets={diagramDataSets} />;
};
