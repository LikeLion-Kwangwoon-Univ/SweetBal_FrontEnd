import { ThemeProvider } from 'styled-components'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import router from './Routes/router'

function App() {
	const RouterObject = createBrowserRouter(router)

	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<RouterProvider router={RouterObject} />
			</ThemeProvider>
		</>
	)
}

export default App
