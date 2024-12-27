"use client";

import SectionTitle from "@/components/ui/sectionTitle";
import ServiceCard from "@/components/ui/cards/serviceCard";
import { servicesData } from "@/lib/fackData/servicesData";
import Feedback from "@/components/section/feedback";
import InputFiled from "@/components/ui/inputFiled";
import ButtonOutline from "@/components/ui/buttons/buttonOutline";
import RightArrow from "@/assets/icons/rightArrow";
import TextAreaFiled from "@/components/ui/textAreaFiled";
import Image from "next/image";
import CareerImage from "@/assets/images/newImages/Career-page.webp";
import { useState } from "react";

const Career = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <>
      <section className="mb-48">
        <div className="container-fluid">
          <SectionTitle
            sectionName={"AZALI"}
            sectionTitle={"Karyera"}
            sectionDesc={"İdeal iş yerinizi bizimlə yaradın"}
          />
        </div>
      </section>

      <div className="container mt-30">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          {/* Sol taraf: Resim */}
          <div className="w-full lg:w-1/2">
            <Image src={CareerImage} alt="Career" className="h-[600px] object-cover rounded-lg" />
          </div>

          {/* Sağ taraf: Form */}
          <div className="w-full lg:w-1/2">
            <section>
              <div className="container">
                <div className="grid w-full gap-5">
                  <form className="w-full space-y-4">
                    <InputFiled
                      placeholderc={"Adı ve Soyadı"}
                      type={"text"}
                      className={"w-full"}
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                      <InputFiled
                        placeholderc={"Telefon"}
                        type={"number"}
                        className={"w-full"}
                      />
                      <InputFiled
                        placeholderc={"E-poçt"}
                        type={"email"}
                        className={"w-full"}
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <InputFiled
                        placeholderc={"Təvəllüd"}
                        type={"date"}
                        className={"w-full"}
                      />
                      <InputFiled
                        placeholderc={"İddia etdiyiniz əmək haqqı"}
                        type={"number"}
                        className={"w-full"}
                      />
                    </div>
                    <InputFiled
                      placeholderc={"İstədiyiniz iş"}
                      type={"text"}
                      className={"w-full"}
                    />
                    <div>
                      <label className="block mb-2">Faylları yükləyin</label>
                      <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                      />
                    </div>
                    <TextAreaFiled
                      placeholder={"Mesajınızı yazın"}
                      className={"w-full min-h-[120px]"}
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
          </div>
        </div>
      </div>

      <section className="pt-20 mt-24">
        <div className="container-fluid">
          <SectionTitle
            sectionName={"AZALI"}
            sectionTitle={"Nə üçün Azali?"}
            sectionDesc={"Bizim bir sıra üstünlüklərimiz var, məsələn..."}
          />
          <div className="pt-14">
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6">
              {servicesData.map(({ id, link, service_desc, service_name }) => (
                <ServiceCard
                  key={id}
                  id={id}
                  service_desc={service_desc}
                  service_name={service_name}
                  link={link}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Feedback />
    </>
  );
};

export default Career;
