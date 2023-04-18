import React from "react";
import { Card } from "../UI/Card";
import { CostDate } from "./CostDate";
import "./CostItem.scss";

export const CostItem = ({ data }) => {
	const { fullDate, title, price } = data;

	return (
		<Card className="cost-item">
			<CostDate fullDate={fullDate} />
			<div className="cost-item__description">
				<h2 className="cost-item__title">{title}</h2>
				<div className="cost-item__price">${price}</div>
			</div>
		</Card>
	);
};
