"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo2 from "@/assets/icons/azali.png";
import MenuIcon from "@/assets/icons/menuIcon";
import { IoMdClose } from "react-icons/io";
import { menuList } from "@/lib/fackData/menuList";
import Search from "@/assets/icons/search";
import ShopCart from "@/assets/icons/shopCart";
import { cn, countCartProductQuantity } from "@/lib/utils";
import Offcanvas from "./offCanvas";
import Cart from "./cart";
import { useSelector } from "react-redux";
import useOverflowHidden from "@/hooks/useOverflowHidden";
import Image from "next/image";
import Flag1 from "@/assets/referances/azerbaijan.png";
import Flag2 from "@/assets/referances/world.png";
import Flag3 from "@/assets/referances/united-states-of-america.png";
import LanguageDropDown from "./LanguageDropDown";
const MobileNavbar = ({ linkColor }) => {
  const { products } = useSelector((state) => state.addToCart);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [dropDownActive, setDropDownActive] = useState("");
  const [offcanvaseActive, setOffcanvaseActive] = useState(false);
  const [cartActive, setCartActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  const languageMenu = [
    {
      id: 1,
      name: selectedLanguage,
      path: "#",
      isMegaMenu: false,
      isDropdown: [
        {
          id: 1,
          name: "AZ",
          path: "#",
          flag: Flag1,
        },
        {
          id: 2,
          name: "EN",
          path: "#",
          flag: Flag3,
        },
        {
          id: 3,
          name: "RU",
          path: "#",
          flag: Flag2,
        },
      ],
    },
  ];
  useOverflowHidden(isMenuActive);

  const handleDropDown = (e, id, isDropdown, isMegaMenu) => {
    // e.preventDefault()

    if (isDropdown.length || isMegaMenu.length) {
      setDropDownActive(dropDownActive ? "" : id);
      // setIsMenuActive(true)
    } else {
      setIsMenuActive(false);
    }
  };

  const handleLanguage=(name)=>{
    setSelectedLanguage(name)
}

  return (
    <div className="mobile-navbar">
      <div className="bg-[#f9f9f9] relative overflow-x-clip px-2.5">
        <div className="container-fluid ">
          <div className="flex items-center justify-between py-4">
            <div>
              <Link
                href="/home-1"
                className={cn(`logo text-primary-foreground `)}
              >
                <Image src={Logo2} alt="Logo" height="11" width="100" />
              </Link>
            </div>
            <div>
              <nav
                className={`max-h-screen min-h-screen overflow-y-auto bg-[#F9FFFC] absolute transition-all duration-500 ${
                  isMenuActive ? "right-0" : "sm:-right-full -right-[150%]"
                } top-0 z-50 py-4 px-4`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <Link
                      href="/home-1"
                      className={cn(`logo text-primary-foreground `)}
                    >
                      <Image src={Logo2} alt="Logo" height="11" width="100" />
                    </Link>
                  </div>
                  <div onClick={() => setIsMenuActive(false)}>
                    <IoMdClose className="text-2xl cursor-pointer" />
                  </div>
                </div>
                <ul className="mt-7">
                  {menuList.map(
                    (
                      { id, isDropdown, name, path, isMegaMenu },
                      parentItem
                    ) => {
                      return (
                        <li
                          key={id}
                          onClick={(e) =>
                            handleDropDown(e, id, isDropdown, isMegaMenu)
                          }
                        >
                          <Link
                            href={path}
                            data-id={id}
                            className={`nav-link text-xl font-medium px-4 py-4 flex items-center gap-2 transition-all duration-500 text-primary-foreground ${
                              dropDownActive === id
                                ? "bg-primary text-secondary-foreground"
                                : ""
                            }`}
                          >
                            {name}
                            {(isDropdown || isMegaMenu) && (
                              <span
                                className={` transition-all duration-500 rotate-180 ${
                                  dropDownActive === id
                                    ? "rotate-0 text-secondary-foreground"
                                    : ""
                                }`}
                              >
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
                          </Link>
                          {isDropdown && (
                            <ul
                              className={`transition-all duration-500 max-h-0 overflow-hidden px-4 pb-2 ${
                                dropDownActive === id
                                  ? "max-h-[500px] bg-primary text-secondary-foreground "
                                  : ""
                              }`}
                            >
                              {isDropdown.map(({ id, name, path }) => {
                                return (
                                  <li key={id} className="leading-10">
                                    <Link
                                      data-id={parentItem.id}
                                      onClick={() => setIsMenuActive(false)}
                                      href={path}
                                      className='dropdown-item text-secondary-foreground text-xl font-medium  inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full '
                                    >
                                      {name}
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                          {isMegaMenu && (
                            <ul
                              className={`transition-all duration-500 max-h-0 overflow-hidden px-4 pb-2 ${
                                dropDownActive === id
                                  ? "max-h-[700px] bg-primary text-secondary-foreground "
                                  : ""
                              }`}
                            >
                              {isMegaMenu.map(({ id, menus }) => {
                                return (
                                  <ul key={id}>
                                    {menus.map(({ id, name, path, desc }) => {
                                      return (
                                        <li key={id} className="pb-5">
                                          <Link
                                            data-id={parentItem.id}
                                            onClick={() =>
                                              setIsMenuActive(false)
                                            }
                                            href={path}
                                            className='dropdown-item text-secondary-foreground text-xl font-medium inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full '
                                          >
                                            {name}
                                          </Link>
                                          <span className="block text-secondary-foreground_rgba text-sm">
                                            {desc}
                                          </span>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      );
                    }
                  )}
                  <div>
                    <ul>
                      {languageMenu.map(
                        (
                          { id, isDropdown, name, path, isMegaMenu },
                          parentItem
                        ) => {
                          return (
                            <li
                              key={id}
                              onClick={(e) =>
                                handleDropDown(e, id, isDropdown, isMegaMenu)
                              }
                            >
                              <Link
                                href={path}
                                data-id={id}
                                className={`nav-link text-xl font-medium px-4 py-4 flex items-center gap-2 transition-all duration-500 text-primary-foreground ${
                                  dropDownActive === id
                                    ? "bg-primary text-secondary-foreground"
                                    : ""
                                }`}
                              >
                                {name}
                                {(isDropdown || isMegaMenu) && (
                                  <span
                                    className={` transition-all duration-500 rotate-180 ${
                                      dropDownActive === id
                                        ? "rotate-0 text-secondary-foreground"
                                        : ""
                                    }`}
                                  >
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
                              </Link>
                              {isDropdown && (
                                <ul
                                  className={`transition-all duration-500 max-h-0 overflow-hidden px-4 pb-2 ${
                                    dropDownActive === id
                                      ? "max-h-[500px] bg-primary text-secondary-foreground "
                                      : ""
                                  }`}
                                >
                                  {isDropdown.map(
                                    ({ id, name, path, flag }) => {
                                      return (
                                        <li key={id} className="leading-10">
                                          <Link
                                            data-id={parentItem.id}
                                            onClick={() =>{
                                              setIsMenuActive(false)
                                             handleLanguage(name)
                                            }
                                              
                                            }
                                            href={path}
                                            className='dropdown-item text-secondary-foreground text-xl font-medium  inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full '
                                          >
                                            <div className="flex flex-row gap-4">
                                              {name}
                                              <Image
                                                src={flag}
                                                alt="Flag"
                                                className="w-7 h-7 "
                                              />
                                            </div>
                                          </Link>
                                        </li>
                                      );
                                    }
                                  )}
                                </ul>
                              )}
                              {isMegaMenu && (
                                <ul
                                  className={`transition-all duration-500 max-h-0 overflow-hidden px-4 pb-2 ${
                                    dropDownActive === id
                                      ? "max-h-[700px] bg-primary text-secondary-foreground "
                                      : ""
                                  }`}
                                >
                                  {isMegaMenu.map(({ id, menus }) => {
                                    return (
                                      <ul key={id}>
                                        {menus.map(
                                          ({ id, name, path, desc }) => {
                                            return (
                                              <li key={id} className="pb-5">
                                                <Link
                                                  data-id={parentItem.id}
                                                  onClick={() =>
                                                    setIsMenuActive(false)
                                                  }
                                                  href={path}
                                                  className='dropdown-item text-secondary-foreground text-xl font-medium inline-block relative after:transition-all after:duration-700 after:absolute after:left-0 after:bottom-0 after:contents-[""] after:w-0 after:h-[2px] after:bg-secondary after:hover:w-full '
                                                >
                                                  {name}
                                                </Link>
                                                <span className="block text-secondary-foreground_rgba text-sm">
                                                  {desc}
                                                </span>
                                              </li>
                                            );
                                          }
                                        )}
                                      </ul>
                                    );
                                  })}
                                </ul>
                              )}
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                  <div></div>
                </ul>
              </nav>
              <div
                className="text-primary-foreground"
                onClick={() => setIsMenuActive(true)}
              >
                <MenuIcon className="cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <Offcanvas
          setOffcanvaseActive={setOffcanvaseActive}
          offcanvaseActive={offcanvaseActive}
        />
        <Cart setCartActive={setCartActive} cartActive={cartActive} />
      </div>
    </div>
  );
};

export default MobileNavbar;
