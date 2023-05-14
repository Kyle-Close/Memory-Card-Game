import { useState, useEffect } from 'react';
import '../Styles/Card.css';

export default function Cards(props) {
	const [clickedImages, setClickedImages] = useState(new Set());
	const [levelImages, setLevelImages] = useState([]);

	function randomizeImages(array) {
		let currentIndex = array.length,
			temporaryValue,
			randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	function handleClick(image) {
		return () => {
			if (!clickedImages.has(image.url)) {
				// Check if the image URL has already been clicked
				props.incrementCurrentScore();
				let newClickedImages = new Set(clickedImages);
				newClickedImages.add(image.url); // Add the image URL to the set of clicked images
				setClickedImages(newClickedImages);
			} else {
				console.log('Already Clicked');
				// Already clicked. End game
				props.setGameOver(true);
			}
		};
	}

	useEffect(() => {
		if (props.images) {
			const getStartIndex = () => {
				if (props.currentLevel === 1) return 0;
				else if (props.currentLevel === 2) return 4;
				else if (props.currentLevel === 3) return 10;
				else if (props.currentLevel === 4) return 18;
			};

			const getEndIndex = () => {
				if (props.currentLevel === 1) return 3;
				else if (props.currentLevel === 2) return 9;
				else if (props.currentLevel === 3) return 17;
				else if (props.currentLevel === 4) return 27;
			};

			const start = getStartIndex();
			const end = getEndIndex();
			const levelImagesArray = props.images.images.slice(start, end + 1);
			console.log(levelImagesArray);
			const levelImagesRandomized = randomizeImages(levelImagesArray);
			console.log(levelImagesRandomized);

			setLevelImages(
				levelImagesRandomized.map((image, index) => (
					<img
						onClick={handleClick(image)}
						key={index}
						className='image'
						src={image.url}
						alt={image.alt}
					/>
				))
			);
		}
	}, [props.images, props.currentLevel, clickedImages]);

	const columns = () => {
		if (props.currentLevel === 1) return 4;
		else if (props.currentLevel === 2) return 3;
		else if (props.currentLevel === 3) return 4;
		else if (props.currentLevel === 4) return 5;
	};

	const rows = () => {
		if (props.currentLevel === 1) return 1;
		else return 2;
	};

	const styles = {
		gridTemplateColumns: `repeat(${columns()}, 300px)`,
		gridTemplateRows: `repeat(${rows()}, 300px)`,
	};

	return (
		<div
			className='card-container'
			style={styles}
		>
			{levelImages}
		</div>
	);
}
