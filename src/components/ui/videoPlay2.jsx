"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import {motion} from "framer-motion"
import PlayIcon from '@/assets/icons/playIcon'
import ModalVideo from 'react-modal-video';
import '/node_modules/react-modal-video/scss/modal-video.scss';
import useOverflowHidden from '@/hooks/useOverflowHidden';
import { cardSlideAnimation } from '@/lib/utils';

const VideoPlay2 = ({ img, video="BSWc06mvVWE" }) => {
    const [isOpen, setOpen] = useState(false);
    useOverflowHidden(isOpen)
    return (
        <>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                variants={cardSlideAnimation()}
                viewport={{ once: true, amount: 0.2 }}
                className='relative max-h-[400px] mt-10 lg:mt-0'
            >
                <Image src={img} loading='lazy'  placeholder='blur'  alt='video' width={"auto"} height={"auto"} className='w-full max-w-[2000px] mx-auto h-full' />
                <ModalVideo
                    channel="youtube"
                    youtube={{ mute: 0, autoplay: 0 }}
                    isOpen={isOpen}
                    videoId={video}
                    onClose={() => setOpen(false)}
                />
<div
  onClick={() => setOpen(true)}
  className='w-24 md:w-25 md:h-[109px] lg:w-28 h-24 rounded-full text-primary-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#D9D9D9]/[.78] cursor-pointer flex justify-center items-center md:mt-[86px] lg:mt-[96px] 5xl:mt-52'
>
  <span>
    <PlayIcon width={"30"} height={"36"} />
  </span>
</div>

            </motion.div>

        </>
    )
}

export default VideoPlay2