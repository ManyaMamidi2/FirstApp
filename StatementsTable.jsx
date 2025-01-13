import Statement from "./Statement";
import React, { useState } from "react";

export default function StatementsTable({ incomeData, setIncomeData }) {
	const [sortCriteria, setSortCriteria] = useState("date");
	const [sortOrder, setSortOrder] = useState("ascending");
	const [filterCriteria, setFilterCriteria] = useState("revenue");
	const [minValue, setMinValue] = useState(0);
	const [maxValue, setMaxValue] = useState(Infinity);

	// Sorting function
	const sortedData = [...incomeData].sort((a, b) => {
		if (sortOrder === "ascending") {
			return a[sortCriteria] > b[sortCriteria] ? 1 : -1;
		} else {
			return a[sortCriteria] < b[sortCriteria] ? 1 : -1;
		}
	});

	// Filtering function
	const filteredData = sortedData.filter((statement) => {
		const value = statement[filterCriteria];
		return value >= minValue && value <= maxValue;
	});

	return (
		<>
			<div className='flex flex-col md:flex-row items-center gap-4 my-6'>
				<div className='flex flex-col'>
					<label className='font-medium mb-1'>Sort by:</label>
					<select
						value={sortCriteria}
						onChange={(e) => setSortCriteria(e.target.value)}
						className='border rounded px-2 py-1'
					>
						<option value='date'>Date</option>
						<option value='revenue'>Revenue</option>
						<option value='netIncome'>Net Income</option>
					</select>
				</div>
				<div className='flex flex-col'>
					<label className='font-medium mb-1'>Order:</label>
					<select
						value={sortOrder}
						onChange={(e) => setSortOrder(e.target.value)}
						className='border rounded px-2 py-1'
					>
						<option value='ascending'>Ascending</option>
						<option value='descending'>Descending</option>
					</select>
				</div>
				<div className='flex flex-col'>
					<label className='font-medium mb-1'>Filter by:</label>
					<select
						value={filterCriteria}
						onChange={(e) => setFilterCriteria(e.target.value)}
						className='border rounded px-2 py-1'
					>
						<option value='date'>Date</option>
						<option value='revenue'>Revenue</option>
						<option value='netIncome'>Net Income</option>
						<option value='grossProfit'>Gross Profit</option>
						<option value='eps'>EPS</option>
						<option value='operatingIncome'>Operating Income</option>
					</select>
				</div>
				<div className='flex flex-col'>
					<label className='font-medium mb-1'>Min value:</label>
					<input
						type='number'
						value={minValue}
						onChange={(e) => setMinValue(Number(e.target.value) || 0)}
						className='border rounded px-2 py-1'
					/>
				</div>
				<div className='flex flex-col'>
					<label className='font-medium mb-1'>Max value:</label>
					<input
						type='number'
						value={maxValue}
						onChange={(e) => setMaxValue(Number(e.target.value) || Infinity)}
						className='border rounded px-2 py-1'
					/>
				</div>
				<button
					onClick={() => {
						setFilterCriteria("revenue");
						setMinValue(0);
						setMaxValue(Infinity);
					}}
					className='bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-200'
				>
					Reset Filters
				</button>
			</div>
			<h3 className='text-center text-2xl text-blue-500 my-4'>
				Apple Income Statements
			</h3>
			<table className='table-auto w-full border-collapse border border-gray-300'>
				<thead>
					<tr className='bg-gray-100'>
						<th className='border border-gray-300 px-4 py-2 text-left'>Date</th>
						<th className='border border-gray-300 px-4 py-2 text-left'>
							Revenue
						</th>
						<th className='border border-gray-300 px-4 py-2 text-left'>
							Net Income
						</th>
						<th className='border border-gray-300 px-4 py-2 text-left'>
							Gross Profit
						</th>
						<th className='border border-gray-300 px-4 py-2 text-left'>EPS</th>
						<th className='border border-gray-300 px-4 py-2 text-left'>
							Operating Income
						</th>
					</tr>
				</thead>
				<tbody>
					<Statement incomeData={filteredData} />
				</tbody>
			</table>
		</>
	);
}
