
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

import Header from "../components/layout/header";
import MainPage from "../pages/main/main";
import BalancePage from "../pages/balance/Balance";

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
                path: "/balance",
                element: <BalancePage subject="최근 등록 벨런스 게임" />,
            },
        ],

];

export default router;
