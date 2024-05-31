import { FlexCenterCSS } from "@/styles/common";
import styled from "styled-components";

interface DetailInputType {
  onChange: (event: React.FormEvent<HTMLTextAreaElement>) => void;
}

const DetailInput = ({ onChange }: DetailInputType) => {
  return (
    <Container>
      <TextArea onChange={onChange} placeholder="내용을 적어주세요." />
    </Container>
  );
};

const Container = styled.div`
  height: 47px;
  padding: 10px;
  background-color: ${({ theme }) => theme.COLOR.blue1};
  border-radius: 13px;
  box-sizing: border-box;
  ${FlexCenterCSS}
`;

const TextArea = styled.textarea`
  width: 100%;
  background-color: inherit;
  outline: none;
  border: none;
  text-align: center;

  color: ${({ theme }) => theme.COLOR.grey1};
  font-family: ${({ theme }) => theme.FONT_WEIGHT.regular};
  font-size: 16px;
  &::placeholder {
    color: ${({ theme }) => theme.COLOR.grey1};
    line-height: 43px;
  }
  &:focus::placeholder {
    color: transparent;
  }
  resize: none;
`;

export default DetailInput;
