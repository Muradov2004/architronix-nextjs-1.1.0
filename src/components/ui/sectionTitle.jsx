"use client";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import RightArrow from "@/assets/icons/rightArrow";
import ButtonOutline from "./buttons/buttonOutline";
import Image from "next/image";
import qoz from "@/assets/images/newQoz.png";
import localfont from "next/font/local";

const custom_jakarta = localfont({
  src: [
    {
      path: "../../../public/fonts/PlusJakartaSansExtraBold-Regular.otf",
      weight: "700",
    },
  ],
  variable: "--font-jakarta",
});

const custom_aquire = localfont({
  src: [
    {
      path: "../../../public/fonts/Aquire-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-jakarta",
});
const SectionTitle = ({
  sectionName,
  sectionTitle,
  sectionDesc,
  text_muted,
  bg_muted,
  link,
  button_text,
  wrapIIndices = [],
}) => {
  const [scroll, setScroll] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "end 0.0"],
  });

  let scrollValue;
  if (scroll) {
    scrollValue = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  } else {
    scrollValue = useTransform(
      scrollYProgress,
      [0, 0],
      ["0%", `${scrollHeight / 3}px`]
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScroll(true);
      } else {
        setScrollHeight(window.scrollY);
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const renderTitleWithImage = (title, wrapIIndices) => {
    let iCount = 0;
    return title.split("").map((char, index) => {
      if (char.toLowerCase() === "i") {
        iCount += 1;
        if (wrapIIndices.includes(iCount)) {
          return (
            <span
              key={index}
              className="relative inline-block"
              style={{ fontSize: "inherit", lineHeight: "1" }}
            >
              {char}
              <span
                style={{
                  top: "0.22em", // Varsayılan pozisyon
                  left: "78.92%",
                  transform: "translate(-50%, -50%)",
                  width: "0.42em",
                  height: "0.29em",
                }}
                className={cn("absolute", {
                  "sm:top-[0.22em] md:width-[0.24em] md:height-[0.28em]": true, // Orta ekranlar
                  "2sm:top-[0.24em] md:width-[0.24em] md:height-[0.30em] ": true, // Orta ekranlar

                  "md:top-[0.20em] md:width-[0.24em] md:height-[0.28em]": true, // Orta ekranlar
                  "lg:top-[0.10em] lg:width-[0.25em] lg:height-[0.28em] ": true, // Büyük ekranlar
                  "2xl:top-[0.10em] 2xl:width-[0.25em] 2xl:height-[0.29em]": true, // Çok büyük ekranlar
                })}
              >
                <Image
                  src={qoz}
                  alt="Qoz"
                  style={{
                    width: "67%",
                    height: "65%",
                    objectFit: "contain",
                  }}
                />
              </span>
            </span>
          );
        }
      }
      return char;
    });
  };

  return (
    <>
      <div ref={containerRef} className="overflow-x-hidden">
        <motion.div
          style={{ translateX: scrollValue, transitionDuration: "1s" }}
        >
          <h1 className={`text-transparent webkit-text-stroke-width-1 webkit-text-stroke-primary opacity-20 xl:text-[324px] lg:text-[200px] md:text-[170px] sm:text-[140px] text-[100px] whitespace-nowrap font-extrabold leading-135 ${custom_aquire.className} `}>
            {sectionName}
          </h1>
        </motion.div>
      </div>

      <div className="container relative">
        <div
          className={cn(
            `xl:-mt-52 -mt-16 xl:ml-12.5 lg:ml-9 md:ml-7 ml-3 after:contents-[""] after:absolute after:left-[12px] after:top-0 after:w-[1px] after:h-full after:bg-primary`
          )}
        >
          {/* Section Title */}
          <h2
            className={cn(
              `[font-size:_clamp(48px,7vw,130px)] font-extrabold leading-110 text-primary-foreground mb-5  ${text_muted} ${
                sectionTitle === "AZALI" ? custom_aquire.className
                  : ""
              }`
            )}
          >
            {renderTitleWithImage(sectionTitle, wrapIIndices)}
          </h2>

          <span
            className={cn(`block w-[300px] h-[1px] bg-primary ${bg_muted}`)}
          ></span>
          <div className="flex md:flex-row flex-col justify-between md:items-center">
            <h5
              className={cn(
                `text-primary-foreground lg:text-[35px] sm:text-3xl text-2xl font-semibold mt-4 max-w-[690px] md:mb-0 mb-7 !leading-160 ${text_muted}`
              )}
            >
              {sectionDesc}
            </h5>
            {button_text && (
              <Link href={link}>
                <ButtonOutline
                  className={cn(
                    `2sm:px-10 px-3 after:left-0 after:${bg_muted}`
                  )}
                >
                  {button_text} <RightArrow height={"22"} width={"35"} />
                </ButtonOutline>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
