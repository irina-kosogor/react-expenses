import { CostItem } from "./CostItem";
import "./CostsList.scss";

export const CostsList = ({ filteredData }) => {
	if (filteredData.length === 0) {
		return (
			<p className="cost-list__fallback">There is no data to display</p>
		);
	}

	return (
		<ul className="cost-list">
			{filteredData.map((item) => {
				return <CostItem data={item} key={item.id} />;
			})}
		</ul>
	);
};
