import styled from 'styled-components'
import Outlet from '../../assets/imgs/Error/OuletImg.svg'
import Error from '../../assets/imgs/Error/ErrorImg.svg'
import VsImg from '../../assets/imgs/Error/VsImg.svg'
import ErrorRbot from '../../assets/imgs/Error/ErrorRobot.svg'
import { FlexCenterCSS, FlexColumnCSS } from '../../styles/common'

const ErrorPage = () => {
	return (
		<Border>
			<Container>
				<OuletWrapper>
					<img src={Outlet}></img>
				</OuletWrapper>
				<ErrorWrapper>
					<img src={Error}></img>
				</ErrorWrapper>
				<GameWrapper>
					<TitleBox>메인 페이지 돌아가기</TitleBox>
					<SubTitleContent>차분한 마음으로 돌아가기</SubTitleContent>
					<ImgWrapper>
						<img src={VsImg}></img>
					</ImgWrapper>
					<TitleBox>새로고침 하기</TitleBox>
					<SubTitleContent>그런다고 될까...?</SubTitleContent>
				</GameWrapper>
				<ErrorRobotWrapper>
					<img src={ErrorRbot}></img>
				</ErrorRobotWrapper>
				{/* <LoadingPage /> */}
			</Container>
		</Border>
	)
}

export default ErrorPage

const Border = styled.div`
	${FlexCenterCSS};
	margin-top: 50px;
`

const Container = styled.div`
	${FlexColumnCSS};
	align-items: center;
	background-color: white;
	display: flex;
	width: 350px;
	margin: 0 auto;
	height: fit-content;
	border-radius: 13px;
`

const OuletWrapper = styled.div`
	width: 351px;
	height: 34px;
`

const ErrorWrapper = styled.div`
	width: 203px;
	height: 95px;
	${FlexCenterCSS}
`

const GameWrapper = styled.div`
	width: 285px;
	${FlexColumnCSS}
	align-items: center;
	cursor: pointer;
`

const TitleBox = styled.div`
	width: 100%;
	height: 107px;
	margin-bottom: 9px;
	background-color: ${({ theme }) => theme.COLOR.blue4};
	border-radius: 13px;
	color: white;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
	font-size: 30px;
	${FlexCenterCSS}
`

const ImgWrapper = styled.div`
	width: 73px;
	height: 107px;
	${FlexCenterCSS}
`

const SubTitleContent = styled.div`
	width: 100%;
	height: 47px;
	background-color: ${({ theme }) => theme.COLOR.blue1};
	border-radius: 13px;
	color: ${({ theme }) => theme.COLOR.grey1};
	font-size: 16px;
	font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
	${FlexCenterCSS}
	text-align: center;
`

const ErrorRobotWrapper = styled.div`
	width: 130px;
	height: 95px;
	margin-top: 11px;
	align-self: flex-end;
`
