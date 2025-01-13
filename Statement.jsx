export default function Statement({ statements, incomeData, setIncomeData }) {
	return (
		<>
			{incomeData.map((statements) => {
				const { date, revenue, netIncome, grossProfit, eps, operatingIncome } =
					statements;
				return (
					<tr key={date}>
						<td>{date}</td>
						<td>{revenue}</td>
						<td>{netIncome}</td>
						<td>{grossProfit}</td>
						<td>{eps}</td>
						<td>{operatingIncome}</td>
					</tr>
				);
			})}
		</>
	);
}
