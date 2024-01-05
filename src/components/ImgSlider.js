// import React from 'react';
// import Link from 'next/Link';
import Image from "next/Image";
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

//rafec

const ImgSlider = () => {
  const homePageSmallImg1 = {
    margin: "20px 100px 50px 60px",
  };

  const homePageSmallImg = {
    margin: "0 100px 50px 0",
  };
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Image
        data-aos="slide-up"
        style={homePageSmallImg1}
        src="/img/ph-removebg-preview.png"
        alt="Image not found"
        width={150}
        height={150}
      ></Image>
      <Image
        data-aos="slide-up"
        style={homePageSmallImg}
        src="/img/code-removebg-preview.png"
        alt="Image not found"
        width={150}
        height={150}
      ></Image>
      <Image
        data-aos="slide-up"
        style={homePageSmallImg}
        src="/img/calculator-removebg-preview.png"
        alt="Image not found"
        width={150}
        height={150}
      ></Image>
      <Image
        data-aos="slide-up"
        style={homePageSmallImg}
        src="/img/folder.png"
        alt="Image not found"
        width={150}
        height={150}
      ></Image>
      <Image
        data-aos="slide-up"
        style={homePageSmallImg}
        src="/img/www.png"
        alt="Image not found"
        width={150}
        height={150}
      ></Image>
    </>
  );
};

export default ImgSlider;
