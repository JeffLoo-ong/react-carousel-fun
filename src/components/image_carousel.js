import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import CarouselListItem from './carousel_list_item.js'


const ImageCarousel = (props) => {
    if(!props.videoData){
      return(<div>Loading...</div>);
    }
    const imageItems = props.videoData.map((data) => {
      // console.log(data.timestamp + " *** " + data.imageSource);
      // TODO: Fix unique key issue 
      return(
        <div>
          <CarouselListItem
            onImageSelect={props.onImageSelect}
            data={data} 
            key={data.timestamp}
            />
        </div>        
      )
    });

    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      prevLabel: 'Previous',
      nextLabel: 'Next'
    };
    
    return(
      <div>
      <Slider {...settings} >
        {imageItems}
      </Slider>
      </div>
    );
}

export default ImageCarousel;