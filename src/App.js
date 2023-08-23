import Calculator from "./Calculator";
import Navbar from "./Navbar";
import TwoSum from "./TwoSum";
import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div>
					<h1>Section 1 Objective Questions</h1>
					<div>
						<div>1. C</div>
						<div>2. A</div>
						<div>3. C</div>
						<div>4. B</div>
						<div>5. A</div>
						<div>6. D</div>
						<div>7. A</div>
						<div>8. C</div>
						<div>9. B</div>
						<div>10. D</div>
					</div>
				</div>
				<Calculator />
				<Navbar />
				<TwoSum />
			</header>
		</div>
	);
}

export default App;
