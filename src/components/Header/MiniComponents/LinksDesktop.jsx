import React from "react";
import {links} from "../../../constants";
import Link from "next/link";

const LinksDeskTop = () => {
  return (
    <div>
      <nav className="hidden xl:w-full lg:flex justify-center text-black">
        <ul className="text-center text-[15px] font-medium capitalize flex gap-12">
          {links.map(({ title, path }) => (
            <li key={path} className="text-sm font-[600] pb-8 md:pb-0">
              <Link
                href={path}
                className="text-black font-[550] hover:text-green-900 hover:transition-all"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default LinksDeskTop;
