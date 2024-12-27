"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ButtonFill from "./ui/buttons/buttonFill";

const ProductGrid = ({ projects, bg_muted }) => {
  return (
    <header className="w-full flex justify-center py-6 bg-gray-100  ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10 w-full px-4"> {/* Responsive grid düzeni */}
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative mb-7 bg-white shadow-md overflow-hidden group"
          >
            {/* Resim: Varsayılan zoom ve hover anti-zoom */}
            <div className="relative w-full h-[250px] md:h-[350px] overflow-hidden"> {/* Yükseklik responsive olarak ayarlandı */}
              <Image
                src={project.project_img}
                alt={project.project_desc}
                layout="fill"
                objectFit="cover"
                priority={false}
                className="transform scale-110 transition-transform duration-500 group-hover:scale-100" // Hover anti-zoom efekti
              />
            </div>

            {/* Button ve blur alan */}
            <div className="absolute inset-0 flex flex-col justify-end z-10 transition-opacity duration-500 group-hover:opacity-0">
              <Link
                href="https://wa.link/7sfqml"
                className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10"
              >
                <ButtonFill
                  className={cn(
                    `after:z-[1] h-12 md:h-14 after:left-0 after:${bg_muted}`
                  )}
                >
                  <span className="relative z-10">Ravy Tower</span>
                </ButtonFill>
              </Link>

              <div className="absolute bottom-0 w-full bg-[rgba(210, 224, 217, 0.27)] backdrop-blur-md h-1/5 flex flex-col justify-center items-center z-0">
                <div className="text-white text-sm md:text-xl font-semibold">
                  {project.project_desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </header>
  );
};

export default ProductGrid;
