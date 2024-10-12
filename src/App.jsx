import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/services/Home";
import Sidebar from "./components/services/ui/SideBar";
import page from "./components/page";
import PageAI from "./components/services/AI/PageAI";
import ImageDetect from "./components/services/AI/ImageDetect";

export default function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/App" Component={Sidebar} />
        <Route path="/Profile" Component={page} />
        <Route path="/AI" Component={PageAI} />
        <Route path="/Image" Component={ImageDetect} />
      </Routes>
    </>
  );
}
