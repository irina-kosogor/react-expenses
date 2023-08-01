import { useState } from "react";
import { Costs } from "./components/Costs/Costs";
import { NewCost } from "./components/NewCost/NewCost";
import "./App.scss";

const initialData = [
	{
		name: "Fridge",
		date: "05-15-2022",
		sum: 999.99,
		id: "476682",
	},
	{ name: "Table", date: "08-12-2022", sum: 299.99, id: "060815" },
	{
		name: "MacBook",
		date: "12-04-2023",
		sum: 1999.99,
		id: "345432",
	},
	{ name: "TV", date: "3-15-2023", sum: 2399.99, id: "674718" },
];

function App() {
	const [data, setData] = useState(initialData);

	const addCostHandler = (cost) => {
		setData((previous) => [...previous, cost]);
	};

	return (
		<div className="App">
			<NewCost onAddCost={addCostHandler} />
			<Costs data={data} />
		</div>
	);
}

export default App;
