import Image from "next/image"
import { IPeriod, IProject, ISkill } from "../lib/utils"
import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

interface IPeriodProps {
    period: IPeriod
}

export default function Period(props: IPeriodProps) {
    const { title, timeline, description, images, projects, skills } = props?.period

    return (
        <div className="w-full grid grid-cols-[max-content_auto_300px] gap-[50px]">
            <div className="flex items-start justify-start">
                <div className="period-timeline sticky top-[50vh] border border-hemerald px-[8px] py-[4px] rounded-md">
                    <h5 className="font-bold">{timeline}</h5>
                </div>
            </div>
            <div>
                <h4 className="text-tertiary font-bold leading-none">{title}</h4>
                <div className="font-thin mt-[14px]" dangerouslySetInnerHTML={{ __html: description }}></div>
            </div>
            <div className="">
                
            </div>
        </div>
    )
}