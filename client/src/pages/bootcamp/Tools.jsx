import React from 'react'

//swiper js
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ToolsData } from '../../api/bootcamp/Bootcamp';


const Tools = () => {
    
    return (
        <section className='w-[100%] py-[90px]'>
            <div className='w-[100%] text-center'>
                <h1 className='text-orange font-bold text-[30px] md:text-[48px] '>
                    TOOLS COVERED
                </h1>
            </div>
            <Swiper
                className='z-0'
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    992: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 5,
                    }
                }}
            >
                {
                    ToolsData.map((src, i) => (
                        <SwiperSlide key={i} className="flex justify-center items-center">
                            <img className='w-[80%]' src={src} alt="image" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

export default Tools