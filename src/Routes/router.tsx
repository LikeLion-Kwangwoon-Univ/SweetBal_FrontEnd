import Header from '../components/layout/header'
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
		],
	},
]

export default router
