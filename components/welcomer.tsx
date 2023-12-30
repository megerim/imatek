"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Logo from "@/public/images/logo.jpg";
import Image from "next/image";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export default () => {
  return (
    <Swiper
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    navigation={true}
    slidesPerView={1} // Default to 1 for mobile
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 150,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
    className="mySwiper"
    autoplay={{
      delay: 1500,
      disableOnInteraction: true, // Continue autoplay when user interacts
    }}

    breakpoints={{
      768: {
        slidesPerView: 3, // Show 3 slides on desktop
      }
    }}
  >
        <SwiperSlide>
          <Image src={Logo} width={600} height={600} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Logo} width={600} height={600} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Logo} width={600} height={600} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Logo} width={600} height={600} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Logo} width={600} height={600} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Logo} width={600} height={600} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Logo} width={600} height={600} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Logo} width={600} height={600} alt="Logo" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={Logo} width={600} height={600} alt="Logo" />
        </SwiperSlide>
      </Swiper>
  );
};
