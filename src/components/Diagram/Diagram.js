import { DiagramBar } from "./DiagramBar";
import "./Diagram.scss";

export const Diagram = ({ dataSets }) => {
	const costsAmountArray = dataSets.map((item) => item.value);
	let maxMonthCost = Math.max(...costsAmountArray);

	return (
		<div className="diagram">
			{dataSets.map((dataSet) => (
				<DiagramBar
					key={dataSet.label}
					value={dataSet.value}
					maxValue={maxMonthCost}
					label={dataSet.label}
				/>
			))}
		</div>
	);
};
