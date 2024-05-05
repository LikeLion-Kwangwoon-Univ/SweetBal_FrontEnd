import ErrorPage from "../components/error/Error";
import Header from "../components/layout/header";
// import ListPage from "../pages/list/list";
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
    ],
  },
];

export default router;
