import React from 'react';

import '../Styles/CategoryCard.css';

export default function CategoryCard(props) {
	function handleClick() {
		props.setCurrentCategory(props.name);
	}
	return (
		<div
			onClick={handleClick}
			className='category-card'
			style={{
				backgroundImage: `url(${props.url})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		>
			<div className='category-title'>{props.name}</div>
		</div>
	);
}
