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
                element: (
                    <BalancePage
                        subject="최근 등록 벨런스 게임"
                        eyesScore={12}
                    />
                ),
            },
        ],
    },
];

export default router;
