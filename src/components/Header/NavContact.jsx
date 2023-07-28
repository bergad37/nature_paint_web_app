import React from "react";
import Button from "@/components/Buttons/Button"; // Assuming Button component is directly inside the components folder

export default function NavContact() {
  const mediaQuery =
    "md:flex md:flex-col md:items-center md:gap-6 md:px-36 md:py-4";
  return (
    <div
      className={`flex items-center justify-between bg-primaryColor px-36 py-4 text-secondColor  w-screen`}
    >
      <p className="font-medium">Whatever your surface, we can paint it!</p>
      <div className="flex items-center gap-6">
        <p className="font-medium">CALL US +250 789 239 980</p>
        <Button className="border-2 border-secondColor text-secondColor font-medium rounded-full py-2 px-9">
          Contact us
        </Button>
      </div>
    </div>
  );
}
