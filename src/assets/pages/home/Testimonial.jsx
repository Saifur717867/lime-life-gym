import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import useReviews from '../../hook/reviews/useReviews';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
  const [reviews] = useReviews();
  // console.log(reviews)
    return (
        <div className='w-[85%] mx-auto text-center mb-10'>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" autoplay='true'>
        <div className='py-10 text-center'>
        {
          reviews.map(review => <SwiperSlide
             key={review._id}>
              <div className='text-center flex justify-center'>
              <Rating style={{ maxWidth: 200 }} value={review.rating} />
              </div>
              <div className='w-2/3 mx-auto py-6'>
              <p>{review.details}</p>
              </div>
              <p className='text-2xl text-orange-600'>{review.name}</p>
              </SwiperSlide>)
        }
        </div>
      </Swiper>
    </div>
    );
};

export default Testimonial;