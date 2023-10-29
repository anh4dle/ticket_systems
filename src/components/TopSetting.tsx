import React from "react";
import Button from "./Button";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/Io";
import { MdFilterList } from "react-icons/Md";
function TopSetting() {
  return (
    <div className="px-6 flex justify-between w-full border-b-2 border-gray-300 h-12 items-center p-4 [&>*]:hover:cursor-pointer">
      <div className="flex gap-4 items-center  ">
        <MdFilterList />
        <p className="font-bold">All Tickets</p>
      </div>

      <div className="flex gap-4">
        <div className="text-small">
          <Button name="Add" />
        </div>
        <div className="text-xl flex gap-4 items-center ">
          <AiOutlineSearch />
          <IoMdNotificationsOutline />
          <div className="border-2 p-1 rounded-full">
            <AiOutlineUser />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopSetting;
