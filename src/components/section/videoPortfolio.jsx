import Image from "next/image";
import Link from "next/link";
import RightArrow from "@/assets/icons/rightArrow";
import video_thumb from "@/assets/images/newImages/video image-2.webp";
import SectionTitle from "../ui/sectionTitle";
import { cn } from "@/lib/utils";
import VideoPlay from "../ui/videoPlay";
import ButtonOutline from "../ui/buttons/buttonOutline";

const VideoPortfolio = ({
  text_muted,
  bg_muted,
  after_bg_muted,
  show = true,
}) => {
  return (
    <section className="pt-20">
      <div className="container-fluid ">
        <SectionTitle
          sectionName={"AZALI"}
          sectionTitle={"Həyat üçün mebel"}
          sectionDesc={"Sizin zövqünüz-bizim mebelimiz"}
          bg_muted={bg_muted}
          text_muted={text_muted}
        />
      </div>
      <div className="container-fluid lg:pt-30 2sm:pt-20 pt-14">
        <div
          className={cn(
            ` relative after:contents-[""] after:absolute after:left-0 after:top-0 after:max-w-[1320px] after:w-full z-[1] after:h-full after:bg-primary ${after_bg_muted} pt-[90px] pb-[110px]`
          )}
        >
          <div className="container flex lg:flex-row flex-col justify-between relative z-10">
            <div className="2xl:max-w-[637px] lg:max-w-[500px] w-full">
              <h4 className="text-secondary-foreground text-3xl 2sm:text-4xl font-bold leading-135">
                “AZALI” üslub, rahatlıq və keyfiyyətdir.
              </h4>
              <p className="text-secondary-foreground mt-5">
                Mürəkkəb dizaynlardan praktik və müasir modellərə qədər
                interyeriniz üçün mükəmməl seçimimiz var.{" "}
              </p>
              <ul className="mt-[35px]">
                <li className="text-secondary-foreground flex items-center gap-[27px]">
                  <RightArrow width={"35"} height={"22"} />{" "}
                  <span className="text-secondary-foreground text-2xl leading-160 font-bold">
                    Üslub
                  </span>{" "}
                </li>
                <li className="text-secondary-foreground flex items-center gap-[27px] mt-4">
                  <RightArrow width={"35"} height={"22"} />{" "}
                  <span className="text-secondary-foreground text-2xl leading-160 font-bold">
                    Rahatlıq{" "}
                  </span>{" "}
                </li>
                <li className="text-secondary-foreground flex items-center gap-[27px] mt-4">
                  <RightArrow width={"35"} height={"22"} />{" "}
                  <span className="text-secondary-foreground text-2xl leading-160 font-bold">
                    Keyfiyyət{" "}
                  </span>{" "}
                </li>
              </ul>
              {show && (
                <Link
                  href="/project-archive"
                  className="mt-[70px] inline-block"
                >
                  <ButtonOutline
                    className={
                      "border-secondary text-secondary-foreground sm:px-10 px-3 after:hover:bg-secondary after:left-0 hover:text-primary-foreground"
                    }
                  >
                    Ətraflı
                    <RightArrow width={"35"} height={"22"} />
                  </ButtonOutline>
                </Link>
              )}
            </div>
            <VideoPlay img={video_thumb} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPortfolio;
