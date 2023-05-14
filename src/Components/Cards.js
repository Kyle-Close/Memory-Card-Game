import { useState, useEffect } from 'react';
import '../Styles/Card.css';

export default function Cards(props) {
	console.log(props.images);
	let images;
	if (props.images) {
		images = props.images.images.map((image) => {
			return (
				<img
					className='image'
					src={image.url}
					alt={image.alt}
				></img>
			);
		});

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
		const levelImages = images.slice(start, end + 1);

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
		images = (
			<div
				className='card-container'
				style={styles}
			>
				{levelImages}
			</div>
		);
	}
	return <>{images}</>;
}
