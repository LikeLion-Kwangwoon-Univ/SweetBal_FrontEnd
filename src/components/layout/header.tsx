import { styled } from 'styled-components'
import { FlexCenterCSS } from '../../styles/common'
import { Outlet } from 'react-router-dom'
import logo from '../../assets/imgs/logo.svg'

function Header() {
	return (
		<>
			<Container>
				<img src={logo} alt="logo" />
			</Container>
			<Outlet />
		</>
	)
}
export default Header

const Container = styled.div`
	height: 132px;
	${FlexCenterCSS}
`
