import { useState, useEffect } from "react";
import React from "react";

const URL = "https://financialmodelingprep.com/api/v3/income-statement/AAPL?";
const API_key = "cCINlVWKjIWQ1xjO3c40zkA9h0sL9VLg";
var data = "nothing to see yet";

export default function Display({ incomeData, setIncomeData }) {
	const [query, setQuery] = useState(5);
	useEffect(() => {
		async function fetchData() {
			//make API call
			// TODO: add try-catch in case cant grab data
			const response = await fetch(`${URL}apikey=${API_key}&limit=${query}`);
			//decode JSON file
			var data = await response.json();
			//print results to console
			console.log(`number of results requested: ${query}`);
			console.log(data);
			setIncomeData(data);
		}
		fetchData();
	}, [query]);
	return (
		<div>
			<label className='font-medium mb-1'>
				Choose number of datapoints to display (1-5):{" "}
			</label>
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				type='number'
				className='border rounded px-2 py-1'
			/>
		</div>
	);
}
