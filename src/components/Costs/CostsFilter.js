import "./CostsFilter.scss";

export const CostsFilter = (props) => {
	const yearChangeHandler = (e) => {
		props.onChangeYear(e.target.value);
	};

	const years = [];
	const currentYear = new Date().getFullYear();
	for (let i = 0; i < 5; i++) {
		years.push(currentYear - i);
	}

	console.log(years);

	return (
		<div className="costs-filter">
			<div className="costs-filter__control">
				<label>Select a year</label>
				<select value={props.year} onChange={yearChangeHandler}>
					{years.map((year) => {
						return <option value={year}>{year}</option>;
					})}
				</select>
			</div>
		</div>
	);
};
