import React from 'react'
import AboutOne from '@/components/section/about/aboutOne'
import Gallery from '@/components/section/gallery'
import BannerOne from '@/components/section/heroes/bannerOne'
import VideoPortfolio from '@/components/section/videoPortfolio'
import ProjectsSlider from '@/components/section/projectsSlider'
import Testimonial from '@/components/section/testimonial'
import BlogSlider from '@/components/section/blogSlider'
import Feedback from '@/components/section/feedback'
import Counter from '@/components/ui/counter'
import SectionTitle from '@/components/ui/sectionTitle'
import TeamCardOne from '@/components/ui/cards/teamCardOne'

import { productData } from '@/lib/fackData/productData'
import { blogData } from '@/lib/fackData/blogData'
import { teamData } from '@/lib/fackData/teamData'
import { cardSlideAnimation } from '@/lib/utils'
import { bannerOneData } from '@/lib/fackData/bannerOneData'
import Faq from '@/components/section/faq'

export const metadata = {
  title: "Azali -- Home-1",
  description: "Azali is a next js and tailwind css website",
};

const Home1 = () => {
  return (
    <>
      <BannerOne data={bannerOneData} />
      <AboutOne />
      <Counter />
      <ProjectsSlider />
      {/* <ServicesSlider /> */}
      <Gallery/>

      <section className='pt-20'>
        <div className='container-fluid '>
          <SectionTitle
            sectionName={"AZALI"}
            sectionTitle={"Komandamız"}
            sectionDesc={"Komandamız ideyalardan ilham alan və nəticələrə yönəlmiş peşəkarların birliyidir."}
            button_text={"Daha Ətraflı"}
            link={"/about-us"}
          />
        </div>
        <div className='container lg:pt-[340px] 2sm:pt-20 pt-14'>
          <div className='grid lg:grid-cols-3 2sm:grid-cols-2 gap-7'>
            {
              teamData.slice(0, 3).map(({ id, img, name, position, social_link }) => <TeamCardOne key={id} img={img} name={name} position={position} social_link={social_link} prantCalss={"team-card"} cardVariants={cardSlideAnimation()} />)
            }
          </div>
        </div>
      </section>

      <VideoPortfolio />

     
      <Testimonial check={true} />
      <Faq className={"pb-20"}/>

      {/* <ShopSlider data={productData.slice(0, 5)} /> */}

      <section className='pt-20'>
        <div className='container-fluid '>
          <SectionTitle
            sectionName={"AZALI"}
            sectionTitle={"Bloq"}
            sectionDesc={"Həmişə faydalı və aktual məlumatlarla xəbərdar olun!"}
          />
        </div>
        <div className='container lg:pt-30 2sm:pt-20 pt-14'>
          <BlogSlider data={blogData.slice(0, 4)} />
        </div>
      </section>

      <Feedback />
    </>
  )
}

export default Home1