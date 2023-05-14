import React from 'react';

import CategoryCard from './CategoryCard';

import '../Styles/SelectCategory.css';

export default function SelectCategory(props) {
	console.log(props.imageData);
	const dogURL = props.imageData[0].images[0].url;
	const landmarkURL = props.imageData[1].images[0].url;
	const gamesURL = props.imageData[2].images[0].url;
	const sportsURL = props.imageData[3].images[0].url;
	const technologyURL = props.imageData[4].images[0].url;
	const flowersURL = props.imageData[5].images[0].url;
	return (
		<div className='start-game'>
			<div className='game-name-header'>Memory Mix-Up</div>
			<div className='select-category'>
				<CategoryCard
					url={dogURL}
					name={'Dogs'}
				/>
				<CategoryCard
					url={landmarkURL}
					name={'Landmarks'}
				/>
				<CategoryCard
					url={gamesURL}
					name={'Games'}
				/>
				<CategoryCard
					url={sportsURL}
					name={'Sports'}
				/>
				<CategoryCard
					url={technologyURL}
					name={'Technology'}
				/>
				<CategoryCard
					url={flowersURL}
					name={'Flowers'}
				/>
			</div>
			<div className='how-to-play'>How to play:</div>
		</div>
	);
}
