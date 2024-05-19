import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout, { LayoutLoader } from "./components/common/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { routes } from "./constants/layout";
import Search from "./pages/Search";
import Message from "./pages/Message";
import Approve from "./pages/Approve";
import Resource from "./pages/Resource";
import Document from "./pages/Document";
import Profile from "./pages/Profile";
import Notification from "./pages/Notification";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    loader: LayoutLoader,
    children: [
      {
        path: routes.home,
        element: <Home />,
      },
      {
        path: routes.search,
        element: <Search />,
      },
      {
        path: routes.notification,
        element: <Notification />,
      },
      {
        path: routes.message,
        element: <Message />,
      },
      {
        path: routes.approve,
        element: <Approve />,
      },
      {
        path: routes.resource,
        element: <Resource />,
      },
      {
        path: routes.document,
        element: <Document />,
      },
      {
        path: routes.profile,
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
