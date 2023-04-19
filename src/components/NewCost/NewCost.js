import { CostForm } from "./CostForm";
import "./NewCost.scss";

export const NewCost = (props) => {
	const saveCostDataHandler = (inputCostData) => {
		const costData = {
			...inputCostData,
			id: Math.random().toFixed(6).toString().slice(2),
		};
		props.onAddCost(costData);
	};

	return (
		<div className="new-cost">
			<CostForm onSaveCostData={saveCostDataHandler} />
		</div>
	);
};
