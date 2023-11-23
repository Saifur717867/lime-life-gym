import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper h-[750px]"
            >
                <SwiperSlide><img className='rounded-lg h-full w-full' src="https://i.ibb.co/7JRmSWJ/slide-3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg h-full w-full' src="https://i.ibb.co/v1rL7gq/mercedes-slide-3.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img className='rounded-lg h-full w-full' src="https://i.ibb.co/61txJy0/mercedes-slide-1.jpg" alt="" /></SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Slider;