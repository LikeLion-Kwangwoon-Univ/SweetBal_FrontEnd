import styled from "styled-components";
import { FlexCenterCSS } from "@/styles/common";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: calc(100vh - 132px - 20px);
  padding: 14px;
  box-sizing: border-box;
  border-radius: 13px;
  background-color: #d5edff;
`;

export const Header = styled.div`
  ${FlexCenterCSS};
  position: relative;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;

  & > svg {
    width: 19px;
    height: 19px;
    position: absolute;
    left: 0;
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
