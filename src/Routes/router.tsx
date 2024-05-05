import ErrorPage from "../components/error/Error";
import Header from "../components/layout/header";
import LoadingPage from "../components/loading/Loading";
import ListPage from "../pages/list/ListPage";
import MainPage from "../pages/main/main";

const router = [
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/error",
        element: <ErrorPage />,
      },
      {
        path: "/list",
        element: <ListPage />,
      },
    ],
  },
  {
    path: "/loading",
    element: <LoadingPage />,
  },
];

export default router;
