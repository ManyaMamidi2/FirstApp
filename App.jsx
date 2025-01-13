import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Display from "./components/Display";
import Statement from "./components/Statement";
import StatementsTable from "./components/StatementsTable";

function App() {
	const [incomeData, setIncomeData] = useState([]);
	return (
		<div className='App'>
			<Display incomeData={incomeData} setIncomeData={setIncomeData} />
			<StatementsTable incomeData={incomeData} setIncomeData={setIncomeData} />
		</div>
	);
}

export default App;
