import { styled } from 'styled-components'
import { FlexCenterCSS } from '../../styles/common'
import { useNavigate } from 'react-router-dom'

function NewBtn() {
	const navigate = useNavigate()

	const HandleNew = () => {
		navigate('/register')
	}

	return <Container onClick={HandleNew}>New</Container>
}
export default NewBtn

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
