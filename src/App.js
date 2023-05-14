import { useState, useEffect } from 'react';

import Cards from './Components/Cards';
import GameInfo from './Components/GameInfo';
import SelectCategory from './Components/SelectCategory';
import GetImageData from './Components/GetImageData';

import './Styles/App.css';

function App() {
	// States
	const [imageData, setImageData] = useState(null);
	const [currentLevel, setCurrentLevel] = useState(1);
	const [currentCategory, setCurrentCategory] = useState(null);
	const [currentScore, setCurrentScore] = useState(0);
	const [highScore, setHighScore] = useState(0);

	// Hooks
	useEffect(() => {
		GetImageData(setImageData);
	}, []);

	// Utility Functions
	const levelImageCount = () => currentLevel * 2 + 2;
	const isValid = () => currentCategory && imageData;
	const getCurrentCategoryIndex = () => {
		if (imageData) {
			return imageData.findIndex((obj) => obj.category === currentCategory);
		}
		return -1;
	};

	return (
		<div className='App'>
			{isValid() ? (
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
