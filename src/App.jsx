import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './components/services/widget/Home';
import Sidebar from './components/services/Layouts/SideBar';
import page from './components/page';
import PageAI from './components/AI/PageAI';
import ImageDetect from './components/AI/ImageDetect';
import Pricing from './components/services/shared/Pricing';

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
