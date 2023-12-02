import { Swiper, SwiperProps, SwiperRef, SwiperSlide, SwiperSlideProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { ISkill, skills } from '../lib/utils';
import { useEffect, useState } from 'react';

interface ISwiperProps {
    swiperProps?: React.FunctionComponent<React.RefAttributes<SwiperRef> & SwiperProps>
    swiperSlideProps?: React.FunctionComponent<SwiperSlideProps>
    swiperSlideContent: React.FunctionComponent
}

export default function SwiperSkill(props: ISwiperProps) {
    return (
        <Swiper
            {...props?.swiperProps}
        >
            {
                skills?.map((skill: ISkill, i) => {
                    return (
                        <SwiperSlide key={skill?.title} {...props?.swiperSlideProps}>
                            {props?.swiperSlideContent}
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    );
}