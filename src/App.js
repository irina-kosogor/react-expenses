import { Costs } from "./components/Costs/Costs";
import "./App.scss";

function App() {
	const data = [
		{ title: "Fridge", fullDate: "05-15-2022", price: 999.99, id: 1 },
		{ title: "Table", fullDate: "08-12-2022", price: 299.99, id: 2 },
		{ title: "MacBook", fullDate: "12-04-2023", price: 1999.99, id: 3 },
		{ title: "TV", fullDate: "3-15-2023", price: 2399.99, id: 4 },
	];

	return (
		<div className="App">
			<Costs data={data} />
		</div>
	);
}

export default App;
