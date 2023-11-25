import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slideImage1 from '../../../images/slide-1.jpg';
import slideImage2 from '../../../images/slide-3.jpg';
import slideImage3 from '../../../images/slide-4.jpg';
import { Link } from 'react-router-dom';

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
                <SwiperSlide style={{
            'backgroundImage':
              `url(${slideImage2})`, backgroundRepeat:"no-repeat",
              backgroundSize:"cover",
          }}>
                    <div className='flex justify-start items-center h-[800px] text-white bg-black bg-opacity-70'>
                    <div className='w-2/3 mx-auto absolute top-[40%] left-[10%] space-y-6'>
                        <h2 className='text-6xl font-bold'>Awaken to a healthier, <br />happier you</h2>
                        <p>Discover a world of in-person and virtual fitness, wellness, and beauty services.</p>
                        <Link to='/classes'><button className='btn bg-[#51FF04] text-black hover:text-white mt-4'>Learn More</button></Link>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{
            'backgroundImage':
            `url(${slideImage1})`, backgroundRepeat:"no-repeat",
              backgroundSize:"cover",
          }}>
                    <div className='flex justify-start items-center h-[800px] text-white bg-black bg-opacity-70'>
                    <div className='w-2/3 mx-auto absolute top-[40%] left-[10%] space-y-6'>
                        <h2 className='text-6xl font-bold'>Awaken to a healthier, <br />happier you</h2>
                        <p>Discover a world of in-person and virtual fitness, wellness, and beauty services.</p>
                        <Link to='/classes'><button className='btn bg-[#51FF04] text-black hover:text-white mt-4'>Learn More</button></Link>
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide style={{
            'backgroundImage':
            `url(${slideImage3})`, 
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
          }}>
                    <div className='flex justify-start items-center h-[800px] text-white bg-black bg-opacity-70'>
                    <div className='w-2/3 mx-auto absolute top-[40%] left-[10%] space-y-6'>
                        <h2 className='text-6xl font-bold'>Awaken to a healthier, <br />happier you</h2>
                        <p>Discover a world of in-person and virtual fitness, wellness, and beauty services.</p>
                        <Link to='/classes'><button className='btn bg-[#51FF04] text-black hover:text-white mt-4'>Learn More</button></Link>
                    </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>

        </div>
    );
};

export default Slider;