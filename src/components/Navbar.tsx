import React from "react";
import { AiFillHome, AiOutlineFolderView } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";

function Navbar() {
  return (
    <div className="flex flex-col justify-between h-screen text-3xl bg-teal-900 w-16">
      <div className="[&>div]:text-gray-300 [&>div]:hover:cursor-pointer  w-full [&>div]:w-full [&>div]:mb-4">
        <div className="hover:text-gray-50 flex flex-col items-center">
          <AiFillHome />
        </div>
        <div className="hover:text-gray-50 flex flex-col items-center">
          <AiOutlineFolderView />
        </div>
        <div className="hover:text-gray-50 flex flex-col items-center">
          <BsFillPeopleFill />
        </div>
      </div>
      <div>Zen</div>
    </div>
  );
}

export default Navbar;
