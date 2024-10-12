import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../../styled/swiper/swiper.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="https://www.learnhist.com.tr/resimler/Ataturk/ataturk-slider.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.learnhist.com.tr/resimler/Ataturk/TurkTarihi.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.learnhist.com.tr/resimler/Ataturk/Tarih.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.learnhist.com.tr/IMG/Mitoloji/Din-foto-1.jpeg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.learnhist.com.tr/IMG/Bilim/bilim.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.learnhist.com.tr/IMG/Evrim/evrim.jpg" />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
