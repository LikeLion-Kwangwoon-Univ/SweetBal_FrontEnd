import { styled } from 'styled-components'
import { FlexCenterCSS } from '../../styles/common'
import { Outlet } from 'react-router-dom'

function Header() {
	return (
		<>
			<Container>
				<h1>로고 자리</h1>
			</Container>
			<Outlet />
		</>
	)
}
export default Header

const Container = styled.div`
	height: 200px;
	${FlexCenterCSS}
	background-color: ${({ theme }) => theme.COLOR.blue4};
`
