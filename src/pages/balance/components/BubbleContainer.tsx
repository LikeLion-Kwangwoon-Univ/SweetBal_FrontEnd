import { ReactNode } from "react";
import styled from "styled-components";

interface BubbleContainerProps {
  sideInfo: number;
  children: ReactNode;
}

const BubbleContainer = ({ sideInfo, children }: BubbleContainerProps) => {
  return (
    <Container>
      {sideInfo === 0 ? <LeftTail /> : <RightTail />}
      {children}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-width: 30px;
  max-width: 200px;
  padding: 10px;
  background-color: white;
  border-radius: 11px;
  font-size: 13px;
  overflow-wrap: break-word;
`;

const LeftTail = styled.div`
  position: absolute;
  top: -11.5px;
  left: -19px;
  border: 10px solid transparent;
  border-left: 15px solid transparent;
  border-right: 15px solid white;
  border-radius: 5px;
  transform: rotate(40deg);
`;

const RightTail = styled.div`
  position: absolute;
  top: -11.5px;
  right: -19px;
  border: 10px solid transparent;
  border-left: 15px solid white;
  border-right: 15px solid transparent;
  border-radius: 5px;
  transform: rotate(-40deg);
`;

export default BubbleContainer;
