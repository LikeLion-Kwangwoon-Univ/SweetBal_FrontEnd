import { styled } from 'styled-components';
import { FlexColumnCSS } from '../../../styles/common';

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWindow = styled.div`
  width: 327px;
  height: 192px;
  background-color: white;
  position: absolute;
  align-items: center;
  top: 343px;
  border-radius: 12px;
  ${FlexColumnCSS}
`;

export const ModalTItle = styled.div`
  color: ${({ theme }) => theme.COLOR.grey2};
  margin-top: 27px;
  font-size: 18px;
`;

export const ModalText = styled.div`
  color: ${({ theme }) => theme.COLOR.grey2};
  margin-top: 45px;
  font-size: 16px;
`;

export const AcceptButton = styled.button`
  width: 142px;
  height: 35px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.COLOR.blue4};
  font-size: 16px;
  color: white;
  margin-top: 36px;
  border: none;
`;
