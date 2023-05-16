import React, { useState } from 'react';

import '../Styles/GameOverModal.css';

export default function GameOverModal(props) {
	const isWinner = () => {
		if (props.text.startsWith('Congratulations')) return true;
		else return false;
	};
	const boxShadowColor = isWinner()
		? '0px 0px 30px 10px rgba(0, 255, 0, 0.5)'
		: '0px 0px 30px 10px rgba(255, 0, 0, 0.5)';
	const modalStyle = {
		position: 'fixed',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: '1000',
		backgroundColor: '#1f2937',
		width: '40%',
		height: '25%',
		borderRadius: '8px',
		boxShadow: boxShadowColor,
		color: 'white',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		padding: '60px',
		fontSize: '22px',
		// Add other styles like padding, background-color, etc.
	};

	return (
		<div style={modalStyle}>
			<p>{props.text}</p>
			<button
				onClick={props.resetGame}
				className='game-over-button'
			>
				Play Again
			</button>
		</div>
	);
}
