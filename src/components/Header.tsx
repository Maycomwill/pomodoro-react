import React from "react";

export function Header() {
  return (
    <div className="w-screen items-center pt-3 pb-2 px-4 gap-4 h-full flex flex-1 border-b-2 border-gray-100">
      <div className="">
        <a href="">
          <img src="logo.svg" alt="Author's logo" width={56} height={56} />
        </a>
      </div>
      <div className="w-full flex items-center justify-center sm:block sm:px-4">
        <a href="" className="flex gap-1">
          <h1 className="text-2xl font-bold text-mainblue">Pomodoro</h1>
          <h1 className="text-2xl font-bold text-maingreen">Timer</h1>
        </a>
      </div>
    </div>
  );
}
