import React from 'react';

const ZoomedImage = ({image}) => {
	return(
		<div>
			<img src={image.imageSource} alt={image.videoStream} />
		</div>
	);
}

export default ZoomedImage;