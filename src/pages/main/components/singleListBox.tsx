import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'
import { listType } from '../../../query/get/useGetMain'

function SingleListBox({ item }: { item: listType }) {
	const navigate = useNavigate()
	console.log(item)
	return (
		<Container onClick={() => navigate('/balance')}>
			<>
				<Title>
					{item.title1.length >= 15
						? item.title1.substr(0, 15) + '..'
						: item.title1}
				</Title>
				<VS>VS</VS>
				<Title>
					{item.title2.length >= 15
						? item.title2.substr(0, 15) + '..'
						: item.title2}
				</Title>
			</>
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
	width: 100%;
	text-align: center;
`
const VS = styled.div`
	font-size: 20px;
	font-weight: bold;
`
