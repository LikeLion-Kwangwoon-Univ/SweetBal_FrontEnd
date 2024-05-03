import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/Ai";

const Comments = () => {
  return (
    <Container>
      <Header>
        <AiOutlineLeft />
        <p>댓글</p>
      </Header>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 80%;
  border-radius: 13px;
  background-color: #d5edff;
  position: absolute;
  bottom: 0;
`;

const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.COLOR.grey1};
  font-size: 17px;
  font-weight: bold;

  & > svg {
    width: 19px;
    height: 19px;
    position: absolute;
    left: 10px;
  }
`;

export default Comments;
