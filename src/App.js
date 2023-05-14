import { useState, useEffect } from 'react';

import Cards from './Components/Cards';
import GameInfo from './Components/GameInfo';
import SelectCategory from './Components/SelectCategory';
import GetImageData from './Components/GetImageData';
import GameOverModal from './Components/GameOverModal';

import './Styles/App.css';

function App() {
	// States
	const [imageData, setImageData] = useState(null);
	const [currentLevel, setCurrentLevel] = useState(1);
	const [currentCategory, setCurrentCategory] = useState(null);
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(0);
	const [gameOver, setGameOver] = useState(false);

	// Hooks
	useEffect(() => {
		GetImageData(setImageData);
	}, []);

	// Utility Functions
	const levelImageCount = () => currentLevel * 2 + 2;
	const isPlayGame = () => currentCategory && imageData && !gameOver;
	const getCurrentCategoryIndex = () => {
		if (imageData) {
			return imageData.findIndex((obj) => obj.category === currentCategory);
		}
		return -1;
	};

	// State setters
	function incrementCurrentScore() {
		setCurrentScore((prevCurrentScore) => prevCurrentScore + 1);
	}

	return (
		<div className='App'>
			{gameOver ? (
				<GameOverModal />
			) : isPlayGame() ? (
				<div className='info-cards-section'>
					<GameInfo
						currentLevel={currentLevel}
						currentCategory={currentCategory}
						currentScore={currentScore}
						highScore={highScore}
					/>
					<Cards
						images={imageData[getCurrentCategoryIndex()]}
						currentLevel={currentLevel}
						incrementCurrentScore={incrementCurrentScore}
						setGameOver={setGameOver}
					/>
				</div>
			) : (
				imageData && (
					<SelectCategory
						setCurrentCategory={setCurrentCategory}
						imageData={imageData}
					/>
				)
			)}
		</div>
	);
}

export default App;
