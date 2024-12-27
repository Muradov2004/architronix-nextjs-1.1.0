import Image from "next/image";

import AddressCard from "@/components/ui/cards/addressCard";
import SectionTitle from "@/components/ui/sectionTitle";
import { addressList } from "@/lib/fackData/addressList";
import InputFiled from "@/components/ui/inputFiled";
import TextAreaFiled from "@/components/ui/textAreaFiled";
import RightArrow from "@/assets/icons/rightArrow";
import from_img from "@/assets/images/newImages/Contacts-page.webp";
import Feedback from "@/components/section/feedback";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";


export const metadata = {
  title: "Azali -- Contact",
  description: "Azali is a next js and tailwind css website",
};

const Contact = () => {
  return (
    <>
      <section>
        <div className="container-fluid ">
          <SectionTitle
            sectionName={"AZALI"}
            sectionTitle={"Bizimlə əlaqə"}
            sectionDesc={
              "Layihəniz üçün ideal həlli tapmağınıza kömək edəcəyik."
            }
          />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="grid lg:grid-cols-[32%_auto]">
            <div className="grid lg:grid-cols-1 2sm:grid-cols-2 grid-cols-1 gap-y-6">
              {addressList.map(
                ({ id, address, company, country, email, phone, lat_lng }) => (
                  <AddressCard
                    key={id}
                    id={id}
                    address={address}
                    company={company}
                    country={country}
                    email={email}
                    phone={phone}
                    lat_lng={lat_lng}
                  />
                )
              )}
            </div>
            <div className="w-full h-[450px] lg:sticky lg:top-20 z-[1] mt-16 lg:mt-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d759.6887420345012!2d49.9766645!3d40.392123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403063905a27c92b%3A0x74666340988018ea!2sAZALI%20Mebel!5e0!3m2!1saz!2saz!4v1735308418576!5m2!1saz!2saz"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid ">
          <SectionTitle
            sectionName={"AZALI"}
            sectionTitle={"Fikirləriniz və ya təklifləriniz varmı?"}
            sectionDesc={"Bizə deyin və birlikdə həyata keçirək."}
          />
        </div>
        <div className="container lg:pt-30 2sm:pt-20 pt-14">
          <div className="grid lg:grid-cols-2 gap-5">
            <Image
              src={from_img}
              loading="lazy"
              placeholder="blur"
              alt="contact-form"
              className="w-full h-auto"
            />
            <form>
              <InputFiled
                placeholderc={"Adı Soyadı"}
                type={"text"}
                className={"mb-[13px]"}
              />
              <div className="flex sm:flex-row flex-col gap-x-5">
                <InputFiled
                  placeholderc={"Telefon"}
                  type={"number"}
                  className={"mb-[13px]"}
                />
                <InputFiled
                  placeholderc={"E-poçt"}
                  type={"email"}
                  className={"mb-[13px]"}
                />
              </div>
              <TextAreaFiled
                placeholder={"Mesajınızı yazın"}
                className={"min-h-[223px] mb-[13px]"}
              />
              <div className="flex justify-end">
                <ButtonOutline>
                  Göndər <RightArrow height={"22"} width={"35"} />
                </ButtonOutline>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default Contact;
