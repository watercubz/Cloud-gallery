import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './core/auth/components/ProtecteRoutes.jsx';
import './translations/i18n.js';
import React, { Suspense } from 'react';
import Loading from './ui/Loading.jsx';

const NotificationPage = React.lazy(
  () => import('./core/notification/page/PageNotfication.jsx'),
);
const Terms = React.lazy(() => import('./terms/components/Terms.jsx'));
const PrivacyPolicy = React.lazy(
  () => import('./terms/components/PrivacyPolicy.jsx'),
);
const AuthComponent = React.lazy(
  () => import('./core/auth/components/AuthComponent.jsx'),
);
const SideBar = React.lazy(() => import('./core/layouts/SideBar.jsx'));
const ChatComponent = React.lazy(
  () => import('./core/chats/componentes/chatComponent.jsx'),
);
const ConnectAccount = React.lazy(
  () => import('./core/layouts/ConnectComponet'),
);
const Profile = React.lazy(() => import('./profile/pages/Profile.jsx'));
const PageAI = React.lazy(() => import('./core/ai/components/PageText.jsx'));
const PageImage = React.lazy(
  () => import('./core/ai/components/PageImage.jsx'),
);
const Pricing = React.lazy(() => import('./pricing/pages/Pricing.jsx'));
const Home = React.lazy(() => import('./core/home/pages/Home.jsx'));
const Toaster = React.lazy(() =>
  import('react-hot-toast').then((module) => ({ default: module.Toaster })),
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    element: <AuthComponent />,
  },
  {
    path: '/app',
    element: (
      <ProtectedRoute>
        <SideBar />
      </ProtectedRoute>
    ),
  },
  {
    path: '/chat',
    element: (
      <ProtectedRoute>
        <ChatComponent />
      </ProtectedRoute>
    ),
  },
  {
    path: '/ai',
    element: (
      <ProtectedRoute>
        <PageAI />
      </ProtectedRoute>
    ),
  },
  {
    path: '/image',
    element: (
      <ProtectedRoute>
        <PageImage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/notification',
    element: (
      <ProtectedRoute>
        <NotificationPage />
      </ProtectedRoute>
    ),
  },
  {
    path: '/connect',
    element: (
      <ProtectedRoute>
        <ConnectAccount />
      </ProtectedRoute>
    ),
  },
  {
    path: '/pricing',
    element: (
      <ProtectedRoute>
        <Pricing />
      </ProtectedRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: '/terms',
    element: <Terms />,
  },
  {
    path: '/privacy',
    element: <PrivacyPolicy />,
  },
]);

export default function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Toaster />
      <RouterProvider router={router} />
    </Suspense>
  );
}
