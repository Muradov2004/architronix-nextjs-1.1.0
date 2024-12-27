"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import DropDownMenu from "./dropDownMenu";
import MegaMenu from "./megaMenu";
import Logo from "@/assets/icons/logo";
import Logo2 from "@/assets/icons/azali.png";

import Search from "@/assets/icons/search";
import { menuList } from "@/lib/fackData/menuList";
import Offcanvas from "./offCanvas";
import Cart from "./cart";
import { cn, countCartProductQuantity } from "@/lib/utils";
import ShopCart from "@/assets/icons/shopCart";
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import useActiveNavLink from "@/hooks/useActiveNavLink";
import useStickyHeader from "@/hooks/useStickyHeader";
import Image from "next/image";
import DropDownHeader from "./DropDownHeader";

const BottomNavbar = ({ linkColor }) => {
  const { products } = useSelector((state) => state.addToCart);
  const [offcanvaseActive, setOffcanvaseActive] = useState(false);

  useStickyHeader(linkColor);
  const pathName = usePathname();
  useActiveNavLink(pathName);

  return (
    <>
      <div className="bottom-navbar flex justify-between items-center">
        <div>
          <Link
            href="/home-1"
            className={cn(`logo text-primary-foreground ${linkColor}`)}
          >
            <Image src={Logo2} alt="Logo" height="11" width="100" />
          </Link>
        </div>
        <nav>
          <ul className="flex items-center">
            {menuList.map(({ id, isDropdown, name, path, isMegaMenu }) => {
              return (
                <li key={id} className="group">
                  <Link
                    href={path}
                    data-id={id}
                    className={cn(
                      `nav-link text-xl font-medium px-7 py-[36px] flex items-center group-hover:bg-primary group-hover:text-secondary-foreground ${linkColor}`
                    )}
                  >
                    {name}
                    {(isDropdown || isMegaMenu) && (
                      <span
                        className={`transition-all duration-500 rotate-180 group-hover:rotate-0 group-hover:text-secondary-foreground`}
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
                  {/* Dropdown Menüsü */}
                  {isDropdown?.length && (
                    <DropDownHeader dropDownList={isDropdown} parentId={id} />
                  )}
                  {/* Mega Menü */}
                  {isMegaMenu?.length && (
                    <MegaMenu dropDownList={isMegaMenu} parentId={id} />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <Offcanvas
        setOffcanvaseActive={setOffcanvaseActive}
        offcanvaseActive={offcanvaseActive}
      />
    </>
  );
};

export default BottomNavbar;
