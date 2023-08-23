import React, { useState } from "react";
function twoSum(numbers, target) {
	const num = numbers.toString();
	const numberStrings = num.split(",");
	const numbersArray = numberStrings
		.map((num) => parseInt(num, 10))
		.filter((num) => !isNaN(num));

	let left = 0;
	let right = numbersArray.length - 1;

	while (left < right) {
		const currentSum = numbersArray[left] + numbersArray[right];

		if (currentSum === target) {
			return [left + 1, right + 1]; // 1-based index
		} else if (currentSum < target) {
			left++;
		} else {
			right--;
		}
	}

	return [];
}

const TwoSum = () => {
	const [target, setTarget] = useState(3);
	const [array, setArray] = useState([1, 2, 11, 15]);

	const handleTargetChange = (event) => {
		if (event.target.value) {
			setTarget(parseFloat(event.target.value));
		} else {
			setTarget("");
		}
	};
	const handleArrayChange = (event) => {
		if (event.target.value.includes(",")) {
			setArray(event.target.value);
		} else {
			setArray([1, 2, 11, 15]);
		}
	};

	return (
		<div className="twoSum">
			<h1>Section 4 Two Sum</h1>
			<div>
				<div>Array Number as Below</div>
				<div>{array.toString()}</div>
			</div>
			<fieldset>
				<legend>Change Target and Array</legend>
				<div>
					<label>Array Number: </label>
					<input
						type="text"
						value={array.toString()}
						onChange={handleArrayChange}
					/>
				</div>
				<div>
					<label>Target: </label>
					<input type="number" value={target} onChange={handleTargetChange} />
				</div>
			</fieldset>
			<p>
				<span>Results:</span> {twoSum(array, target).toString()}
			</p>
		</div>
	);
};

export default TwoSum;
