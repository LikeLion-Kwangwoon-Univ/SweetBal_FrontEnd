import styled from "styled-components";

const Bubble = () => {
  return (
    <>
      <Container>댓글</Container>
    </>
  );
};

const Container = styled.div`
  position: relative;
  display: inline-block;
  padding: 10px;
  background-color: white;
  border-radius: 11px;
  font-size: 13px;

  &:before {
    content: "";
    position: absolute;
    width: 0px;
    height: 0px;
    top: -11.5px;
    left: -19px;
    border: 10px solid transparent;
    border-left: 15px solid transparent;
    border-right: 15px solid white;
    border-radius: 5px;
    transform: rotate(40deg);
  }
`;

export default Bubble;
