import React, { useState } from 'react';
import './App.css';

function App() {
	const [hearts, setHearts] = useState([]);

	const addHeart = (event) => {
		const { clientX, clientY } = event; // Get mouse position
		setHearts([...hearts, { id: Date.now(), x: clientX, y: clientY }]); // Add a new heart with coordinates
	};

	return (
		<div className="">
			<img className="img" src="./cat.png" alt="" />
			<h1 className="title">Солнышко мое, я тебя очень очень сильно люблю&#x1F496;&#x1F496;&#x1F496;&#x1F496;</h1>
			<div className="buttonWrapper">
				<button onClick={addHeart}>Нажми сюда</button>
			</div>
			<div className="heartsContainer">
				{hearts.map((heart) => (
					<div
						key={heart.id}
						className="heart"
						style={{ left: heart.x, top: heart.y }} // Dynamic position
					>
						💖
					</div>
				))}
			</div>
		</div>
	);
}

export default App;
