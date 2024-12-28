import ProjectCardOne from '@/components/ui/cards/projectCardOne'
import SectionTitle from '@/components/ui/sectionTitle'
import { referansGalleryData } from '@/lib/fackData/referansGalleryData'
import { cardSlideAnimation, cardSlideAnimationDelay, cardSlideAnimationRight, cardSlideAnimationRightDelay } from '@/lib/utils';

export const metadata = {
    title: "Azali -- Product Archive",
    description: "Azali is a next js and tailwind css website",
};

const ProjectArchive = (id) => {

    
    return (
        <section>
            <div className='container-fluid '>
                <SectionTitle sectionName={"AZALI"} sectionTitle={"Layihələrimiz"} sectionDesc={"Məkanı sənətə çevirən layihələr"} />
            </div>
            <div className='lg:pt-20 2sm:pt-20 pt-14'>
                <div className=''>
                    {
                        referansGalleryData.map(({ id, project_desc, project_img, project_name, project_year, project_type, location, link  ,project_img1,project_img2,project_img3,project_img4,project_img5,project_img6,project_img7,project_img8,project_img9}) => {
                            if (id % 2 === 0) {
                                return (
                                    <ProjectCardOne
                                        key={id}
                                        project_desc={project_desc}
                                        project_img={project_img}
                                        project_type={project_type}
                                        location={location}
                                        project_year={project_year}
                                        link={link}
                                        project_name={project_name}
                                        order={'lg:order-1 order-0'}
                                        position={"lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2"}
                                        imageVariants={cardSlideAnimationRight()}
                                        cardVariants={cardSlideAnimationRightDelay()}
                                    />
                                )
                            }
                            else {
                                return (
                                    <ProjectCardOne
                                        key={id}
                                        project_desc={project_desc}
                                        project_img={project_img}
                                        project_type={project_type}
                                        location={location}
                                        project_year={project_year}
                                        link={link}
                                        project_name={project_name}
                                        position={"lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2"}
                                        imageVariants={cardSlideAnimation()}
                                        cardVariants={cardSlideAnimationDelay()}
                                    />
                                )
                            }
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ProjectArchive