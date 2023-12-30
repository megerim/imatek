"use client";
import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Logo from '@/public/images/hero-image-01.jpeg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/app/css/additional-styles/swiper.css';


export default function App() {
  return (
    <>
    <Swiper
      className="mySwiper swiper-h max-h-60"
      spaceBetween={50}
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide>Horizontal <Image src={Logo} alt='logo' /> </SwiperSlide>
      <SwiperSlide>
        <Swiper
          className="mySwiper2 swiper-v"
          direction={'vertical'}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>Vertical <Image src={Logo} alt='logo' /> </SwiperSlide>
          <SwiperSlide>Vertical <Image src={Logo} alt='logo' /> </SwiperSlide>
          <SwiperSlide>Vertical <Image src={Logo} alt='logo' /> </SwiperSlide>
          <SwiperSlide>Vertical <Image src={Logo} alt='logo' /> </SwiperSlide>
          <SwiperSlide>Vertical <Image src={Logo} alt='logo' /> </SwiperSlide>
        </Swiper>
      </SwiperSlide>
      <SwiperSlide>Horizontal <Image src={Logo} alt='logo' /> </SwiperSlide>
      <SwiperSlide>Horizontal <Image src={Logo} alt='logo' /> </SwiperSlide>
    </Swiper>
  </>
  );
}
