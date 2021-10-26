import {
  Wrapper,
  SliderItem1,
  SliderItem2,
  SliderItem3,
} from "./layoutBanner.styles";
import React from "react";
import Slider from "@ant-design/react-slick";

export default function LayoutBannerUI() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 8,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
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
