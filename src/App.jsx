import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './features/auth/components/ProtecteRoutes';
import Home from './features/gallery/pages/Home';
import Sidebar from './features/Layouts/SideBar';
import Pricing from './features/pricing/pages/Pricing';
import PageImage from './features/ai/components/PageImage';
import PageAI from './features/ai/components/PageText';
import ProfileComponent from './features/profile/components/ProfileComponent';

import React, { Suspense } from 'react';
import ChatComponent from './features/chats/componentes/chatComponent';

const AuthComponent = React.lazy(
  () => import('./features/auth/components/AuthComponent'),
);

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/auth',
      element: (
        <Suspense fallback={console.log('lazyyyy')}>
          <AuthComponent />
        </Suspense>
      ),
    },
    {
      path: '/app',
      element: (
        <ProtectedRoute>
          <Sidebar />
        </ProtectedRoute>
      ),
    },
    {
      path: '/profile',
      element: (
        <ProtectedRoute>
          <ProfileComponent />
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
      path: '/pricing',
      element: (
        <ProtectedRoute>
          <Pricing />
        </ProtectedRoute>
      ),
    },
  ]);

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
}
