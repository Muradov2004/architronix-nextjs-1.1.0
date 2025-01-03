"use client"
import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import SectionTitle from '../ui/sectionTitle'
import expertise_bg from "@/assets/images/expertise.webp"
import Title from '../ui/title'
import { cardSlideAnimation } from '@/lib/utils'
import SectionSidebarImg from '../ui/sectionSidebarImg'


const skillList = [
    {
        id: 1,
        skill_name: "Zərif Dizayn",
        achive: "100%"
    },
    {
        id: 2,
        skill_name: "Yüksək keyfiyyətli materiallar",
        achive: "100%"
    },
    {
        id: 3,
        skill_name: "Fərdi yanaşma",
        achive: "100%"
    },
    {
        id: 4,
        skill_name: "Uzunömürlülük və etibarlılıq",
        achive: "100%"
    },

]
const Expertise = () => {
    return (
        <section className='mt-20'>
            <div className='container-fluid '>
                <SectionTitle sectionName={"AZALI"} sectionTitle={"Hər xəttdə zəriflik və rahatlıq"} sectionDesc={"Şirkətimiz keyfiyyətin və qüsursuz zövqün simvoludur"} />
                <div className='lg:mt-30 2sm:mt-20 mt-14 bg-secondary'>
                    <div className='flex lg:flex-row flex-col items-center gap-12 '>
                        <div>
                            <SectionSidebarImg img={expertise_bg} section_name={"Expertise-bg"} className={"w-full h-full"} />
                        </div>
                        <div className='px-8 2xl:py-0 py-7 max-w-[609px] w-full'>
                            <Title title_text={"Nə üçün Azali?"} className={"2xl:mb-20 mb-14"} />
                            <div className=''>
                                {
                                    skillList.map(({ id, achive, skill_name }) => {
                                        return (
                                            <div key={id} className='bg-primary_rgba relative h-[1px] w-full mt-16 '>
                                                <div className={`bg-primary absolute -top-[2.5px] left-0 h-[5px]`} style={{ width: achive, transition: "width 1s ease-in-out" }}>
                                                    <span className='absolute left-0 bottom-full mb-2 font-semibold text-primary-foreground'>{skill_name}</span>
                                                    <span className='absolute -right-4 bottom-full mb-2 font-semibold text-primary-foreground'>{achive}</span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Expertise