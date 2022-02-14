import { Wrapper, SliderItem, SliderItem2 } from "./layoutBanner.styles";
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
          <SliderItem2 />
          {/* <SliderItem src={"/image/banner/01.jpg"} /> */}
        </div>
        <div>
          <SliderItem2 />
          {/* <SliderItem src={"/image/banner/02.jpg"} /> */}
        </div>
        <div>
          <SliderItem2 />
          {/* <SliderItem src={"/image/banner/04.jpg"} /> */}
        </div>
      </Slider>
    </Wrapper>
  );
}
