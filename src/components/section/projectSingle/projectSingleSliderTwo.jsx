"use client"
import React, { useRef, useState } from 'react'
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs, FreeMode } from "swiper/modules"
import 'swiper/css';
import RightArrow from '@/assets/icons/rightArrow';
import ButtonFill from '@/components/ui/buttons/buttonFill';
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl';
import { referansGalleryData } from '@/lib/fackData/referansGalleryData';



const ProjectSingleSliderTwo = ({id}) => {
    const swiperRef = useRef()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const product = referansGalleryData.find((item) => item.id === parseInt(id))


    
const projectImg = [
    {
        id: 1,
        img: product.project_img7
    },
    {
        id: 2,
        img: product.project_img8
    },
    {
        id: 3,
        img: product.project_img9
    },]

    return (
        <div className='container'>
            <div className='relative'>
                <Swiper
                    slidesPerView={1}
                    loop
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper
                    }}
                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : null}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className=''
                >
                    {
                        projectImg?.map(({ id, img }) => {
                            return (
                                <SwiperSlide key={id}>
                                    <Image src={img} loading='lazy'  placeholder='blur' blurDataURL={staticBluarDataUrl} alt='img' className='w-full h-full max-h-[720px]' />
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className='absolute top-1/2 -translate-y-1/2 z-10 w-full flex justify-between items-center gap-5'>
                    <div onClick={() => swiperRef.current?.slidePrev()}>
                        <ButtonFill className='rotate-180 2sm:h-[90px] h-10 2sm:w-[90px] w-10 2sm:px-6 px-1.5 after:bg-secondary border-secondary hover:border-primary text-primary-foreground hover:text-secondary-foreground hover:bg-primary'><RightArrow width={"35"} height={"22"} /></ButtonFill>
                    </div>
                    <div onClick={() => swiperRef.current?.slideNext()}>
                        <ButtonFill className='2sm:h-[90px] h-10 2sm:w-[90px] w-10 2sm:px-6 px-1.5 border-secondary hover:border-primary after:bg-secondary text-primary-foreground hover:text-secondary-foreground hover:bg-primary'><RightArrow width={"35"} height={"22"} /></ButtonFill>
                    </div>
                </div>
            </div>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={27}
                speed={500}
                breakpoints={{
                    300: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    750: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1320: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                }}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mt-[35px]"
            >
                {
                    projectImg?.map(({ id, img }) => {
                        return (
                            <SwiperSlide key={id}>
                                <Image src={img} loading='lazy'  placeholder='blur' blurDataURL={staticBluarDataUrl} alt='img' className='w-full lg:min-h-[250px] min-h-[100px] max-h-[100px] h-full object-contain' />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default ProjectSingleSliderTwo