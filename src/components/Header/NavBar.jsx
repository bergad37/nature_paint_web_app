"use client";
import Image from "next/image";
import Link from "next/link";
import { links } from "../../constants";
import LinksDesktop from "@/components/Header/MiniComponents/LinksDeskTop";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


export default function NavBar() {
  const [openMenu, setOpenMenu] = useState();

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="w-full z-10 fixed py-6 px-10 md:px-16 lg:px-36 flex items-center justify-between shadow-sm bg-secondColor">
      {/* Web logo */}
      <div className="cursor-pointer">
        <h1 className="text-base font-bold">Nature-[Logo]</h1>
        {/* <Image src="/NATURE.png" alt="" priority width={100} height={100} /> */}
      </div>
      {/* Desktop links/Tablet */}
      <LinksDesktop />

      {openMenu ? (
        <AiOutlineClose
          onClick={handleOpenMenu}
          className="lg:hidden z-10 text-[32px]cursor-pointer text-black"
        />
      ) : (
        <AiOutlineMenu
          onClick={handleOpenMenu}
          className="lg:hidden z-10 text-[32px]  cursor-pointer text-black"
        />
      )}
      <nav
        className={
          openMenu
            ? "fixed top-0 right-0 h-screen w-[70%] text-center bg-sThemeColor-cardBg/70 backdrop-blur-[80px] pt-28 ease-in-out duration-300"
            : "fixed top-0 right-[-100%] h-screen w-[70%] text-center bg-sThemeColor-cardBg/70 backdrop-blur-[80px] pt-28 ease-in-out duration-300"
        }
      >
        <ul className="text-center uppercase">
          {links.map(({ title, path }, index) => {
            return (
              <li className="text-lg font-bold pb-8" key={index}>
                <a
                  className="hover:underline underline-offset-[16px]"
                  href={path}
                  onClick={() => setOpenMenu(false)}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          className="w-40 p-2 text-xs text-center uppercase border rounded-lg hover:text-white bg-sThemeColor-accent ease-in-out duration-200"
          href="/services"
        >
          Contact us
        </a>
      </nav>
    </header>
  );
}
