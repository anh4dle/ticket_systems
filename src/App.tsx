import "./App.css";
import Navbar from "./components/Navbar";
import TopSetting from "./components/TopSetting";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <Navbar />
        <TopSetting />
      </div>
    </>
  );
}

export default App;
