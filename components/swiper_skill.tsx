import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Skill from './skill';
import SlideIn from './slide-in';
import DropDown from './drop-down';
import { ISkill, skills } from '../lib/utils';
import { useEffect, useState } from 'react';

export default function SwiperSkill() {
    return (
        <Swiper
            className='w-[90%] !overflow-visible'
            modules={[Autoplay]}
            spaceBetween={50}
            freeMode={true}
            slidesPerView={1.8}
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
                skills?.map((skill: ISkill, i) => {
                    return (
                        <SwiperSlide>
                            <DropDown delay={0}>
                                <Skill image_name={skill?.image_name} title={skill?.title} link={skill?.link}></Skill>
                            </DropDown>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}