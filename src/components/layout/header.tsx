import { styled } from "styled-components";
import { FlexCenterCSS } from "../../styles/common";
import { Outlet } from "react-router-dom";
import logo from "../../assets/imgs/logo.svg";


function Header() {
  return (
    <>
      <Container>
        <h1>로고 자리</h1>
        <img src={logo} alt="logo" />
      </Container>
      <Outlet />
    </>
  );
}
export default Header;

const Container = styled.div`
  height: 200px;
  ${FlexCenterCSS}
  background-color: ${({ theme }) => theme.COLOR.blue4};
  height: 132px;
  ${FlexCenterCSS}
`;
