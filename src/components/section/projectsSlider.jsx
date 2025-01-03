"use client"
import React, { useRef } from 'react'
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import 'swiper/css';
import SectionTitle from '../ui/sectionTitle'

import RightArrow from '@/assets/icons/rightArrow';
import { cn } from '@/lib/utils';
import ButtonOutline from '../ui/buttons/buttonOutline';
import ButtonFill from '../ui/buttons/buttonFill';
import { projectsData } from '@/lib/fackData/projectsData';



const ProjectsSlider = ({ text_muted, bg_muted }) => {
    const swiperRef = useRef()
    const pagination = {
        clickable: true,
        el: ".project-pagination",
        renderBullet: function (index, className) {
            return `
                <div class='opacity-0 relative h-0 ${className} flex  items-center '>
                    <h2 class='text-secondary-foreground leading-120 [font-size:_clamp(48px,8vw,82px)] font-extrabold mt-10'>
                        ${projectsData[index].project_name}
                    </h2>
                </div>
            `;
        },
    };
    
    return (
        <section className='pt-20'>
            <div className='container-fluid '>
                <SectionTitle
                    sectionName={"AZALI"}
                    sectionTitle={"Məhsullarımız"}
                    sectionDesc={"Sizin ideyanız-bizim mebelimizdir"}
                    button_text={"Daha ətraflı"}
                    link={"/products"}
                    bg_muted={bg_muted}
                    text_muted={text_muted}
                />
            </div>
            <div className='container-fluid relative lg:pt-30 2sm:pt-20 pt-14'>

                <Swiper
                    slidesPerView={1}
                    loop
                    speed={500}
                    autoplay={{
                      delay: 4000,
                    }}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    pagination={pagination}
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    {
                        projectsData.map(({ id, area, client, project_img, project_type, project_year }) => {
                            return (
                                <SwiperSlide key={id}>
                                    <div className='bg-cover bg-no-repeat pb-[70px] lg:pt-[500px] pt-[400px] max-w-[1550px] after:contents-[""] after:absolute after:top-0 after:right-0 after:w-full after:h-full after:bg-bottom-liner after:z-[1] after:max-w-[1550px] ml-auto' style={{ backgroundImage: `url(${project_img.src})` }}>
                                        <div className='flex xl:justify-end justify-center -mt-36 xl:-mt-0 5xl:gap-20 3xl:gap-14 sm:gap-10 gap-4 max-w-[1166px] relative z-10 ml-auto pr-7.5'>
                                            <Link href={"/products"} className='4xl:block hidden'>
                                                <ButtonOutline className="border-secondary text-secondary-foreground sm:px-10 px-3 whitespace-nowrap hover:border-primary">Ətraflı</ButtonOutline>
                                            </Link>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className='flex justify-center xl:justify-start items-center xl:items-end flex-col xl:flex-row gap-5 '>
                    <div className={cn(`project-pagination 3xl:max-w-[673px] max-w-[500px] w-full bg-primary xl:px-10 px-7 xl:pt-[40px] xl:pb-[90px] relative z-[1] xl:mt-[-271px]  ${bg_muted}`)}> </div>
                    <div className='flex items-end sm:gap-5 gap-2'>
                        <div onClick={() => swiperRef.current?.slidePrev()}>
                            <ButtonFill className={"rotate-180 h-[75px] w-[75px] sm:px-3 px-3 after:bg-secondary border-secondary hover:border-primary hover:bg-primary hover:text-secondary text-primary-foreground "}><RightArrow width={"35"} height={"22"} /></ButtonFill>
                        </div>
                        <div onClick={() => swiperRef.current?.slidePrev()}>
                            <ButtonFill className={cn(`h-[75px] hover:border-primary sm:px-10 px-3 after:left-0 after:${bg_muted}`)}>Növbəti <RightArrow width={"35"} height={"22"} /></ButtonFill>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSlider