import React from 'react';

import '../Styles/GameInfo.css';

export default function GameInfo(props) {
	return (
		<>
			<div className='game-info game-info-top'>
				<div className='high-score'>
					<div className='top'>Highscore</div>
					<div className='bot'>{props.highScore}</div>
				</div>
			</div>
			<div className='game-info game-info-bottom'>
				<div className='current-level'>
					<div className='top'>Current Level</div>
					<div className='bot'>{props.currentLevel}</div>
				</div>
				<div className='current-category'>
					<div className='top'>Current Category</div>
					<div className='bot'>{props.currentCategory}</div>
				</div>
				<div className='current-score'>
					<div className='top'>Current Score</div>
					<div className='bot'>{props.currentScore}</div>
				</div>
			</div>
		</>
	);
}
