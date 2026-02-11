import { RouterProvider, createRouter, createRootRoute, createRoute, Outlet } from '@tanstack/react-router';
import { createHashHistory } from '@tanstack/react-router';
import HomePage from './pages/HomePage';
import ProductsCategoriesPage from './pages/ProductsCategoriesPage';
import AboutPage from './pages/AboutPage';
import ContactInquiryPage from './pages/ContactInquiryPage';
import AdminInquiriesPage from './pages/AdminInquiriesPage';
import NotFoundPage from './pages/NotFoundPage';
import SiteLayout from './components/layout/SiteLayout';

const rootRoute = createRootRoute({
  component: () => (
    <SiteLayout>
      <Outlet />
    </SiteLayout>
  ),
  notFoundComponent: NotFoundPage,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const productsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/products',
  component: ProductsCategoriesPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactInquiryPage,
});

const adminRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/admin',
  component: AdminInquiriesPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  productsRoute,
  aboutRoute,
  contactRoute,
  adminRoute,
]);

const hashHistory = createHashHistory();

const router = createRouter({
  routeTree,
  history: hashHistory,
  defaultPreload: 'intent',
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
