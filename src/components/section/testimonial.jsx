"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import img1 from "@/assets/images/logos/abb.png";
import img2 from "@/assets/images/logos/Ady.png";
import img3 from "@/assets/images/logos/analitik.png";
import img4 from "@/assets/images/logos/azTU.png";
import img5 from "@/assets/images/logos/bbc.png";
import img6 from "@/assets/images/logos/borani.png";
import img7 from "@/assets/images/logos/deniz.png";
import img8 from "@/assets/images/logos/geneve.png";
import img9 from "@/assets/images/logos/istanbul.png";
import img10 from "@/assets/images/logos/kobia.png";
import img11 from "@/assets/images/logos/mado.png";
import img12 from "@/assets/images/logos/modist.png";
import img13 from "@/assets/images/logos/nimex.png";
import img14 from "@/assets/images/logos/sazeli.png";
import img15 from "@/assets/images/logos/socar.png";
import img16 from "@/assets/images/logos/steam.png";
import img17 from "@/assets/images/logos/stp.png";
import img18 from "@/assets/images/logos/tehsil.png";
import img19 from "@/assets/images/logos/tkta.png";
import img20 from "@/assets/images/logos/zeytun.png";

import QuoteIcon from "@/assets/icons/quoteIcon";
import SectionTitle from "../ui/sectionTitle";
import ProgressAndNatigation from "../ui/progressAndNatigation";
import { cn } from "@/lib/utils";
import Image from "next/image";

const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Modern Spaces Inc.",
    review:
      "I was truly impressed by the design expertise of Architronix. They turned my home into a stylish haven, and I couldn't be happier!",
    img: img1,
  },
  {
    id: 2,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img2,
  },
  {
    id: 3,
    name: "Emily Roberts",
    position: "UrbanLiving Interiors",
    review:
      "Architronix Interiors transformed my office space into a functional yet aesthetically pleasing environment. Their attention to detail and innovative designs are top-notch",
    img: img3,
  },
  {
    id: 4,
    name: "Sarah Johnson",
    position: "Modern Spaces Inc.",
    review:
      "I was truly impressed by the design expertise of Architronix. They turned my home into a stylish haven, and I couldn't be happier!",
    img: img4,
  },
  {
    id: 5,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img5,
  },
  {
    id: 6,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img6,
  },
  {
    id: 7,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img7,
  },
  {
    id: 8,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img8,
  },
  {
    id: 9,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img9,
  },
  {
    id: 10,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img10,
  },
  {
    id: 11,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img11,
  },
  {
    id: 12,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img12,
  },
  {
    id: 13,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img13,
  },
  {
    id: 14,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img14,
  },
  {
    id: 15,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img15,
  },
  {
    id: 16,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img16,
  },
  {
    id: 17,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img17,
  },
  {
    id: 18,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img18,
  },
  {
    id: 19,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img19,
  },
  {
    id: 20,
    name: "John Smith",
    position: "Smith & Co. Architecture.",
    review:
      "Architronix exceeded my expectations. They took my vision and brought it to life, creating a breathtaking design that perfectly complements my",
    img: img20,
  },
];
const Testimonial = ({ text_muted, bg_muted,check }) => {
  const pagination = {
    clickable: true,
    el: ".progressbar-pagination",
    type: "progressbar",
  };
  return (
    <section className="pt-20">
      <div className="container-fluid ">
        
        {check && <SectionTitle
          sectionName={"AZALI"}
          sectionTitle={"Bizim tərəfdaşlarımız"}
          sectionDesc={"Tərəfdaşlarımız bizim üçün uğurumuzun təməlidir."}
          bg_muted={bg_muted}
          text_muted={text_muted}
        />
        }
        <div className="lg:pt-30 2sm:pt-20 pt-14">
          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              700: {
                slidesPerView: 2,
              },
              1300: {
                slidesPerView: 3,
              },
            }}
            pagination={pagination}
            loop={true}
            modules={[Pagination, Navigation]}
            className=""
          >
            {testimonialData.map(({ id, name, position, img,review }) => {
              return (
                <SwiperSlide key={id}>
                  <div className="flex md:gap-6 gap-2">
                    <div className="text-secondary-foreground">
                      
                    </div>
                    <div className="mt-16">
                      <p
                        className={cn(
                          `text-lg text-primary-foreground ${text_muted}`
                        )}
                      >
                        <Image src={img} alt="img"/>                </p>
                      <div className="relative after:absolute after:-left-5 after:top-0 after:w-[1px] after:h-full after:bg-primary ml-5 mt-6">
                        <h5
                          className={cn(
                            `text-primary-foreground font-extrabold leading-160 text-lg ${text_muted}`
                          )}
                        >
                         
                        </h5>
                        <p
                          className={cn(
                            `text-primary-foreground font-medium ${text_muted}`
                          )}
                        >
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <div className="container">
              <ProgressAndNatigation />
            </div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
