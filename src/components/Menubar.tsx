import React from "react";

interface Props {}

export default function Menubar({}: Props) {
  return (
    <div className="shadow-sm static top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <p className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather Dashboard 🌩️</h2>
        </p>
        <h6>Haseeb Here 🤚🏻</h6>
      </div>
    </div>
  );
}
