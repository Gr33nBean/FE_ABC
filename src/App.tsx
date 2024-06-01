import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Create from "./components/common/Dialog/Create";
import ViewImage from "./components/common/Dialog/ViewImage";
import Layout, { LayoutLoader } from "./components/common/Layout";
import ProcessLoading from "./components/common/Layout/Loading/ProcessLoading";
import { routes } from "./constants/layout";
import Approve from "./pages/Approve";
import Error from "./pages/Error";
import EventDetail from "./pages/EventDetail";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Notification from "./pages/Notification";
import PostDetail from "./pages/PostDetail";
import Profile from "./pages/Profile";
import Resource from "./pages/Resource";
import Search from "./pages/Search";
import Comment from "./components/common/Dialog/Create/Comment";
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
      },
      {
        path: routes.user + "/:uid",
        element: <Profile />,
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
      <Comment />
      <ProcessLoading />
    </Suspense>
  );
}

export default App;
