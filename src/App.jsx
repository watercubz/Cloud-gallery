import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './core/auth/components/ProtecteRoutes';
import './translations/i18n.js';
import React, { Suspense } from 'react';
import Loading from './ui/Loading';

const NotificationPage = React.lazy(
  () => import('./core/notification/page/PageNotfication'),
);
const Terms = React.lazy(() => import('./terms/components/Terms'));
const PrivacyPolicy = React.lazy(
  () => import('./terms/components/PrivacyPolicy'),
);
const AuthComponent = React.lazy(
  () => import('./core/auth/components/AuthComponent'),
);
const SideBar = React.lazy(() => import('./core/Layouts/SideBar'));
const ChatComponent = React.lazy(
  () => import('./core/chats/componentes/chatComponent'),
);
const ConnectAccount = React.lazy(
  () => import('./core/Layouts/ConnectComponet'),
);
const Profile = React.lazy(() => import('./profile/pages/Profile'));
const PageAI = React.lazy(() => import('./core/ai/components/PageText'));
const PageImage = React.lazy(
  () => import('./core/ai/components/PageImage.jsx'),
);
const Pricing = React.lazy(() => import('./pricing/pages/Pricing'));
const Home = React.lazy(() => import('./core/home/pages/Home'));
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
