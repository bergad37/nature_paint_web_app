import React from "react";
import {links} from "../../../constants";
import Link from "next/link";

const LinksDeskTop = () => {
  return (
    <div>
      <nav className="hidden xl:w-full lg:flex justify-center text-black">
        <ul className="text-center text-[15px] font-medium capitalize flex gap-8">
          {links.map(({ title, path }) => (
            <li key={path}>
              <Link href={path} className="text-black hover:text-gray-900">
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
