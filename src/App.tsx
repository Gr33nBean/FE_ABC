import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout, { LayoutLoader } from "./components/common/Layout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import { routes } from "./constants/layout";
import Search from "./pages/Search";
import Approve from "./pages/Approve";
import Resource from "./pages/Resource";
import Profile from "./pages/Profile";
import Notification from "./pages/Notification";
import ViewImage from "./components/common/Dialog/ViewImage";
import PostDetail from "./pages/PostDetail";
import EventDetail from "./pages/EventDetail";
import Login from "./pages/Login";
import Create from "./components/common/Dialog/Create";
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
      // {
      //   path: routes.message,
      //   element: <Message />,
      // },
      {
        path: routes.approve,
        element: <Approve />,
      },
      {
        path: routes.resource,
        element: <Resource />,
      },
      // {
      //   path: routes.document,
      //   element: <Document />,
      // },
      {
        path: routes.profile,
        element: <Profile />,
        children: [
          {
            path: routes.profile + "/:uid",
            element: <Profile />,
          },
        ],
      },
      {
        path: routes.post + "/:id",
        element: <PostDetail />,
      },
      {
        path: routes.event + "/:id",
        element: <EventDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RouterProvider router={router} />
      <ViewImage />
      <Create />
    </Suspense>
  );
}

export default App;
