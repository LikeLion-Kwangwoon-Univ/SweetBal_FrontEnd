import { styled } from "styled-components";
import { FlexCenterCSS } from "../../styles/common";
import { useLocation, useNavigate } from "react-router-dom";
import { SetStateAction } from "react";

interface NewBtnProps {
  setIsOpenComment?: React.Dispatch<SetStateAction<boolean>>;
}

function NewBtn({ setIsOpenComment }: NewBtnProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const HandleNew = () => {
    if (pathname === "/balance" && setIsOpenComment) setIsOpenComment(true);
    else navigate("/register");
  };

  return (
    <Container onClick={HandleNew}>
      {pathname === "/balance" ? "댓글" : "New"}
    </Container>
  );
}
export default NewBtn;

const Container = styled.div`
  width: 63px;
  height: 63px;
  position: fixed;
  border-radius: 50%;
  bottom: 60px;
  right: 40%;
  background-color: white;
  ${FlexCenterCSS}
  border: 4px solid ${({ theme }) => theme.COLOR.blue4};
  cursor: pointer;
  animation: fadeIn forwards;
  &:hover {
    scale: 1.05;
  }
`;
