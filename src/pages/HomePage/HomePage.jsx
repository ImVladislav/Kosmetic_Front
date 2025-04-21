import React from "react";
import Slider from "../../components/Slider/Slider.jsx";
import Hero from "../../components/Hero/HeroTrimay/Hero.jsx";
import CategoryList from "../../components/CategoryList/CategoryList.jsx";
import AboutUs from "../../components/AboutUs/AboutUs.jsx";
import SliderList from "../../components/SwiperSlider/SliderList/SliderList.jsx";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <SliderList title="товари зі зниженною ціною" sale />
      <SliderList title="нове постачання" newness />
      {/* <Slider title="товари зі зниженною ціною" sale /> */}
      {/* <Slider title="нове постачання" newness /> */}
      <div id="category">
        <CategoryList />
      </div>
      <AboutUs />
    </div>
  );
};

export default HomePage;
