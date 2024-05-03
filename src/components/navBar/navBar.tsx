import { styled } from 'styled-components'
import { IoIosArrowBack } from 'react-icons/io'
import { LiaEyeSolid } from 'react-icons/lia'

function NavBar() {
	return (
		<Container>
			<Side>
				<EventIoIosArrowBack />
				<Back>최고 인기</Back>
			</Side>
			<Side>
				<LiaEyeSolid />
				<Views>12</Views>
			</Side>
		</Container>
	)
}
export default NavBar

const Container = styled.div`
	height: 40px;
	border-radius: 10px 10px 0 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 10px;
`
const Side = styled.div`
	display: flex;
	align-items: center;

	height: 100%;
`

const Back = styled.div`
	font-size: 16px;
	font-weight: bold;
	margin-left: 5px;
`
const Views = styled.div`
	font-size: 12px;
	margin-left: 6px;
	font-weight: bold;
`
const EventIoIosArrowBack = styled(IoIosArrowBack)`
	cursor: pointer;
`
