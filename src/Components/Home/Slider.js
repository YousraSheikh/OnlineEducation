import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import pic1 from "../../Assests/online education.jpg";
import pic2 from "../../Assests/cloudcomputing.jpg";
import pic3 from "../../Assests/SEO.png";
import pic4 from "../../Assests/graphic-design.jpg";

const Slider = () => {
  return (
    <>
      <Carousel
        autoPlay
        emulateTouch={true}
        infiniteLoop={true}
        interval={2000}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
      >
        <div>
          <img src={pic1} className="md:h-[450px] h-[230px]" alt="slider pic" />
          <p className="legend font-bold italic text-[25px]" id="slider_legend">
            Learn online computer science course 
          </p>
        </div>
        <div>
          <img src={pic2} className="md:h-[450px] h-[230px]" alt="slider pic" />
          <p className="legend font-bold italic text-[25px]" id="slider_legend">
            Cloud Computing
          </p>
        </div>
        <div>
          <img src={pic3} className="md:h-[450px] h-[230px]" alt="slider pic" />
          <p className="legend font-bold italic text-[25px]" id="slider_legend">
            Introduction to SEO
          </p>
        </div>
        <div>
          <img src={pic4} className="md:h-[450px] h-[230px]" alt="slider pic" />
          <p className="legend font-bold italic text-[25px]" id="slider_legend">
            Introduction to graphics designing
          </p>
        </div>
      </Carousel>
    </>
  );
};
export default Slider;
