import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './features/auth/components/ProtecteRoutes';
import Home from './features/gallery/pages/Home';

import React, { Suspense } from 'react';
import Loading from './features/ui/Loading';

const AuthComponent = React.lazy(
  () => import('./features/auth/components/AuthComponent'),
);
const ProfileComponent = React.lazy(
  () => import('./features/profile/components/ProfileComponent'),
);

const Sidebar = React.lazy(() => import('./features/Layouts/SideBar'));

const ChatComponent = React.lazy(
  () => import('./features/chats/componentes/chatComponent'),
);
const PageAI = React.lazy(() => import('./features/ai/components/PageText'));

const PageImage = React.lazy(
  () => import('./features/ai/components/PageImage'),
);

const Pricing = React.lazy(() => import('./features/pricing/pages/Pricing'));

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/auth',
      element: (
        <Suspense fallback={<Loading />}>
          <AuthComponent />
        </Suspense>
      ),
    },
    {
      path: '/app',
      element: (
        <Suspense fallback={<Loading />}>
          <ProtectedRoute>
            <Sidebar />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: '/profile',
      element: (
        <Suspense fallback={<Loading />}>
          <ProtectedRoute>
            <ProfileComponent />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: '/chat',
      element: (
        <Suspense fallback={<Loading />}>
          <ProtectedRoute>
            <ChatComponent />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: '/ai',
      element: (
        <Suspense fallback={<Loading />}>
          <ProtectedRoute>
            <PageAI />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: '/image',
      element: (
        <Suspense fallback={<Loading />}>
          <ProtectedRoute>
            <PageImage />
          </ProtectedRoute>
        </Suspense>
      ),
    },
    {
      path: '/pricing',
      element: (
        <Suspense fallback={<Loading />}>
          <ProtectedRoute>
            <Pricing />
          </ProtectedRoute>
        </Suspense>
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
