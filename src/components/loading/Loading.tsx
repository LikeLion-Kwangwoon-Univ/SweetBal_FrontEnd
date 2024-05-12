import styled from 'styled-components'
import { FlexCenterCSS, FlexColumnCSS } from '../../styles/common'
import { SyncLoader } from 'react-spinners'
// import Logo from "../../assets/loading/logo.svg";
const LoadingPage = () => {
	return (
		<Border>
			<Container>
				{/* <LogoWrapper>
          <img src={Logo}></img>
        </LogoWrapper> */}
				<WaitSpan>잠시만 기다리세요</WaitSpan>
				<SipnnerWrapper>
					<SyncLoader color="black" size={15} />
				</SipnnerWrapper>
			</Container>
		</Border>
	)
}

export default LoadingPage

const Border = styled.div`
	${FlexCenterCSS};
`

const Container = styled.div`
	${FlexColumnCSS};
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100%;
	margin-top: 20px;
	margin: 0 auto;
`

// const LogoWrapper = styled.div`
//   width: 313px;
//   height: 141px;
//   margin: 0 auto;
//   margin-top: 250px;
// `;

const SipnnerWrapper = styled.div`
	margin-top: 25px;
`

const WaitSpan = styled.span`
	font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
	margin-top: 20px;
	margin: 0 auto;
	color: black;
	font-size: 25px;
`
