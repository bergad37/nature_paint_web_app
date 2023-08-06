import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="w-full flex flex-wrap items-center justify-between px-36 py-4 bg-white ">
      <div className="cursor-pointer">
        <Image src="/NATURE.png" alt="" priority width={100} height={100} />
      </div>
      <div>
        <ul className="flex gap-16 cursor-pointer font-medium">
          <li className="text-primaryColor font-semibold hover:text-primaryColor hover:font-semibold transition ease-in-out delay-150 ">
            Home
          </li>
          <li className="hover:text-primaryColor hover:font-semibold transition ease-in-out delay-150 ">
            About Us
          </li>
          <li className="hover:text-primaryColor hover:font-semibold">
            Products
          </li>
          <li className="hover:text-primaryColor hover:font-semibold">
            Projects
          </li>
          <li className="hover:text-primaryColor hover:font-semibold">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
}
