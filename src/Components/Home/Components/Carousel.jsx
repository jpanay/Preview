import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class HomeCarousel extends Component {
  // Get A Free Analysis From Our NYC Rental Expert
  // Rent Estimator
  // Take Our Perfect Fit Quiz
  // 
    render() {
        return (
          <div id="carousel-wrapper">
            <Carousel 
              infiniteLoop={true} 
              autoPlay={true} 
              interval={5000}
              labels={{leftArrow: 'previous slide / item', rightArrow: 'next slide / item', item: 'slide item'}}
              showThumbs={false}
              centerMode={true}
              centerSlidePercentage={80}
              // thumbWidth={200}
              width={'100%'}
              emulateTouch="true"
            >
                <div>
                    <img src="slide1.png" className="carousel-img" />
                    <div className="legend">
                      <div className="legend-label">Take Our Perfect Fit Quiz</div>
                      <div className="legend-btn">Take Our Perfect Fit Quiz</div>
                    </div>
                </div>
                <div>
                    <img src="slide2.png" className="carousel-img" />
                    <p className="legend">Are you overpaying for rent?</p>
                </div>
                <div>
                    <img src="slide3.png" className="carousel-img" />
                    <p className="legend">Rent Estimator</p>
                </div>
            </Carousel>
          </div>
        );
    }
}

export default HomeCarousel;


