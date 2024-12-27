import React from 'react'
import Image from 'next/image'
import SectionTitle from '../../ui/sectionTitle'
import about_bg from "@/assets/images/newImages/About-page-1.webp"
import SectionSidebarImg from '@/components/ui/sectionSidebarImg'

const AboutTwo = () => {
    return (
        <section >
            <div className='container-fluid'>
                <SectionTitle sectionName={"AZALI"} sectionTitle={"Hər detalda rahatlıq sənəti"} sectionDesc={"Biz hər interyeri sənət əsərinə çevirən mebellər yaradırıq."} />
                <div className={`bg-primary xl:mt-[220px] lg:mt-25 md:mt-44 mt-[540px] xl:mb-20 mb-0`}>
                    <div className='container'>
                        <div className='flex lg:flex-row flex-col items-center justify-between gap-[66px]'>
                            <div className='md:-mt-25 -mt-[470px] -mb-25'>
                                <SectionSidebarImg img={about_bg} section_name={"about-bg"}/>
                            </div>
                            <div className='max-w-[533px] lg:pt-0 pt-20 lg:pb-0 pb-10'>
                                <h2 className='text-secondary-foreground text-3xl 2sm:text-4xl font-bold leading-120 mb-14 max-w-[400px]'>"AZALI" MMC</h2>
                                <p className=' text-secondary-foreground'>
                                "AZALİ” MMC şirkəti, mebel və metal mebel istehsalı sahəsində böyük uğurlara imza atmış şirkətlərindən biridir. Şirkətin məqsədi müasir dizaynları əks etdirən layihələr həyata keçirmək, onların keyfiyyətlə bağlı gözləntilərini reallaşdırmaq, eyni zamanda müştərilərin qiymət seçimi üçün ən uyğun alternativ təklif etməkdir.

                                </p>
                                <p className='text-secondary-foreground mt-7'>
                                Əsas missiyamız müasir dövrün tələblərinə uyğun keyfiyyətli və sərfəli ofis, hotel və restoran, məktəb, bağça, səhiyyə, hərbi,və s.      mebellərinin istehsalı və satışı ilə müştərilərimizi məmnun salmaqdır.
Müştərilərin istəklərinə əsasən eskizlər tərtib olunur, qəbul olunduqdan sonra sifarişlər ən qısa müddətdə təhvil verilir. Təklif etdiyimiz mebellərə 1 il zəmanət verilir və zəmanət bitdikdən sonra real servis xidməti təklif edirik.
Sizlərlə əməkdaşlıq etməkdən məmnun olarıq.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutTwo