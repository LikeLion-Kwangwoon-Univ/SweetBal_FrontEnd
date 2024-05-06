import { styled } from 'styled-components'

function SingleListBox() {
	return (
		<Container>
			<Title>{'오늘 저녁을 돈까스 밥으로 '.substr(0, 15) + '...'}</Title>
			<VS>VS</VS>
			<Title>{'오늘 저녁을 돈까스 밥으로'.substr(0, 15) + '...'}</Title>
		</Container>
	)
}
export default SingleListBox

const Container = styled.div`
	background-color: ${({ theme }) => theme.COLOR.blue1};
	margin: 12px 12px;
	padding: 10px;
	border-radius: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`
const Title = styled.div`
	font-size: 12px;
`
const VS = styled.div`
	font-size: 20px;
	font-weight: bold;
`
