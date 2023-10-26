import React from "react";
import { AiFillHome, AiOutlineFolderView } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbCircleLetterV } from "react-icons/tb";

function Navbar() {
  return (
    <div className="flex flex-col justify-between h-screen text-3xl bg-cyan-800	w-16 [&>div]:text-gray-300 [&>div]:hover:cursor-pointer ">
      <div className=" w-full [&>div]:w-full [&>div]:mt-4">
        <div className="hover:text-gray-50 flex justify-center">
          <AiFillHome />
        </div>
        <div className="hover:text-gray-50 flex justify-center">
          <AiOutlineFolderView />
        </div>
        <div className="hover:text-gray-50 flex justify-center">
          <BsFillPeopleFill />
        </div>
      </div>
      <div className="mb-4 flex justify-center text-white text-4xl">
        <TbCircleLetterV />
      </div>
    </div>
  );
}

export default Navbar;
