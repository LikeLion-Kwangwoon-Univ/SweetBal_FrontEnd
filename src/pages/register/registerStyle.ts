import { styled } from 'styled-components';
import { FlexCenterCSS } from '../../styles/common';

export const Hspace = styled.div`
  height: 66px;
`;

export const TitleInput = styled.input`
  width: 285px;
  height: 107px;
  margin-bottom: 9px;
  text-align: center;
  background-color: ${({ theme }) => theme.COLOR.blue4};
  border-radius: 13px;
  box-sizing: border-box;
  color: white;
  border: none;
  font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-size: 30px;
  &::placeholder {
    color: white;
  }
  &:focus::placeholder {
    color: transparent;
  }
  ${FlexCenterCSS}
`;

export const DetailInput = styled.textarea`
  width: 285px;
  height: 47px;
  background-color: ${({ theme }) => theme.COLOR.blue1};
  border-radius: 13px;
  box-sizing: border-box;
  color: ${({ theme }) => theme.COLOR.grey1};
  border: none;
  font-size: 16px;
  font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
  &::placeholder {
    color: ${({ theme }) => theme.COLOR.grey1};
    line-height: 43px;
  }
  &:focus::placeholder {
    color: transparent;
  }
  ${FlexCenterCSS}
  text-align: center;
  resize: none;
`;

export const AddButton = styled.button`
  width: 229px;
  height: 40px;
  border-radius: 8px;
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
  color: white;
  background-color: ${(props) =>
    props.disabled ? '#D9D9D9' : ({ theme }) => theme.COLOR.blue4};
  border: none;
`;
