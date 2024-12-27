"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"
import 'swiper/css';
import ProgressAndNatigation from '../../ui/progressAndNatigation'
import Image from 'next/image';
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl';
import { referansGalleryData } from '@/lib/fackData/referansGalleryData';

const ProjectSingleS = ({id}) => {

       const project = referansGalleryData.find((item) => item.id === parseInt(id));
console.log(project)
    const projectImgList = [
        {
            id: 1,
            img: project.project_img4
        },
        {
            id: 2,
            img: project.project_img5
        },
        {
            id: 3,
            img: project.project_img6
        },
        {
            id: 4,
            img: project.project_img4
        },
    
    ]

    const pagination = {
        clickable: true,
        el: ".progressbar-pagination",
        type: 'progressbar'
    };
    return (
        <div className=' project-slider-one'>
            <Swiper
                spaceBetween={30}
                breakpoints={{
                    380: {
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                    },
                    750: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1320: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    }
                }}
                pagination={pagination}
                loop={true}
                modules={[Pagination, Navigation]}
                
            >

                {
                    projectImgList.map(({ id, img }) => {
                        return (
                            <SwiperSlide key={id} >
                                <Image src={img} loading='lazy'  placeholder='blur' blurDataURL={staticBluarDataUrl} alt='img' className='w-full h-full min-h-16' />
                            </SwiperSlide>
                        )
                    })
                }

                <div className='container'>

                    <ProgressAndNatigation />

                </div>
            </Swiper>
        </div>
    )
}

export default ProjectSingleS