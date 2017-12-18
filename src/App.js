import React, { Component } from 'react';
import './App.css';
import { Col } from 'react-bootstrap';

import eventData from './api/event_data.js';
import ImageCarousel from './components/image_carousel.js';
import ZoomedImage from './components/zoomed_image.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: {},
      selectedImage: []
    };
  }

  loadData(){
    this.setState({data: eventData}, function(){
      // TODO: need to figure out how to render first object
      this.setState({selectedImage: eventData })
    });
  }

  componentDidMount(){
    this.loadData()
  }

  render() {
    return (
      <div className="App">
         <Col mdOffset={3} md={6}>
          <ZoomedImage image={this.state.selectedImage} />
         </Col>

         <Col mdOffset={2} md={8}>
          <ImageCarousel 
            className="Slider" 
            videoData={this.state.data.events} 
            onImageSelect={selectedImage => this.setState({selectedImage}) }
            />
        </Col>

        <br /><br /><br />
        <Col>
          SelectedImage: {this.state.selectedImage.videoStream}
        </Col>
      </div>
    );
  }
}

export default App;