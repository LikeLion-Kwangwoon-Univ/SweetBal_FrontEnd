import styled from "styled-components";
import { FlexCenterCSS, FlexColumnCSS } from "../../styles/common";
import { BarLoader } from "react-spinners";
import Logo from "../../assets/loading/logo.svg";
const LoadingPage = () => {
  return (
    <Border>
      <Container>
        <LogoWrapper>
          <img src={Logo}></img>
        </LogoWrapper>
        <WaitSpan>잠시만 기다리세요</WaitSpan>
        <BarLoader />
      </Container>
    </Border>
  );
};

export default LoadingPage;

const Border = styled.div`
  ${FlexCenterCSS};
  background-color: ${({ theme }) => theme.COLOR.blue4};
`;

const Container = styled.div`
  ${FlexColumnCSS};
  align-items: center;
  background-color: white;
  display: flex;
  width: 350px;
  margin: 0 auto;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.blue4};
`;

const LogoWrapper = styled.div`
  width: 313px;
  height: 141px;
  margin: 0 auto;
  margin-top: 250px;
`;

const WaitSpan = styled.span`
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  margin: 0 auto;
  color: white;
  font-size: 20px;
`;
