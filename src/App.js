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

	useEffect(() => {
		// Check if level is complete
		if (currentLevel === 1) {
			if (currentScore === 4) {
				setCurrentLevel(2);
			}
		} else if (currentLevel === 2) {
			if (currentScore === 10) {
				setCurrentLevel(3);
			}
		} else if (currentLevel === 3) {
			if (currentScore === 18) {
				setCurrentLevel(4);
			}
		} else {
			if (currentScore === 28) {
				setGameOver(true);
			}
		}
		// Update Highscore if needed
		if (currentScore > highScore) {
			setHighScore(currentScore);
		}
	}, [currentScore]);

	// Utility Functions
	const levelImageCount = () => currentLevel * 2 + 2;
	const isPlayGame = () => currentCategory && imageData && !gameOver;
	const getCurrentCategoryIndex = () => {
		if (imageData) {
			return imageData.findIndex((obj) => obj.category === currentCategory);
		}
		return -1;
	};
	const resetGame = () => {
		GetImageData(setImageData);
		setCurrentLevel(1);
		setCurrentCategory(null);
		setCurrentScore(0);
		setGameOver(false);
	};

	// State setters
	function incrementCurrentScore() {
		setCurrentScore((prevCurrentScore) => prevCurrentScore + 1);
	}

	// Variables
	const losingString = `Uh-oh! That image seems familiar. You've clicked it before! Remember, in
	this game, every click counts. It's Game Over for now, but keep trying
	and improve your memory!`;

	const winningString = `Congratulations, you won! Your brain must be huuuge!`;

	return (
		<div className='App'>
			{gameOver ? (
				<GameOverModal
					resetGame={resetGame}
					text={currentScore === 28 ? winningString : losingString}
				/>
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
