import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./components/services/Home";
import Sidebar from "./components/services/ui/SideBar";
import page from "./components/page";

export default function App() {
  return (
    <Routes>
      <Toaster />
      <Route path="/" Component={Home} />
      <Route path="/App" Component={Sidebar} />
      <Route path="/Profile" Component={page} />
    </Routes>
  );
}
