import React, { Component } from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div >
        
        <Slider {...settings}>
          <div>
            <h3>
              <img src="https://cdn2.thecatapi.com/images/ck2.jpg" alt=""/>
            </h3>
          </div>
          <div>
            <h3>
              <img src="https://cdn2.thecatapi.com/images/dp8.jpg" alt=""/>
            </h3>
          </div>
          <div>
            <h3>
              <img src="https://cdn2.thecatapi.com/images/ckc.jpg" alt=""/>
            </h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}