import { useState } from "react";
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

	const [formDisplay, setFormDisplay] = useState(false);

	const openFormHandler = () => {
		setFormDisplay((old) => !old);
	};

	return (
		<div className="new-cost">
			<div className="new-cost__add-cost">
				<div className="new-cost__actions">
					<button type="submit" onClick={openFormHandler}>
						Add new expense
					</button>
				</div>
			</div>
			{formDisplay && (
				<CostForm
					onSaveCostData={saveCostDataHandler}
					setFormDisplay={setFormDisplay}
				/>
			)}
		</div>
	);
};
