import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/styles/slick-slider.css"
import image1 from "../assets/images/img-1.webp"
import image2 from "../assets/images/img-2.webp"
import image3 from "../assets/images/img-3.webp"
import image4 from "../assets/images/img-4.webp"


export default function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    // nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
    autoplay: true,
    speed: 500
  };
  return (
    <Slider {...settings} className="slider_btn">
      <div className="slider">
        <div className="slider-inner">
          <div className="inner-1 flex_column">
            <h3>Mission Mangal</h3>
            <h4>Hindi ~ Drama ~ 2019</h4>
            <p>Based on the true story of India's finest scientists who rose above hardships and failures
               to make us the only country to reach Mars in its first attempt.</p>
            <div className="inner-gradient"></div>
          </div>
          
          <div className="inner-3">
            <img src={image1} alt="Movie Poster" />
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="slider-inner">
          <div className="inner-1 flex_column">
            <h3>Brahmastra Part One: Shiva</h3>
            <h4>Fantasy ~ 2022</h4>
            <p>A journey of fantasy, action and romance comes to life as Shiva enters the Astraverse! 
              He discovers true love and also, the power of fire within him.</p>
            <div className="inner-gradient">
            </div>
          </div>
          <div className="inner-3">
            <img src={image2} alt="Movie Poster" />
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="slider-inner">
          <div className="inner-1 flex_column">
            <h3>Criminal Justice: Adhura Sach</h3>
            <h4>Hotstar Specials ~ Crime</h4>
            <p>When a teenage star's brother becomes the prime suspect in her murder, Madhav Mishra takes
               the case, only to realise he has to first tackle his client's lies.</p>
            <div className="inner-gradient">
            </div>
          </div>
          <div className="inner-3">
            <img src={image3} alt="Movie Poster" />
          </div>
        </div>
      </div>
      <div className="slider">
        <div className="slider-inner">
          <div className="inner-1 flex_column">
            <h3>Neeya Naana</h3>
            <h4>Star Vijay ~ Tamil ~ Talk Show</h4>
            <p>A talk show where two polarised groups of society are given the platform to share their views 
              and see a different perspective on socially-relevant topics.</p>
            <div className="inner-gradient">
            </div>
          </div>
          <div className="inner-3">
            <img src={image4} alt="Movie Poster" />
          </div>
        </div>
      </div>
    </Slider>
  );
}