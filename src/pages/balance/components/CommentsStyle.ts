import styled from "styled-components";
import { FlexCenterCSS } from "../../../styles/common";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 14px;
  box-sizing: border-box;
  border-radius: 13px;
  background-color: #d5edff;
`;

export const Header = styled.div`
  ${FlexCenterCSS};
  position: relative;
  padding: 10px;
  font-size: 17px;
  font-weight: bold;

  & > svg {
    width: 19px;
    height: 19px;
    position: absolute;
    left: 10px;
    cursor: pointer;
  }
`;

export const TargetMessage = styled.div`
  border: 3px solid ${({ theme }) => theme.COLOR.blue3};
  margin: 5px 0;
  padding: 5px;
  border-radius: 7px;
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-x: hidden;
  overflow-y: scroll;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
