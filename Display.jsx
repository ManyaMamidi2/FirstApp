import { useState, useEffect } from "react";
import React from "react";

const URL = "https://financialmodelingprep.com/api/v3/income-statement/AAPL?";
const API_key = "rYCJR5OOlkIgoYWSZLzFCIEN3st63hVX";
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
			<input
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				type='number'
			/>
		</div>
	);
}
