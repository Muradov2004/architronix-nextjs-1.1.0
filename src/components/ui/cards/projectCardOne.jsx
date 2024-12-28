"use client"
import Image from 'next/image'
import { motion } from "framer-motion"
import RightArrow from '@/assets/icons/rightArrow'
import ButtonFill from '../buttons/buttonFill'
import Link from 'next/link'
import { staticBluarDataUrl } from '@/lib/staticBluarDataUrl'

const ProjectCardOne = ({ order, position, project_year, project_desc, project_img, location, project_type, project_name, link, imageVariants, cardVariants ,project_img1,project_img2,project_img3,project_img4,project_img5,project_img6,project_img7,project_img8,project_img9}) => {
    return (
        <div className='xl:max-w-[95%] w-full mx-auto relative overflow-hidden'>
            <div className='container'>
                <div className='flex lg:flex-row flex-col items-center lg:pb-[170px] pb-25 '>
                    <div className={`${order} lg:w-1/2`}>
                        <div className={`${position} w-full xl:max-w-[800px] 2xl:max-w-[900px] 3xl:max-w-[1000px] max-h-[500px] xl:max-h-[550px] 2xl:max-h-[600px] 3xl:max-h-[650px] h-full 5xl:max-w-[1100px] 5xl:max-h-[700px]`}>
                            <motion.div
                                initial="offscreen"
                                whileInView="onscreen"
                                variants={imageVariants}
                                viewport={{ once: true, amount: 0 }}
                            >
                                <Image
                                    src={project_img}
                                    loading='lazy'
                                    placeholder='blur'
                                    blurDataURL={staticBluarDataUrl}
                                    alt='project-img-1'
                                    width={"auto"}
                                    height={"auto"}
                                    className='h-full w-full object-cover'
                                />
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={cardVariants}
                        viewport={{ once: true, amount: 0 }}
                        className='lg:w-[40%] 3xl:w-1/2 lg:mt-[187px] relative z-[1]'
                    >
                        <div className={`bg-primary xl:px-8 2xl:px-12 3xl:px-16 px-8 xl:pt-[60px] pt-10 xl:pb-[40px] pb-7 sm:px-4 sm:pt-6 sm:pb-6`}>
                            <h3 className='xl:text-3xl 2xl:text-4xl 3xl:text-5xl md:text-[40px] text-3xl font-extrabold leading-120 text-secondary-foreground pb-10'>
                                {project_name}
                            </h3>
                            <p className='xl:text-base 2xl:text-lg 3xl:text-xl sm:text-sm text-secondary-foreground mb-7'>
                                {project_desc}
                            </p>
                            <Link href={link}>
                                <ButtonFill className={"border-secondary text-primary-foreground hover:text-secondary-foreground after:left-0 after:bg-secondary"}>
                                    Ətraflı <RightArrow width={'35'} height={"22"} />
                                </ButtonFill>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCardOne
