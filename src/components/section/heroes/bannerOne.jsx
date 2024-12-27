"use client"
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from "swiper/modules"
import 'swiper/css';
import { cn } from '@/lib/utils'
import ButtonFill from '@/components/ui/buttons/buttonFill'
import { useRef, useState } from 'react';
import RightArrow from '@/assets/icons/rightArrow';
import TextTyped from '../../ui/textTyped'

const BannerOne = ({ data, text_muted, bg_muted }) => {
  const [currentSlide, setCurrentSlide] = useState(0); 
  const swiperRef = useRef()

  const pagination = {
    clickable: true,
    el: ".hero-pagination",
    renderBullet: function (index, className) {
      return `
       <span class='${className} flex leading-120'>
  <span class='inline-block mr-2 lg:text-5xl text-3xl font-extrabold text-transparent webkit-text-stroke-width-1 webkit-text-stroke-white active-blut'>0${index + 1}</span>
  <span class='title md:text-lg text-sm font-semibold text-white hidden sm:block sm:max-w-56 max-w-48'>${data[index].title}</span>
</span>
`
    },
  };

  return (
    <section className='relative banner-one'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={pagination}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex); 
        }}
        speed={500}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
      >
        {
          data.map(({ id, banner_img, heading_one, heading_two }) => {
            return (
              <SwiperSlide key={id} className='relative'>
                <div className='bg-cover bg-no-repeat h-[600px] sm:h-[700px] md:h-[800px]' style={{ backgroundImage: `url(${banner_img.src})` }}>
                  <div className='container'>
                    <div className='xl:pt-[150px] pt-[100px] pb-[200px]'>
                      {/* Eğer burada başka içerik varsa ekleyebilirsiniz */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })
        }
        <div className='flex justify-between absolute right-0 bottom-0 z-40'>
          <div className='hero-pagination bg-[rgba(210, 224, 217, 0.27)] backdrop-blur-md xl:px-9 xl:py-[61px] sm:px-5 px-2 py-10 max-w-[800px] flex xl:gap-8 gap-5'></div>
          <div className='flex flex-col sm:w-[90px] min-w-17.5 xl:h-[181px] h-[136px] '>
            <button onClick={() => swiperRef.current?.slideNext()} className={cn(`bg-primary ${bg_muted} text-secondary-foreground flex justify-center items-center h-1/2 `)}> 
              <RightArrow width={"35"} height={"22"} /> 
            </button>
            <button onClick={() => swiperRef.current?.slidePrev()} className={cn(`bg-secondary text-primary-foreground flex justify-center items-center h-1/2 rotate-180`)}> 
              <RightArrow width={"35"} height={"22"} /> 
            </button>
          </div>
        </div>
      </Swiper>
      
      {/* Overlay Yazılar */}
      <div className="absolute inset-0 flex flex-col ml-2 xl:ml-20 justify-center z-30 pointer-events-none xl:pt-[200px] pt-[160px] pb-[150px] ">
        <h1 className='text-white [font-size:_clamp(60px,10vw,150px)] font-extrabold leading-[90%] '>
          {data[currentSlide].heading_one && <TextTyped text={[data[currentSlide].heading_one]} />}
          <br />
          Hər bir detalda
          <br />
          {data[currentSlide].heading_two && <TextTyped text={[data[currentSlide].heading_two]} />}
        </h1>
        <Link href="https://wa.link/7sfqml" className="mt-10 inline-block">
          <ButtonFill className={cn(`after:z-[1] sm:px-10 px-4 after:left-0 after:${bg_muted} `)}>
            <span className="relative z-10">Müraciət</span>
          </ButtonFill>
        </Link>
      </div>
    </section>
  )
}

export default BannerOne
