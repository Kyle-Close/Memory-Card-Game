import { searchUnsplashPhotos } from '../APIs/Unsplash';

export default async function GetImageData(setImageData) {
	const categoryArr = [
		'Dogs',
		'Landmarks',
		'Games',
		'Sports',
		'Technology',
		'Flowers',
	];

	const promises = categoryArr.map((categoryName) => {
		const randomPage = Math.floor(Math.random() * 20) + 1;

		return searchUnsplashPhotos(categoryName, randomPage, 28).then(
			(response) => {
				let imagesArray = [];

				if (response && response.results && response.results.length > 0) {
					imagesArray = response.results.map((image) => {
						return {
							alt: image.alt_description,
							url: image.urls.small,
						};
					});
				}

				const categoryObject = {
					category: categoryName,
					images: imagesArray,
				};

				return categoryObject;
			}
		);
	});

	Promise.all(promises).then((allImageData) => setImageData(allImageData));
}
