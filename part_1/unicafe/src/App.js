import React, { useState } from "react";

const Statistic = ({ text, value }) => {
	return (
		<p>
			{text} {value}
		</p>
	);
};

const Statistics = ({ good, bad, neutral }) => {
	const all = good + neutral + bad;
	const positivePercentage = (good / all) * 100;
	return (
		<div>
			<h1>Statistics</h1>
			{good + bad + neutral === 0 ? (
				<p>No feedbacks given</p>
			) : (
				<div>
					<Statistic text="good" value={good} />
					<Statistic text="neutral" value={neutral} />
					<Statistic text="bad" value={bad} />
					<Statistic text="all" value={all} />
					<Statistic text="average" value={(good - bad) / all} />
					<Statistic
						text="positive percentage"
						value={positivePercentage + " %"}
					/>
				</div>
			)}
		</div>
	);
};

const Button = ({ text, update }) => {
	return <button onClick={() => update(prev => prev + 1)}>{text}</button>;
};

const App = () => {
	// save clicks of each button to its own state
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h1>Give Feedback</h1>
			<div>
				<Button text="good" update={setGood} />
				<Button text="neutral" update={setNeutral} />
				<Button text="bad" update={setBad} />
			</div>
			<Statistics good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default App;
