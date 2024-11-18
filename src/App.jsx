import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './core/auth/components/ProtecteRoutes';
import Home from '../src/core/home/pages/Home';

import React, { Suspense } from 'react';
import Loading from '../src/ui/Loading';
import PrivacyPolicy from '../src/terms/components/PrivacyPolicy';

const NotificationPage = React.lazy(
  () => import('./core/notification/page/PageNotfication'),
);
const Terms = React.lazy(() => import('./terms/components/Terms'));

const AuthComponent = React.lazy(
  () => import('./core/auth/components/AuthComponent'),
);
const Sidebar = React.lazy(() => import('./core/Layouts/SideBar'));

const ChatComponent = React.lazy(
  () => import('./core/chats/componentes/chatComponent'),
);

const PageAI = React.lazy(() => import('./core/ai/components/PageText'));

const PageImage = React.lazy(() => import('./core/ai/components/PageImage'));

const Pricing = React.lazy(() => import('./pricing/pages/Pricing'));

const Toaster = React.lazy(() =>
  import('react-hot-toast').then((module) => ({ default: module.Toaster })),
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
      path: '/notification',
      element: (
        <Suspense fallback={<Loading />}>
          <ProtectedRoute>
            <NotificationPage />
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
    {
      path: '/terms',
      element: (
        <Suspense fallback={<Loading />}>
          <Terms />
        </Suspense>
      ),
    },
    {
      path: '/privacy',
      element: (
        <Suspense fallback={<Loading />}>
          <PrivacyPolicy />
        </Suspense>
      ),
    },
  ]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Toaster />
      </Suspense>

      <RouterProvider router={router} />
    </>
  );
}
