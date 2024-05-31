import { FlexCenterCSS } from "@/styles/common";
import styled from "styled-components";

interface TitleInputType {
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

const TitleInput = ({ onChange }: TitleInputType) => {
  return (
    <Container>
      <Input onChange={onChange} placeholder="내용을 적어주세요." />
    </Container>
  );
};

const Container = styled.div`
  height: 107px;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.COLOR.blue4};
  border-radius: 13px;
  box-sizing: border-box;
  ${FlexCenterCSS}
`;

const Input = styled.input`
  width: 100%;
  background-color: inherit;
  outline: none;
  border: none;
  text-align: center;

  color: white;
  font-family: ${({ theme }) => theme.FONT_WEIGHT.bold};
  font-size: 25px;
  &::placeholder {
    color: white;
  }
  &:focus::placeholder {
    color: transparent;
  }
`;

export default TitleInput;
