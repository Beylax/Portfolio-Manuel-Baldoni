import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import Skill from './skill';
import SlideIn from './slide-in';
import DropDown from './drop-down';

export default function SwiperSkill() {
    return (
        <Swiper
            className='w-[90%] !overflow-visible'
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={1.8}
            freeMode={true}
            autoplay={{
                delay: 500
            }}
            breakpoints={{
                768: {
                    slidesPerView: 2.8
                },
                986: {
                    slidesPerView: 3.8
                },
                1024: {
                    slidesPerView: 4.8
                },
                1200: {
                    slidesPerView: 5.8
                }
            }}
        >
            <SwiperSlide>
                <DropDown delay={0}>
                    <Skill img_name='html_logo.png' title='HTML'></Skill>
                </DropDown>
            </SwiperSlide>
            <SwiperSlide>
                <DropDown delay={200}>
                    <Skill img_name='css_logo.png' title='CSS'></Skill>
                </DropDown>
            </SwiperSlide>
            <SwiperSlide>
                <DropDown delay={400}>
                    <Skill img_name='tailwind_logo.png' link='https://tailwindcss.com/' title='Tailwind'></Skill>
                </DropDown>
            </SwiperSlide>
            <SwiperSlide>
                <DropDown delay={600}>
                    <Skill img_name='javascript_logo.png' title='Javascript'></Skill>
                </DropDown>
            </SwiperSlide>
            <SwiperSlide>
                <DropDown delay={800}>
                    <Skill img_name='typescript_logo.png' link='https://www.typescriptlang.org/' title='Typescript'></Skill>
                </DropDown>
            </SwiperSlide>
            <SwiperSlide>
                <DropDown delay={1000}>
                    <Skill img_name='react_logo.png' link='https://it.legacy.reactjs.org/' title='React'></Skill>
                </DropDown>
            </SwiperSlide>
            <SwiperSlide>
                <DropDown delay={1200}>
                    <Skill img_name='nodejs_logo.png' link='https://nodejs.org' title='NodeJS'></Skill>
                </DropDown>
            </SwiperSlide>
            <SwiperSlide>
                <DropDown delay={1400}>
                    <Skill img_name='c_logo.png' title='C'></Skill>
                </DropDown>
            </SwiperSlide>
            <SwiperSlide>
                <DropDown delay={1600}>
                    <Skill img_name='csharp_logo.png' title='C#'></Skill>
                </DropDown>
            </SwiperSlide>
            <SwiperSlide>
                <DropDown delay={1800}>
                    <Skill img_name='github_logo.png' link='https://github.com/' title='Git'></Skill>
                </DropDown>
            </SwiperSlide>
            <SwiperSlide>
                <DropDown delay={2000}>
                    <Skill img_name='docker_logo.png' link='https://www.docker.com/' title='Docker'></Skill>
                </DropDown>
            </SwiperSlide>
            <SwiperSlide>
                <DropDown delay={2200}>
                    <Skill img_name='hubspot_logo.png' link='https://www.hubspot.com/' title='HubSpot'></Skill>
                </DropDown>
            </SwiperSlide>
        </Swiper>
    );
}