import styled from "styled-components";
import { FlexColumnCSS } from "../../styles/common";
import { SyncLoader } from "react-spinners";

interface LoadingPageType {
  $width: string;
  $height: string;
}

const LoadingPage = ({ $width, $height }: LoadingPageType) => {
  return (
    <Container $width={$width} $height={$height}>
      <SipnnerWrapper>
        <SyncLoader color="#2987F5" size={15} />
      </SipnnerWrapper>
    </Container>
  );
};

export default LoadingPage;

const Container = styled.div<LoadingPageType>`
  ${FlexColumnCSS};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  margin-top: 20px;
  margin: 0 auto;
`;

const SipnnerWrapper = styled.div`
  margin-top: 25px;
`;
