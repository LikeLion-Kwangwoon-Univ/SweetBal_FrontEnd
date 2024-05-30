import RegisterPage from "@/query/register/register";
import ErrorPage from "../components/error/Error";
import Header from "../components/layout/header";
import BalancePage from "../pages/balance/Balance";
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
        path: "/list/:subject",
        element: <ListPage />,
      },
      {
        path: "/balance/:subject/:id",
        element: <BalancePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/*",
        element: <ErrorPage />,
      },
    ],
  },
];

export default router;
