import React from "react";
import Button from "@/components/Buttons/Button"; // Assuming Button component is directly inside the components folder

export default function NavContact() {
  const mediaQuery =
    "flex md:flex-col items-center md:gap-6 md:px-36 md:py-4";
  return (
    <div
      className={`w-full flex flex-col-reverse items-start justify-center md:flex-row md:gap-4 lg:flex-row md:items-center lg:items-center  lg:justify-between bg-primaryColor px-7 md:px-7 lg:px-36 py-4 `}
    >
      <p className="font-medium text-[15px] text-secondColor">Whatever your surface, we can paint it!</p>
      {/* contact details message */}
      <div className="flex flex-row flex-wrap gap-3 justify-around items-center md:flex-row  md:items-center lg:items-center lg:gap-6">
        <p className="font-semibold text-[15px] text-secondColor">CALL US +250 789 239 980</p>
        {/* contact button */}
        <Button className="border-2 border-secondColor text-secondColor font-medium rounded-3xl py-1  lg:py-2 px-4 lg:px-6">
          Contact us
        </Button>
      </div>
    </div>
  );
}
