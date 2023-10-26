import "./App.css";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/Io";
function App() {
  return (
    <>
      <div className="flex h-screen">
        <Navbar />
        <div className="px-6 flex justify-between w-full border-b-2 border-gray-300 h-12 items-center p-4 [&>*]:hover:cursor-pointer">
          <div className="text-small ">
            {" "}
            <Button name="Add" />
          </div>
          <div className="flex gap-4 text-xl items-center  ">
            <AiOutlineSearch />
            <IoMdNotificationsOutline />
            <div className="border-2 p-1 rounded-full">
              <AiOutlineUser />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
