import React from 'react';

import CategoryCard from './CategoryCard';

import '../Styles/SelectCategory.css';

export default function SelectCategory() {
	return (
		<div className='select-category'>
			<CategoryCard />
			<CategoryCard />
			<CategoryCard />
			<CategoryCard />
			<CategoryCard />
			<CategoryCard />
		</div>
	);
}
