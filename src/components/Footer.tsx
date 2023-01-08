import React from "react";
import logo from '../assets/logo.svg'

export function Footer() {
  return (
    <div className="w-full flex items-center justify-center gap-2 text-center text-white fixed bottom-0 pb-2 text-xs sm:text-md">
      <span>Desenvolvido por Maycom Willams&reg;</span>
      <div className="">
        <img src={logo} alt="Author's logo" width={24} height={24} />
      </div>
    </div>
  );
}
