import { styled } from 'styled-components'
import { FlexCenterCSS } from '../../styles/common'
import { TbBrandWechat } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'

function CommentsBtn() {
	const navigate = useNavigate()

	const HandleComments = () => {
		navigate('/comments')
	}

	return (
		<Container onClick={HandleComments}>
			<TbBrandWechat size={'35'} />
		</Container>
	)
}
export default CommentsBtn

const Container = styled.div`
	width: 63px;
	height: 63px;
	position: fixed;
	border-radius: 50%;
	bottom: 60px;
	right: 40%;
	background-color: white;
	${FlexCenterCSS}
	border: 4px solid ${({ theme }) => theme.COLOR.blue4};
	cursor: pointer;
	animation: fadeIn forwards;
	&:hover {
		scale: 1.05;
	}
`
