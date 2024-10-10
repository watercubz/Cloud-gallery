import { Routes, Route } from "react-router-dom";
import Home from "./components/services/Home";
import Sidebar from "./components/services/ui/SideBar";
export default function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/App" Component={Sidebar} />
    </Routes>
  );
}
