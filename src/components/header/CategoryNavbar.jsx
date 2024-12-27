"use client";
import React, { useState, useEffect } from "react";
import { menuListTwo } from "@/lib/fackData/menuListTwo";
import DropDownMenu from "./dropDownMenu";
import MegaMenuTwo from "./megaMenuTwo";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import ProgressAndNatigation from "../ui/progressAndNatigation";
import "swiper/css";

const CategoryNavbar = ({
  selectedCategory,
  setSelectedCategory,
  selectedSubCategory,
  setSelectedSubCategory,
}) => {
  const [title, setTitle] = useState(menuListTwo[0]?.name || ""); // Varsayılan başlık
  const [activeCategory, setActiveCategory] = useState(null);
  const [dropdown, setDropDown] = useState(false); // Aktif kategori ID'sini tutuyoruz.
  const pagination = {
    clickable: true,
    el: ".progressbar-pagination",
    type: "progressbar",
  };

  const handleCategorySelect = (categoryName, isDropdown, id) => {
    console.log(
      `Category Selected: ${categoryName}, isDropdown: ${isDropdown}, ID: ${id}`
    );
    if (isDropdown) {
      // Dropdown'ı aç/kapat
      setDropDown(true);
      setActiveCategory((prev) => (prev === id ? null : id));
    } else {
      // Dropdown'ı kapat ve kategori seçimini güncelle
      setTitle(categoryName);
      setSelectedSubCategory(null);
      setSelectedCategory(categoryName);
      setActiveCategory(null);
      setDropDown(false);
    }
    console.log(`Active Category: ${activeCategory}`);
  };

  // Automatically close the dropdown if the active category is null
  useEffect(() => {
    if (!activeCategory) {
      setDropDown(false);
    }
  }, [activeCategory]);

  return (
    <header className="w-full flex justify-center py-6 bg-gray-100">
      {/* Desktop Navbar */}
      <div className="container-fluid">
        <div>
          <Swiper
            spaceBetween={10}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              700: {
                slidesPerView: 4,
              },
              1300: {
                slidesPerView: 6,
              },
            }}
            pagination={pagination}
            loop={true}
            modules={[Pagination, Navigation]}
            style={!dropdown ? { height: "100%" } : { height: "400px" }}
          >
            {menuListTwo.map(({ id, name, isDropdown, isMegaMenu }) => (
              <SwiperSlide key={id}>
         <li key={id} className="group relative">
                  <button
                    className={`text-lg font-medium w-40 h-12 ${
                      selectedCategory === name
                        ? "bg-primary text-white"
                        : "bg-secondary text-black"
                    } shadow-md hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center`}
                    onClick={() => handleCategorySelect(name)}
                    onMouseEnter={() => setDropDown(true)} // Fare üzerine geldiğinde çalışır
                    onMouseLeave={() => setDropDown(false)} 
                  >
                    {name}
                    {(isDropdown || isMegaMenu) && (
                      <span className="ml-2 transition-transform duration-300 transform group-hover:rotate-180">
                        <svg
                          width="12"
                          height="9"
                          viewBox="0 0 12 9"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11 8L6 2L1 8" />
                        </svg>
                      </span>
                    )}
                  </button>
               
                  {isDropdown && (
                    <DropDownMenu
                      dropDownList={isDropdown}
                      parentId={id}
                      bgColor={"bg-primary"}
                      setSelectedSubCategory={setSelectedSubCategory}
                      setSelectedCategory={setSelectedCategory}
                      setTitle={setTitle}
                    />
                  )}
                  {isMegaMenu && (
                    <MegaMenuTwo dropDownList={isMegaMenu} parentId={id} />
                  )}
                </li>
              </SwiperSlide>
            ))}
            <div className="container">
              <ProgressAndNatigation />
            </div>
          </Swiper>
        </div>
        {/* Title */}
        <div className="ml-[6.5%] left-[10%] mt-11 text-center w-max">
          <h2 className="text-2xl font-semibold text-primary-foreground">
            {title}
          </h2>
          <div className="w-full h-[1px] bg-primary-foreground mt-2 mb-20"></div>
        </div>
      </div>
    </header>
  );
};

export default CategoryNavbar;
