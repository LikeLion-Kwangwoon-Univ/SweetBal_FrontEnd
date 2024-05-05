import { styled } from 'styled-components'
import SingleListBox from './singleListBox'
import { IoIosArrowForward } from 'react-icons/io'

function Group4x4ListBox() {
	return (
		<Container>
			<Title>
				최고 인기
				<Icon>
					<IoIosArrowForward />
				</Icon>
			</Title>
			<>
				{Array(4)
					.fill(0)
					.map(() => (
						<SingleListBox />
					))}
			</>
		</Container>
	)
}
export default Group4x4ListBox

const Container = styled.div`
	width: 370px;
	height: 250px;
	border-radius: 15px;
	background-color: white;
	margin-top: 20px;
`
const Title = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin: 10px;
	display: flex;
	align-items: center;
	* {
		margin-left: 5px;
	}
`
const Icon = styled.div`
	cursor: pointer;
`
