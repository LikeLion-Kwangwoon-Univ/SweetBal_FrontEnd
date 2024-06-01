import { styled } from "styled-components";
import { FlexCenterCSS } from "../../styles/common";
import { useLocation, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isOpenCommentState } from "@/store/comments/atoms";

function NewBtn() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const setIsOpenComment = useSetRecoilState(isOpenCommentState);

  if (pathname.includes("/balance"))
    return (
      <Container onClick={() => setIsOpenComment && setIsOpenComment(true)}>
        댓글
      </Container>
    );
  else if (pathname.includes("/list"))
    return <Container onClick={() => navigate("/register")}>New</Container>;
  else return null;
}
export default NewBtn;

const Container = styled.div`
  align-self: flex-end;
  width: 63px;
  height: 63px;
  border-radius: 50%;
  position: fixed;
  bottom: 40px;

  ${FlexCenterCSS}
  border: 4px solid ${({ theme }) => theme.COLOR.blue4};
  cursor: pointer;
  animation: fadeIn forwards;
  &:hover {
    scale: 1.05;
  }
  background-color: white;
`;
