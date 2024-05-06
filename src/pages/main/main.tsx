import styled from "styled-components";
import Comments from "../balance/components/Comments";

function MainPage() {
  return (
    <Container>
      <Comments />
    </Container>
  );
}

const Container = styled.div`
  width: 350px;
  height: 500px;
  overflow: hidden;
  background: white;
  margin: 0 auto;
  position: relative;
`;

export default MainPage;
