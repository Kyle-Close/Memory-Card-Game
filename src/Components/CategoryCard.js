import React from 'react';

import '../Styles/CategoryCard.css';

export default function CategoryCard(props) {
	return (
		<div
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
