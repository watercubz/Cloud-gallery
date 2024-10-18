import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './components/pages/Home';
import page from './components/pages/page';
import Sidebar from './components/Layouts/SideBar';
import PageAI from './components/AI/PageAI';
import ImageDetect from './components/AI/ImageDetect';
import Pricing from './components/pages/Pricing';

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
        <Route path="/Pricing" Component={Pricing} />
      </Routes>
    </>
  );
}
