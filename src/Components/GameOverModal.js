import React, { useState } from 'react';

import '../Styles/GameOverModal.css';

export default function GameOverModal() {
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
		boxShadow: '0px 0px 30px 10px rgba(255, 0, 0, 0.5)',
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
			<p>
				Uh-oh! That image seems familiar. You've clicked it before! Remember, in
				this game, every click counts. It's Game Over for now, but keep trying
				and improve your memory!
			</p>
			<button className='game-over-button'>Play Again</button>
		</div>
	);
}
