import "./App.css";
import Navbar from "./components/Navbar";
import TopSetting from "./components/TopSetting";
import SubSetting from "./components/SubSetting";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Navbar />
        <div className="w-full">
          <TopSetting />
          <SubSetting />
        </div>
      </div>
    </>
  );
}

export default App;
