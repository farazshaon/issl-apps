import React, {useState} from 'react'
import {Carousel} from 'react-bootstrap'
import Slider01 from '../../assets/images/Sliderimg/slider01.png'
import Slider02 from '../../assets/images/Sliderimg/slider02.png'
import Slider03 from '../../assets/images/Sliderimg/slider03.png'
import SliderImages from './SliderImages'


export default function Slider() {

    const [img, setImg] = useState(SliderImages)

  return (
    <>
    <Carousel>
        {img.map((sliderImg, index) => (
      <Carousel.Item key={index}>
        <img
        className="d-block w-100"
        src={sliderImg.src}
        alt="First slide"
        />
  
  </Carousel.Item>

        ))}
        {/* <Carousel.Item>
            <img
            className="d-block w-100"
            src={Slider02}
            alt="Second slide"
            />

    
        </Carousel.Item> */}
        {/* <Carousel.Item>
            <img
            className="d-block w-100"
            src={Slider03}
            alt="Third slide"
            />

        
        </Carousel.Item> */}
        </Carousel>
        </>
  )
}
