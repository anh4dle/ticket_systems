import "./App.css";
import Navbar from "./components/Navbar";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/Io";
function App() {
  return (
    <>
      <div className="flex h-screen">
        <Navbar />
        <div className="flex justify-between w-full border-b-2 border-gray-300 h-12 items-center p-4 [&>*]:hover:cursor-pointer">
          <p>+ Add</p>
          <div className="flex gap-4 text-2xl  items-center ">
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
