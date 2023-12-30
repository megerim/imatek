"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import Logo from '@/public/images/logo.jpg'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide> <Image src={Logo} width={600} height={600} alt='Logo'/> </SwiperSlide>
      <SwiperSlide><Image src={Logo} width={600} height={600} alt='Logo'/></SwiperSlide>
      <SwiperSlide><Image src={Logo} width={600} height={600} alt='Logo'/></SwiperSlide>
      <SwiperSlide><Image src={Logo} width={600} height={600} alt='Logo'/></SwiperSlide>
      ...
    </Swiper>
  );
};