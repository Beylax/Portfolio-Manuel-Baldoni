import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Skill from './skill';
import SlideIn from './slide-in';
import DropDown from './drop-down';
import { skills } from '../lib/utils';
import { useEffect, useState } from 'react';

export default function SwiperSkill() {
    return (
        <Swiper
            className='w-[90%] !overflow-visible'
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1.8}
            freeMode={true}
            breakpoints={{
                768: {
                    slidesPerView: 2.4
                },
                986: {
                    slidesPerView: 3.4
                },
                1024: {
                    slidesPerView: 4.4
                },
                1200: {
                    slidesPerView: 5.4
                }
            }}
        >
            {
                skills?.map((skill, i) => {
                    return (
                        <SwiperSlide>
                            <DropDown delay={i*200}>
                                <Skill img_name={skill?.image_name} title={skill?.title} link={skill?.link}></Skill>
                            </DropDown>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}