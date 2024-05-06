import ErrorPage from '../components/error/Error'
import Header from '../components/layout/header'
import BalancePage from '../pages/balance/Balance'
import ListPage from '../pages/list/ListPage'
import MainPage from '../pages/main/main'

const router = [
	{
		path: '/',
		element: <Header />,
		children: [
			{
				path: '/',
				element: <MainPage />,
			},
			{
				path: '/list',
				element: <ListPage />,
			},
			{
				path: '/balance',
				element: <BalancePage subject="최근등록밸런스" />,
			},
			{
				path: '/list',
				element: <ListPage />,
			},
		],
	},
	{
		path: '/',
		element: <Header />,
		children: [
			{
				path: '/*',
				element: <ErrorPage />,
			},
		],
	},
]

export default router
