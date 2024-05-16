import { styled } from 'styled-components'
import SingleListBox from './singleListBox'
import { IoIosArrowForward } from 'react-icons/io'
import { responseType } from '../../../query/get/useGetMain'
import { useNavigate } from 'react-router-dom'

function Group4x4ListBox({ subject, postList }: responseType) {
	const navigate = useNavigate()

	return (
		<Container>
			<Title onClick={() => navigate('/list')}>
				{subject}
				<IoIosArrowForward />
			</Title>
			<>
				{postList.map((item, idx) => (
					<SingleListBox key={idx} item={item} />
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
	cursor: pointer;

	width: fit-content;
`
