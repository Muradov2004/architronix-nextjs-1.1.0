"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import Letter from "@/assets/images/letter.png";
import LetterOpen from "@/assets/images/newImages/Letter_2.png";
import RightArrow from "@/assets/icons/rightArrow";
import { cn } from "@/lib/utils";
import ButtonFill from "../ui/buttons/buttonFill";
import { projectsData } from "@/lib/fackData/projectsData";
import SectionTitle from "../ui/sectionTitle";
import Image from "next/image";
import { referanceData } from "@/lib/fackData/referanceData";

const ReferanceSlider = ({ text_muted, bg_muted }) => {
  const [openedLetters, setOpenedLetters] = useState([]); // State to track opened letters
  const swiperRef = useRef();

  const handleOpenLetter = (id) => {
    if (!openedLetters.includes(id)) {
      setOpenedLetters([...openedLetters, id]);
    }
  };

  const handleCloseLetter = (id) => {
    setOpenedLetters(openedLetters.filter((openedId) => openedId !== id));
  };

  const pagination = {
    clickable: true,
    el: ".project-pagination",
    renderBullet: function (index, className) {
      return `
        <div class='opacity-0 relative h-0 translate-y ${className}'>
          <h2 class='text-secondary-foreground leading-120 [font-size:_clamp(48px,8vw,82px)] font-extrabold '>${projectsData[index].project_name}</h2>
        </div>
        `;
    },
  };

  return (
    <section className="pt-10 md:pt-20">
      <div className="container-fluid">
        <SectionTitle
          sectionName={"AZALI"}
          sectionTitle={"Referans məktubları"}
          sectionDesc={
            "Peşəkarlığımızı və etibarlılığımızı təsdiq edən məktublar."
          }
        />
      </div>
      <div className="container-fluid relative mt-20 lg:pt-10 2sm:pt-8 pt-5">
        <Swiper
          slidesPerView={1}
          loop
          speed={500}
          autoplay={{
            delay: 4000,
          }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {referanceData.map(
            ({ id, logo, letter, project_img, project_type, project_year }) => (
              <SwiperSlide key={id}>
                <div className="relative  flex flex-col   mr-[20%] md:mr-0 min-w-96 lg:flex-row h-full  lg:h-[900px] justify-center items-center border-b ">
                  {/* Sol taraf: Resim */}
                  <div className="w-full lg:w-1/2 h-full bg-cover bg-no-repeat relative flex justify-center items-center flex-col lg:-mt-8 p-4">
                    <div className="md:ml-20 mr-[20%] md:mr-0 relative">
                      <Image
                        src={logo}
                        alt="Steam"
                        className="w-full h-auto max-w-[400px] lg:max-w-[500px] animate-pulse cursor-pointer"
                      />
                    </div>

                    <div className="flex justify-center xl:justify-start items-center xl:items-end flex-col xl:flex-row gap-5 md:ml-20 mt-5">
                      <div className="flex items-end sm:gap-5 gap-2">
                        <div
onClick={() => {
  swiperRef.current?.slidePrev();
}}
                        >
                          <ButtonFill
                            className={
                              "rotate-180 h-[50px] lg:h-[75px] w-[50px] lg:w-[75px] sm:px-3 px-2 after:bg-secondary border-secondary hover:border-primary hover:bg-primary hover:text-secondary text-primary-foreground "
                            }
                          >
                            <RightArrow width={"25"} height={"18"} />
                          </ButtonFill>
                        </div>
                        <div
                          onClick={() => {
                            swiperRef.current?.slideNext();
                          }}
                        >
                          <ButtonFill
                            className={cn(
                              `h-[50px] w-full lg:h-[75px] mr-[10%] md:mr-0 lg:w-full hover:border-primary sm:px-10 px-3 after:left-0 after:${bg_muted}`
                            )}
                          >
                            Növbəti <RightArrow width={"25"} height={"18"} />
                          </ButtonFill>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sağ taraf: Letter */}
                  <div className="w-full  lg:w-1/2 h-full flex justify-center items-center relative mt-5 lg:mt-0 ">
                    {openedLetters.includes(id) ? (
                      <div className="relative flex justify-center items-center mt-5 lg:mt-0 mb-60 2xl:mb-80  mr-[10%] 2sm:mr-[25%]">
                        <Image
                          src={letter}
                          alt="Letter Open"
                          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]"
                        />
                        <button
                        onClick={() => handleCloseLetter(id)}
                          className="absolute top-10 right-2 bg-black text-white p-2 rounded-full text-sm"
                        >
                          X
                        </button>
                      </div>
                    ) : (
                      <div
                        className="cursor-pointer mr-[10%] 2sm:mr-[25%]"
                        onClick={() => handleOpenLetter(id)}
                      >
                        <Image
                          src={Letter}
                          alt="Letter"
                          className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[500px]  "
                        />
                        <div className="absolute top-[4%] lg:mr-28  xl:mr-36 2xl:mr-40 3xl:mr-44 4xl:mr-48 5xl:mr-56 2sm:mr-36  mr-9 inset-0 flex items-center justify-center pointer-events-none">
                          <span
                            className="   text-white px-4 py-2 rounded-lg font-semibold animate-bounce"
                            style={{ animationDuration: "1.5s" }}
                          >
                            Click Me!
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default ReferanceSlider;
