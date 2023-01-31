import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Container} from 'react-bootstrap'
import airtel from '../../assets/images/logo-airtel.png'
import banglalink from '../../assets/images/logo-banglalink.png'
import gp from '../../assets/images/logo-grameenphone.png'
import telitok from '../../assets/images/logo-teletalk.png'
import nextlink from '../../assets/images/logo-nextonline.png'
import robi from '../../assets/images/logo-robi.png'
export const ClientSlider = () =>  {
        var settings = {
          dots: false,
          infinite: false,
          autoplay: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 5,
          initialSlide: 0,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        };

  return (
    <>
        <section className='client-slider'>
            <Container>
            <h4 className='text-center mb-5'> BUSINESS PARTNER </h4>
            <Slider {...settings}>
            
            <div>
            <img src={airtel} alt="" />
            </div>
            <div>
            <img src={banglalink} alt="" />
            </div>
            <div>
            <img src={gp} alt="" />
            </div>
            <div>
            <img src={telitok} alt="" />
            </div>
            <div>
            <img src={nextlink} alt="" />
            </div>
            <div>
            <img src={robi} alt="" />
            </div>
            
            </Slider>
        </Container>
        </section>
    </>
  )
}
