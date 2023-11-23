
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import imgCover from '../../../images/home/slide1.jpg';
// import imgCover2 from '../../../images/home/slide2.jpg';
// import imgCover3 from '../../../images/home/slide3.jpg';
// import imgCover4 from '../../../images/home/slide4.jpg';
// import imgCover5 from '../../../images/home/slide5.jpg';


const MultiSlider = () => {


    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                autoplay={true}
                pagination={{
                    clickable: true,
                }}
            >
                <SwiperSlide><img src={imgCover} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imgCover2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imgCover3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imgCover4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={imgCover5} alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default MultiSlider;