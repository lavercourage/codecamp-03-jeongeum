import {
  Wrapper,
  SliderItem1,
  SliderItem2,
  SliderItem3,
} from "./LayoutBanner.styles";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem1 />
        </div>
        <div>
          <SliderItem2 />
        </div>
        <div>
          <SliderItem3 />
        </div>
        {/* <div>
          <SliderItem4 />
        </div>
        <div>
          <SliderItem5 />
        </div> */}
      </Slider>
    </Wrapper>
  );
}
