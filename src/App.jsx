import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './components/pages/Home';
import page from './components/pages/page';
import Sidebar from './components/Layouts/SideBar';
import PageText from './components/AI/PageText';
import Pricing from './components/pages/Pricing';
import PageImage from './components/AI/Page-image';

export default function App() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/App" Component={Sidebar} />
        <Route path="/Profile" Component={page} />
        <Route path="/AI" Component={PageText} />
        <Route path="/Image" Component={PageImage} />
        <Route path="/Pricing" Component={Pricing} />
      </Routes>
    </>
  );
}
