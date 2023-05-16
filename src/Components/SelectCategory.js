import React from 'react';

import CategoryCard from './CategoryCard';

import '../Styles/SelectCategory.css';

export default function SelectCategory(props) {
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
					setCurrentCategory={props.setCurrentCategory}
				/>
				<CategoryCard
					url={landmarkURL}
					name={'Landmarks'}
					setCurrentCategory={props.setCurrentCategory}
				/>
				<CategoryCard
					url={gamesURL}
					name={'Games'}
					setCurrentCategory={props.setCurrentCategory}
				/>
				<CategoryCard
					url={sportsURL}
					name={'Sports'}
					setCurrentCategory={props.setCurrentCategory}
				/>
				<CategoryCard
					url={technologyURL}
					name={'Technology'}
					setCurrentCategory={props.setCurrentCategory}
				/>
				<CategoryCard
					url={flowersURL}
					name={'Flowers'}
					setCurrentCategory={props.setCurrentCategory}
				/>
			</div>
			<div className='how-to-play'>
				<span>Gameplay Instructions</span>
				<br></br>{' '}
				<p>
					Choose a category as your theme for the entire game. Progress through
					each level by clicking on the unique images. However, avoid clicking
					on any image more than once, as it will result in a loss. Note that
					the images will reorganize themselves after each click.
				</p>
			</div>
			<div className='scoring-instructions'>
				<span>Scoring</span>
				<br></br>{' '}
				<p>
					Gain 1 point by clicking an image that has not already been clicked.
					Gain 3 points for completing a level.
				</p>
			</div>
		</div>
	);
}
