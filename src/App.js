import { useState, useEffect } from 'react';
import { searchUnsplashPhotos } from './APIs/Unsplash';

import Cards from './Components/Cards';
import GameInfo from './Components/GameInfo';
import SelectCategory from './Components/SelectCategory';

import './Styles/App.css';

function App() {
	// IDEA - On page load use the API call to get ALL images in one go.
	//        Need 28 images per category to cover all levels.

	const [imageData, setImageData] = useState(null);
	const [currentLevel, setCurrentLevel] = useState(1);
	const [currentCategory, setCurrentCategory] = useState(null);
	const [highScore, setHighScore] = useState(null);

	const levelImageCount = () => {
		if (currentLevel === 1) return 4;
		else if (currentLevel === 2) return 6;
		else if (currentLevel === 3) return 8;
		else if (currentLevel === 4) return 10;
	};

	useEffect(() => {
		const categoryArr = [
			'Dogs',
			'Landmarks',
			'Games',
			'Sports',
			'Technology',
			'Flowers',
		];

		const promises = categoryArr.map((categoryName) => {
			const randomPage = Math.floor(Math.random() * 20) + 1;

			return searchUnsplashPhotos(categoryName, randomPage, 28).then(
				(response) => {
					console.log(response);
					let imagesArray = [];

					if (response && response.results && response.results.length > 0) {
						imagesArray = response.results.map((image) => {
							return {
								alt: image.alt_description,
								url: image.urls.small,
							};
						});
					}

					const categoryObject = {
						category: categoryName,
						images: imagesArray,
					};

					return categoryObject;
				}
			);
		});

		Promise.all(promises).then((allImageData) => setImageData(allImageData));
	}, []);

	const isValid = () => {
		if (currentCategory && imageData) return true;
		return false;
	};

	let index;
	if (imageData)
		index = imageData.findIndex((obj) => obj.category === currentCategory);

	return (
		<div className='App'>
			{isValid() ? (
				<div className='info-cards-section'>
					<GameInfo
						currentLevel={currentLevel}
						currentCategory={currentCategory}
						highScore={highScore}
					/>
					<Cards
						images={imageData[index]}
						currentLevel={currentLevel}
					/>
				</div>
			) : (
				imageData && <SelectCategory imageData={imageData} />
			)}
		</div>
	);
}

export default App;
