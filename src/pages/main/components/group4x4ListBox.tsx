import { styled } from 'styled-components'
import SingleListBox from './singleListBox'
import { IoIosArrowForward } from 'react-icons/io'
import { responseType } from '../../../query/get/useGetMain'

function Group4x4ListBox({ subject, list }: responseType) {
	return (
		<Container>
			<Title>
				{subject}
				<Icon>
					<IoIosArrowForward />
				</Icon>
			</Title>
			<>
				{list.map(() => (
					<SingleListBox />
				))}
			</>
		</Container>
	)
}
export default Group4x4ListBox

const Container = styled.div`
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
