import React, {useState} from 'react'
import {Carousel} from 'react-bootstrap'
import Slider1 from '../../assets/images/Sliderimg/slider02.png'
import Slider2 from '../../assets/images/Sliderimg/slider03.png'



export default function Slider() {



  return (
    <>
 <Carousel fade>
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
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
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
            <Carousel.Caption>
            <h1>Impel Service & Solutions Ltd.</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Slider1}
            alt="Third slide"
          />

          <div className="SliderOverlay">  
            <Carousel.Caption>
            <h1>Impel Service & Solutions Ltd.</h1>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </div>
          
        </Carousel.Item>
      </Carousel>
        </>
  )
}
