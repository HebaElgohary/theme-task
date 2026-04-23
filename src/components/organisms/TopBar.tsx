import React from "react";
import ThemeButton  from "../atoms/ThemeButton";

export default function TopBar() {
  return (
    <div className="bg-gray-500 !p-5 flex justify-center items-center w-full gap-5">
      TopBar
      <ThemeButton />
    </div>
  );
}
