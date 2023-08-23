import React, { useState } from "react";
const Calculator = () => {
	const [num1, setNum1] = useState("");
	const [num2, setNum2] = useState("");
	const [result, setResult] = useState("");

	const handleNum1Change = (event) => {
		setNum1(event.target.value);
	};

	const handleNum2Change = (event) => {
		setNum2(event.target.value);
	};

	const handleAdd = () => {
		let sum = "";
		const maxLength = Math.max(num1.length, num2.length);

		const num1Array = num1.split("").map(Number);
		const num2Array = num2.split("").map(Number);

		let carry = 0;

		for (let i = 0; i < maxLength; i++) {
			const digit1 = num1Array[num1Array.length - 1 - i] || 0;
			const digit2 = num2Array[num2Array.length - 1 - i] || 0;
			const digitSum = digit1 + digit2 + carry;
			sum = (digitSum % 10) + sum;
			carry = Math.floor(digitSum / 10);
		}

		if (carry > 0) {
			sum = carry + sum;
		}

		setResult(sum);
	};
	return (
		<div>
			<h1>Section 2 Calculator</h1>
			<input type="number" value={num1} onChange={handleNum1Change} />
			<input type="number" value={num2} onChange={handleNum2Change} />
			<button onClick={handleAdd}>Add</button>
			<p>Result: {result}</p>
		</div>
	);
};

export default Calculator;
