import AboutTwo from '@/components/section/about/aboutTwo'
import Expertise from '@/components/section/expertise'
import Feedback from '@/components/section/feedback'
import TeamCardOne from '@/components/ui/cards/teamCardOne'
import SectionTitle from '@/components/ui/sectionTitle'
import { teamData } from '@/lib/fackData/teamData'
import { cardSlideAnimation } from '@/lib/utils'

export const metadata = {
  title: "Architronix -- About Us",
  description: "Architronix is a next js and tailwind css website",
};
const AboutUs = () => {
  return (
    <>
      <AboutTwo />
      <Expertise />
      <section className='pt-20'>
        <div className='container-fluid '>
          <SectionTitle
            sectionName={"AZALI"}
            sectionTitle={"Komandamız"}
            sectionDesc={"Komandamız qüsursuz zövqə və mükəmməlliyə can atan mütəxəssislərdir."}
            
          />
        </div>
        <div className='container lg:pt-[340px] 2sm:pt-20 pt-14'>
          <div className='grid lg:grid-cols-3 2sm:grid-cols-2 gap-7'>
            {
              teamData.map(({ id, img, name, position, social_link }) => <TeamCardOne key={id} img={img} name={name} position={position} social_link={social_link} prantCalss={"team-card"} cardVariants={cardSlideAnimation()}  check={false}/>)
            }
          </div>
        </div>
      </section>
      <Feedback />
    </>
  )
}

export default AboutUs