import React from 'react';

const CarouselListItem = ({ data, onImageSelect }) => {
	// console.log("Image link: " + JSON.stringify(data))
	return(
		<img 
			src={data.imageSource} 
			alt={data.videoStream}
			width="200"
			height="200"
			onClick= {() => onImageSelect(data)}
			 />
	);
}

export default CarouselListItem;