import './body.css'
import './carousel.jsx'

import React, { useState, useEffect } from 'react'


// import './style.js'




import SimpleSlider from './carousel';



const Body = () => {


  return (
    <div className="body">
      <div className="carouselcss">

        <SimpleSlider></SimpleSlider>

      </div>
      <div className="banner">
        <div className="banner_title">
          <a href="">HOT TREND 2020</a>
        </div>
        <div className="banner_anh">
          <img src="https://vascara-store.herokuapp.com/static/media/banner-gif.b3c92793.gif" alt=""/>    
          
        </div>
      </div>
      <div className="product">
        <div className="product_title">
          <a href="">SẢN PHẨN MỚI NHẤT</a>
        </div>
        <div className="product_show">

        </div>
      </div>
      <div className="khuyenmai">

      </div>
    </div>
      
    
  )
   


}

export default Body;


