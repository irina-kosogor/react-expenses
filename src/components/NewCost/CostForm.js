import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./CostForm.scss";

export const CostForm = (props) => {
	const [inputName, setInputName] = useState("");
	const [inputSum, setInputSum] = useState("");
	const [selectedDate, setSelectedDate] = useState("");

	const nameChangeHandler = (e) => {
		setInputName(e.target.value);
	};

	const sumChangeHandler = (e) => {
		setInputSum(e.target.value);
	};

	const dateChangeHandler = (date) => {
		setSelectedDate(date);
	};

	const submitHandler = (e) => {
		e.preventDefault();

		const costData = {
			name: inputName,
			sum: Number(inputSum).toFixed(2),
			date: selectedDate.toLocaleDateString("es-CL"),
		};

		props.onSaveCostData(costData);

		setInputName("");
		setInputSum("");
		setSelectedDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-cost__controls">
				<div className="new-cost__control">
					<label htmlFor="new-cost__name">Name</label>
					<input
						type="text"
						id="new-cost__name"
						value={inputName}
						onChange={nameChangeHandler}
					/>
				</div>
				<div className="new-cost__control">
					<label htmlFor="new-cost__sum">Sum</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						id="new-cost__sum"
						value={inputSum}
						onChange={sumChangeHandler}
					/>
				</div>
				<div className="new-cost__control">
					<label htmlFor="new-cost__date">Date</label>
					<DatePicker
						selected={selectedDate}
						value={selectedDate}
						onChange={dateChangeHandler}
						placeholderText="dd/mm/yyyy"
						id="new-cost__date"
					/>
				</div>
				<div className="new-cost__actions">
					<button type="submit">Add expense</button>
				</div>
			</div>
		</form>
	);
};
