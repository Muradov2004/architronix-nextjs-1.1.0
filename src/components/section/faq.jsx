import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import SectionTitle from "../ui/sectionTitle"
import faq_img from "@/assets/images/newImages/faq-home.webp"
import SectionSidebarImg from "../ui/sectionSidebarImg"

const faqData = [
    {
        id: "1",
        question: "Korporativ müştərilərə hansı xidmətləri təqdim edirsiniz?",
        ans: `
        Biz bütün mebel aid olan bütün xidmətləri təklif edirik: fərdi tələblərə uyğun mebel dizaynı, istehsal, çatdırılma və quraşdırma. Biz həmçinin müştərinin verdiyi dizayn layihələri üzərində işləyirik.

        `
    },
    {
        id: "2",
        question: "Yalnız böyük şirkətlərlə işləyirsiniz, yoxsa kiçik bizneslərdən sifariş qəbul edirsiniz?",
        ans: `
        Biz istənilən ölçülü şirkətlərlə - kiçik ofislərdən tutmuş böyük korporasiyalara qədər əməkdaşlıq edirik.

        `
    },
    {
        id: "3",
        question: " Fərdi layihəyə uyğun mebel sifariş etmək mümkündürmü?",
        ans: `
       Bəli, biz unikal ölçülər, materiallar və rənglər daxil olmaqla fərdi layihələrə uyğun olaraq mebel hazırlayırıq.

        `
    },
    {
        id: "4",
        question: "Minimum sifariş miqdarı nə qədərdir?",
        ans: `
        Minimum sifariş miqdarı mebel növündən və layihənin xüsusiyyətlərindən asılı olaraq fərdi olaraq müzakirə olunur.

        `
    },
    {
        id: "5",
        question: "Mebelləri çatdırılma və  quraşdırılma edirsiniz?",
        ans: `
        Bəli, çatdırılma və peşəkar quraşdırma xidmətləri təklif edirik. Bu xidmətlər qiymətə daxildir və ya əlavə olaraq razılaşmaq olar.

        `
    },

]
const Faq = ({className}) => {
    return (
        <section className={`pt-20 ${className}`}>
            <div className="container-fluid">
                <SectionTitle sectionName={"AZALI"} sectionTitle={"Tez-tez verilən suallar"} sectionDesc={"Sizi maraqlandıran ən vacib suallar və cavablar"} />
            </div>
            <div className="container lg:pt-30 2sm:pt-20 pt-14">
                <div className="grid lg:grid-cols-[40%_auto] items-center gap-17.5">
                    <div>
                        <SectionSidebarImg img={faq_img} section_name={"faq-background"} />
                    </div>

                    <div>
                        <Accordion type="single" defaultValue="1" collapsible>
                            {
                                faqData.map(({ id, ans, question }) => {
                                    return (
                                        <AccordionItem value={id} className='mb-2.5'>
                                            <AccordionTrigger className="text-xl font-semibold border border-primary sm:px-12.5 px-6">{question}</AccordionTrigger>
                                            <AccordionContent className="mt-[22px] sm:px-12.5 px-6">
                                                {ans}
                                            </AccordionContent>
                                        </AccordionItem>
                                    )
                                })
                            }


                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq