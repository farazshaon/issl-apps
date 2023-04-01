import React, {useState} from 'react'
import {Carousel} from 'react-bootstrap'
import Slider0 from '../../assets/images/Sliderimg/header-slider-0.jpg'
import Slider1 from '../../assets/images/Sliderimg/header-slider-1.jpg'
import Slider2 from '../../assets/images/Sliderimg/header-slider-2.jpg'
import Slider3 from '../../assets/images/Sliderimg/header-slider-3.jpg'
import Slider4 from '../../assets/images/Sliderimg/header-slider-4.jpg'
import Slider5 from '../../assets/images/Sliderimg/header-slider-5.jpg'
import Slider6 from '../../assets/images/Sliderimg/header-slider-6.jpg'
import Slider7 from '../../assets/images/Sliderimg/header-slider-7.jpg'
import Slider8 from '../../assets/images/Sliderimg/header-slider-8.jpg'



export default function Slider() {



  return (
    <>
 <Carousel fade>
 <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider0}
            alt="Third slide"
          />

          <div className="SliderOverlay">  
           
          </div>
          
        </Carousel.Item>
      <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider1}
            alt="First slide"
          />

          <div className="SliderOverlay">  
            <Carousel.Caption>
              <h1>Impel Service & Solutions Ltd.</h1>
              <p>
              You trusted service partner
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider2}
            alt="Second slide"
          />
           <div className="SliderOverlay">  
           
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider3}
            alt="Third slide"
          />

          <div className="SliderOverlay">  
           
          </div>
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider4}
            alt="Third slide"
          />

          <div className="SliderOverlay">  
            
          </div>
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider5}
            alt="Third slide"
          />

          <div className="SliderOverlay">  
            
          </div>
          
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider6}
            alt="Third slide"
          />

          <div className="SliderOverlay">  
           
          </div>
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider7}
            alt="Third slide"
          />

          <div className="SliderOverlay">  
           
          </div>
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider8}
            alt="Third slide"
          />

          <div className="SliderOverlay">  
        
          </div>
          
        </Carousel.Item>
      </Carousel>
        </>
  )
}
